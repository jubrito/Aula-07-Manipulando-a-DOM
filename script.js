
let paragrafoDeTexto = document.querySelector("p");
let titulo = document.querySelector("h1");
let corpo = document.querySelector("body");
let imagem = document.querySelector("img");
let botaoColorido = document.querySelector("#colorido");
let botaoGotico = document.querySelector("#gotico");

function deixarColorido(){
  corpo.style.backgroundColor = "purple";
  paragrafoDeTexto.innerHTML="Estilo escolhido: colorido";
  imagem.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/96/disappointed-but-relieved-face_1f625.png";
}

function deixarGotico(){
  corpo.style.backgroundColor="black";
  paragrafoDeTexto.innerHTML="Estilo escolhido: gótico.";
  imagem.src="https://cdn.shopify.com/s/files/1/1061/1924/products/Shyly_Smiling_Face_Emoji_large.png?v=1480481055";
}

botaoColorido.onclick=deixarColorido;
botaoGotico.onclick=deixarGotico;


// MANIPULANDO HTML
titulo.innerHTML = "Manipule a DOM"
imagem.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/96/disappointed-but-relieved-face_1f625.png";

// MANIPULANDO CSS
imagem.src="https://i.pinimg.com/originals/cf/f2/25/cff225b9cd29abc501728b4c117f7867.png";
titulo.style.color = "white";
paragrafoDeTexto.style.fontSize = "12pt";
paragrafoDeTexto.style.color = "white";
corpo.style.backgroundColor = "gray";


botaoColorido.onmousedown = function () {
  botaoColorido.style.backgroundColor = "black";
  botaoColorido.style.color = "white";
}; 
botaoColorido.onmouseup = function () {
  botaoColorido.style.backgroundColor = "white";
  botaoColorido.style.color = "black";
}; 
botaoGotico.onmousedown = function () {
  botaoGotico.style.backgroundColor = "black";
  botaoGotico.style.color = "white";
}; 
botaoGotico.onmouseup = function () {
  botaoGotico.style.backgroundColor = "white";
  botaoGotico.style.color = "black";
}; 