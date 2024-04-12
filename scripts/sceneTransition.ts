const message = document.querySelector(".messageScene") as HTMLInputElement;
const sceneTransition = document.querySelector(
  ".scene-transition"
) as HTMLInputElement;
const sceneTransitionTitle = document.querySelectorAll(
  ".scene-transition__tile"
);

const handleClick = () => {
  message.classList.add("fadeOutAnimation");
  sceneTransition.classList.add("hiddenSceneAnimation");

  sceneTransitionTitle.forEach((scene: any) => {
    scene.classList.add(`slideInTilesAnimation`);
  });
};

if (localStorage && localStorage.getItem("modalClosed") === "true") {
  handleClick();
}
