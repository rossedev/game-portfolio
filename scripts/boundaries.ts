import { getLanguage, getI18N } from "@/i18n";
import type { Layer } from "@/types/map";
import { scaleFactor } from "@/utils/constants";
import { displayDialogue } from "./displayDialogue";

const locale = getLanguage();
const i18n: any = getI18N({ currentLocale: locale || "en" });

export const boundaries = (layer: Layer, kab: any, player: any, map: any) => {
  
  if (layer.name === "boundaries") {
    for (const boundary of layer.objects) {
      map.add([
        kab.area({
          shape: new kab.Rect(kab.vec2(0), boundary.width, boundary.height),
        }),
        kab.body({ isStatic: true }),
        kab.pos(boundary.x, boundary.y),
        boundary.name,
      ]);

      if (boundary.name) {
        player.onCollide(boundary.name, () => {
          player.isInDialogue = true;
          const translate = i18n[boundary.name];
          displayDialogue(translate, () => (player.isInDialogue = false));
        });
      }
    }
  }

  if (layer.name === "spawnpoints") {
    for (const entity of layer.objects) {
      if (entity.name === "player") {
        player.pos = kab.vec2(
          (map.pos.x + entity.x) * scaleFactor,
          (map.pos.y + entity.y) * scaleFactor
        );
        kab.add(player);
      }
    }
  }
};

export const dirOfBoundary = ({
  id,
  layers,
  kab,
  player,
  map,
}: {
  id: any;
  layers: any;
  kab: any;
  player: any;
  map: any;
}) => {
  for (const layer of layers) {
    if (layer.name === "boundaries") {
      for (const boundary of layer.objects) {
        if (boundary.name === id) {
          movePlayerPerFragment(kab, player, map, boundary);
        }
      }
    }
  }
};

const vectorSubtract = (vectorA: any, vectorB: any) => {
  return {
    x: (vectorA.x - vectorB.x) * scaleFactor,
    y: (vectorA.y - vectorB.y) * scaleFactor,
  };
};

const movePlayerPerFragment = (
  kab: any,
  player: any,
  map: any,
  boundary: any
) => {
  const coordX = boundary.x
  let coordY = boundary.y

  if (player.pos.x === coordX && player.pos.x === coordY) {
    return;
  }

  if (boundary.name === "cs-degree" || boundary.name === "pc") {
    coordY += 10;
  }

  const destination = kab.toWorld(kab.vec2(coordX, coordY));
  const distance = Math.sqrt(
    Math.pow(player.pos.x - coordX, 2) +
      Math.pow(player.pos.y - coordY, 2)
  );

  if (distance > 1) {
    const dir = vectorSubtract(destination, player.pos);
    const length = Math.sqrt(dir.x * dir.x + dir.y * dir.y);
    const unitDir = { x: dir.x / length, y: dir.y / length };
    let vel = {
      x: unitDir.x * player.speed * kab.dt(),
      y: unitDir.y * player.speed * kab.dt(),
    };

    player.moveBy(vel);
    kab.wait(0, movePlayerPerFragment(kab, player, map, boundary));
  } else {
    player.play("idle-down");
    player.direction = "down";

    player.pos = kab.vec2(
      (map.pos.x + coordX) * scaleFactor,
      (map.pos.y + coordY) * scaleFactor
    );
  }
};
