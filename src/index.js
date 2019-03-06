import "./styles.css";
import { router } from "./router";
import { DragNDrop } from "./components/drag-n-drop";

router({
  "/viewer": () => {
    document.querySelector(".route-intro").classList.add("-hidden");
    document.querySelector(".route-viewer").classList.remove("-hidden");
  },
  "/": () => {
    document.querySelector(".route-intro").classList.remove("-hidden");
    document.querySelector(".route-viewer").classList.add("-hidden");
    return [DragNDrop()];
  }
});
