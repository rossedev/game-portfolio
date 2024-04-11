import { getI18N } from "@/i18n";
import type { Layer } from "@/types/map";
import { getLangFromUrl } from "@/utils/configCanvas";
import { scaleFactor } from "@/utils/constants";
import { displayDialogue } from "./displayDialogue";

const urlParams = new URL(location.href);
const locale = getLangFromUrl(urlParams);
const i18n: any = getI18N({ currentLocale: locale });

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
