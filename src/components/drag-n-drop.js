import "./drag-n-drop.css";
import { go } from "../router";

export function DragNDrop() {
  let elem = document.querySelector(".drag-n-drop");

  function handleDragOver(evt) {
    evt.preventDefault();
  }

  function handleDrop(evt) {
    console.log(evt);
    evt.preventDefault();
  }

  function handleDragEnter() {
    elem.classList.add("-active");
  }

  function handleDragExit() {
    elem.classList.remove("-active");
  }

  function handleClick(evt) {
    evt.preventDefault();
    go("/viewer");
  }

  elem.addEventListener("dragover", handleDragOver);
  elem.addEventListener("drop", handleDrop);
  elem.addEventListener("dragenter", handleDragEnter);
  elem.addEventListener("dragexit", handleDragExit);
  elem.addEventListener("click", handleClick);

  return () => {
    elem.removeEventListener("dragover", handleDragOver);
    elem.removeEventListener("drop", handleDrop);
    elem.removeEventListener("dragenter", handleDragEnter);
    elem.removeEventListener("dragexit", handleDragExit);
    elem.removeEventListener("click", handleClick);
  };
}
