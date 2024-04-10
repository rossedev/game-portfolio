import { scaleFactor, spriteCharacterName } from "../utils/constants";

export const configPlayer = (kab: any) => {
  const player = kab.make([
    kab.sprite(spriteCharacterName, { anim: "idle-down" }),
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

export const characterPlayer = () => {
  return {
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
  };
};
