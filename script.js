const container = document.querySelector(".container");
const colorPicker = document.getElementById("color");
let isMouseDown = false; 
let isMouseOver = false;
let corAtual = "#fff";

let squares = parseInt(prompt("tamanho: "));

document.addEventListener("mousedown", ()=>{
  isMouseDown = true;
});

document.addEventListener("mouseup", ()=>{
  isMouseDown = false;
});


const createPixel = () => {
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");

  const containerWidth = getComputedStyle(container).width; // Get container width after prompt
  const pixelWidth = parseInt(containerWidth) / squares; // Calculate pixel width
  pixel.style.width = `${pixelWidth}px`;
  pixel.style.height = `${pixelWidth}px`; // Set equal height for square grid

  pixel.addEventListener("click", () => {
    if (!isMouseDown) {
      pixel.style.backgroundColor = colorPicker.value;
    }
  });

  pixel.addEventListener("mouseover", () => {  
    corAtual = getComputedStyle(pixel).backgroundColor;
    // console.log(corAtual);
    pixel.style.backgroundColor = colorPicker.value;
    isMouseOver = true;

    pixel.addEventListener("mouseout", () => {
      if(isMouseOver && !isMouseDown){
        pixel.style.backgroundColor = corAtual;
      }
    });

  });

	return pixel;
}

// window.onresize = () =>{
// 	console.log("foi");
// }

for(let i = 0; i < squares; i++){
  for(let j = 0; j < squares; j++){
    container.append(createPixel());
  }
}