import type { Layer } from "../types/map";
import { dialogueData, scaleFactor } from "../utils/constants";
import { displayDialogue } from "../utils/displayDialogue";

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
          displayDialogue(
            dialogueData[boundary.name],
            () => (player.isInDialogue = false)
          );
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
