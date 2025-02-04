function moveRandomEl(elm) {
    elm.style.position = "absolute";
    const x = Math.floor(Math.random() * 90 + 5) + "%";
    const y = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.transform = `translate(${x}, ${y})`;
  }