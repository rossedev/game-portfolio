import { boundaries } from "../components/boundaries";
import { configPlayer } from "../components/configPlayer";
import {
  afterMovement,
  handleKeyPress,
  mouseMovements,
} from "../components/movements";
import { kab } from "../utils/kaboomCtx";
import { scaleFactor } from "./constants";
import { setCamScale } from "./utils";

kab.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 39,
  sliceY: 31,
  anims: {
    "idle-down": 964,
    "walk-down": { from: 964, to: 967, loop: true, speed: 8 },
    "idle-side": 1003,
    "walk-side": { from: 1003, to: 1006, loop: true, speed: 8 },
    "idle-up": 1042,
    "walk-up": { from: 1042, to: 1045, loop: true, speed: 8 },
  },
});

kab.loadSprite("map", "./map.png");
kab.setBackground(kab.Color.fromHex("#242229"));

kab.scene("index", async () => {
  const mapData = await (await fetch("./map.json")).json();
  const layers = mapData.layers;

  const map = kab.add([kab.sprite("map"), kab.pos(0), kab.scale(scaleFactor)]);

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

  kab.onMouseDown((mouseBtn) => {
    mouseMovements(kab, mouseBtn, player);
  });

  kab.onMouseRelease(() => {
    afterMovement(player);
  });

  kab.onKeyRelease(() => {
    afterMovement(player);
  });

  kab.onKeyDown("down", () => {
    handleKeyPress({
      player,
      anim: "walk-down",
      direction: "down",
      coordInX: false,
    });
    
  });

  kab.onKeyDown("up", () => {
    handleKeyPress({
      player,
      anim: "walk-up",
      direction: "up",
      coordInX: false,
    });
  });
  kab.onKeyDown("left", () => {
    handleKeyPress({
      player,
      anim: "walk-side",
      direction: "left",
      coordInX: true,
    });
  });
  kab.onKeyDown("right", () => {
    handleKeyPress({
      player,
      anim: "walk-side",
      direction: "right",
      coordInX: true,
    });
  });
});

kab.go("index");
