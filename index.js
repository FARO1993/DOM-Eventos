function main() {
  //código para mover el cuadrado con las flechas del teclado.
  let elpacMan = document.querySelector(".pac-man");

  //Función para obtener el código de las arrow keys presionadas.
  document.addEventListener("keydown", (elEvento) => {
    const marginLeftText = elpacMan.style.marginLeft.replace("px", "");
    const marginLeft = parseInt(marginLeftText || "0");
    let newMarginLeft = marginLeft;

    const marginTopText = elpacMan.style.marginTop.replace("px", "");
    const marginTop = parseInt(marginTopText || "0");
    let newMarginTop = marginTop;

    if (elEvento.code == "ArrowLeft") {
      newMarginLeft--;
    } else if (elEvento.code == "ArrowRight") {
      newMarginLeft++;
    } else if (elEvento.code == "ArrowUp") {
      newMarginTop--;
    } else if (elEvento.code == "ArrowDown") {
      newMarginTop++;
    }

    elpacMan.style.marginLeft = newMarginLeft + "px";
    elpacMan.style.marginTop = newMarginTop + "px";
  });
}

main();
