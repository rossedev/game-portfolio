import { scaleFactor } from "../utils/constants";

export const configPlayer = (kab: any) => {
  const player = kab.make([
    kab.sprite("spritesheet", { anim: "idle-down" }),
    kab.area({
      shape: new kab.Rect(kab.vec2(0, 3), 10, 10),
    }),
    kab.body(),
    kab.anchor("center"),
    kab.pos(),
    kab.scale(scaleFactor),
    {
      speed: 250,
      direction: "down",
      isInDialogue: false,
    },
    "id",
  ]);
  return player;
};
