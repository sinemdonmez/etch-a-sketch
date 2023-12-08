body = document.querySelector("body");

container = document.createElement("div");
container.style.border="solid"

for(x=0; x<16;x++) {
    rowContainer = document.createElement("div");
    for( let i =0; i<16; i++){
        div = document.createElement("div");
        div.style.height="30px";
        div.style.width="30px";
        div.style.margin="auto";
        (function(div) {
            div.addEventListener("mouseenter", () => div.style.backgroundColor = "purple");
        })(div);

        rowContainer.appendChild(div);
    }
    rowContainer.style.display = "flex";
    container.appendChild(rowContainer);
}

container.style.height="960px";
container.style.width="960px";

button = document.createElement("button");
button.textContent = "CHANGE GRID SIZE";
button.style.width = "200px";
button.style.height = "20px";
button.style.margin = "10px";

body.appendChild(button);


body.appendChild(container);

button.addEventListener("click", myFunction);
function myFunction(){
    let size = prompt("What is the wanted grid size?");
    if(size>100){
        alert("Size should be smaller than 100")
    }
    else{
        //clean old grid
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        //create new grid
        let square = 960/size;
        for(x=0; x<size;x++) {
            rowContainer = document.createElement("div");
            for( let i =0; i<size; i++){
                div = document.createElement("div");
                div.style.height=square+"px";
                div.style.width=square+"px";
                div.style.margin="auto";
                (function(div) {
                    div.addEventListener("mouseenter", () => div.style.backgroundColor = "purple");
                })(div);
        
                rowContainer.appendChild(div);
            }
            rowContainer.style.display = "flex";
            container.appendChild(rowContainer);
        }
    }
}

