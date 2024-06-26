export function displayDialogue(text: string, onDisplayEnd: () => void) {
  const dialogueUI = document.getElementById(
    "textbox-container"
  ) as HTMLInputElement;
  const dialogue = document.getElementById("dialogue") as HTMLInputElement;
  const closeBtn = document.getElementById("close") as HTMLInputElement;
  const canvas = document.getElementById("game") as HTMLInputElement;


  
  dialogueUI.style.display = "block";
  let index = 0;
  let currentText = "";

  const intervalRef = setInterval(() => {
    if (text && index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 1);

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
    canvas.focus();

    clearInterval(intervalRef);

    closeBtn.removeEventListener("click", onCloseBtnClick);
    document.removeEventListener("keydown", (key: KeyboardEvent) =>
      onKeyDown(key, closeBtn)
    );
  }

  closeBtn.addEventListener("click", onCloseBtnClick);

  document.addEventListener("keydown", (key: KeyboardEvent) => {
    onKeyDown(key, closeBtn);
  });
}

function onKeyDown(key: KeyboardEvent, closeBtn: HTMLInputElement) {
  if (key.code === "Enter" || key.code === "Escape") {
    closeBtn.click();
  }
}
