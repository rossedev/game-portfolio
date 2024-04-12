import type { MouseButton } from "kaboom";
import { lowerBound, upperBound } from "@/utils/constants";

export const mouseMovements = (
  kab: any,
  mouseBtn: MouseButton,
  player: any
) => {
  if (mouseBtn !== "left" || player.isInDialogue) return;

  const worldMousePos = kab.toWorld(kab.mousePos());
  player.moveTo(worldMousePos, player.speed);

  const mouseAngle = player.pos.angle(worldMousePos);

  if (
    mouseAngle > lowerBound &&
    mouseAngle < upperBound &&
    player.curAnim() !== "walk-up"
  ) {
    player.play("walk-up");
    player.direction = "up";
    return;
  }

  if (
    mouseAngle < -lowerBound &&
    mouseAngle > -upperBound &&
    player.curAnim() !== "walk-down"
  ) {
    player.play("walk-down");
    player.direction = "down";
    return;
  }

  if (Math.abs(mouseAngle) > upperBound) {
    player.flipX = false;
    if (player.curAnim() !== "walk-side") {
      player.play("walk-side");
    }
    player.direction = "right";
    return;
  }

  if (Math.abs(mouseAngle) < lowerBound) {
    player.flipX = true;
    if (player.curAnim() !== "walk-side") {
      player.play("walk-side");
    }
    player.direction = "left";
    return;
  }
};

export const afterMovement = (player: any) => {
  if (player.direction === "down") {
    player.play("idle-down");
    return;
  }

  if (player.direction === "up") {
    player.play("idle-up");
    return;
  }

  player.play("idle-side");
};

export const handleKeyDown = ({
  player,
  anim,
  direction,
  coordInX,
}: {
  player: any;
  anim: string;
  direction: string;
  coordInX: boolean;
}) => {
  if (player.isInDialogue) return;

  const isLeftDir = direction === "left";
  const isDownDir = direction === "down";

  if (player.curAnim() !== anim) {
    player.play(anim);
  }

  player.direction = direction;

  if (coordInX) {
    player.flipX = isLeftDir;
    player.move(!isLeftDir ? player.speed : -player.speed, 0);
  } else {
    player.move(0, isDownDir ? player.speed : -player.speed);
  }
};
