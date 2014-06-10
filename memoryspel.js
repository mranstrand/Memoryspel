var baksidor = [];

baksidor[0] = "82.jpg";
baksidor[1] = "troja.jpg";
baksidor[2] = "troja.jpg";
baksidor[3] = "82.jpg";
baksidor[4] = "82.jpg";
baksidor[5] = "82.jpg";

function klickadBild(index){
    
    document.getElementById("bild" + index).src = "pics/" + baksidor[index];
    
}