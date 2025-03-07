const latar =  document.getElementsByTagName("body")[0];

function setColor(str){
    latar.style.backgroundColor = str;
}

function randomColor(){
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    setColor(`rgb(${red}, ${green}, ${blue})`);
}