import type { MouseButton } from "kaboom";
import { boundaries, dirOfBoundary } from "./boundaries";
import { characterPlayer, configPlayer } from "./configPlayer";

import { mapCanvas } from "@/data/map";
import type { Map } from "@/types/map";
import { kab } from "@/utils/kaboomCtx";
import {
  backgroundColor,
  initScene,
  scaleFactor,
  spriteCharacterImage,
  spriteCharacterName,
  spriteMapImage,
  spriteMapName,
} from "@/utils/constants";
import { afterMovement, handleKeyDown, mouseMovements } from "./movements";
import { setCamScale } from "@/utils/configCanvas";

kab.loadSprite(spriteCharacterName, spriteCharacterImage, characterPlayer());

kab.loadSprite(spriteMapName, spriteMapImage);
kab.setBackground(kab.Color.fromHex(backgroundColor));

kab.scene(initScene, async () => {
  const mapData: Map = await mapCanvas();
  const layers = mapData.layers;

  const map = kab.add([
    kab.sprite(spriteMapName),
    kab.pos(0),
    kab.scale(scaleFactor),
  ]);

  const player = configPlayer(kab);

  for (const layer of layers) {
    boundaries(layer, kab, player, map);
  }

  setCamScale(kab);

  kab.onResize(() => {
    setCamScale(kab);
  });

  kab.onUpdate(() => {
    kab.camPos(player.pos.x + 10, player.pos.y + 50);
  });

  kab.onMouseDown((mouseBtn: MouseButton) => {
    mouseMovements(kab, mouseBtn, player);
  });

  kab.onMouseRelease(() => {
    afterMovement(player);
  });

  kab.onKeyRelease(() => {
    afterMovement(player);
  });

  kab.onKeyDown("down", () => {
    handleKeyDown({
      player,
      anim: "walk-down",
      direction: "down",
      coordInX: false,
    });
  });

  kab.onKeyDown("up", () => {
    handleKeyDown({
      player,
      anim: "walk-up",
      direction: "up",
      coordInX: false,
    });
  });
  kab.onKeyDown("left", () => {
    handleKeyDown({
      player,
      anim: "walk-side",
      direction: "left",
      coordInX: true,
    });
  });
  kab.onKeyDown("right", () => {
    handleKeyDown({
      player,
      anim: "walk-side",
      direction: "right",
      coordInX: true,
    });
  });

  
  
  const boundariesItems = document.querySelectorAll(".items");

  boundariesItems.forEach((item) => {
    item.addEventListener("click", function (this: HTMLElement) {
      if (player.isInDialogue) return;

      const id = this.id;
      dirOfBoundary({
        id: id,
        layers: layers,
        kab: kab,
        player: player,
        map: map,
      });
    });
  });
});

kab.go("index");
