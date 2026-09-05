
let xM = 0;
let xA1 = 0; 
let xA2 = 0;
let xP = 0;

function Escenario1(){
  
  imageMode(CORNER);

  //cielo
    if(cielo){
    image(cielo,0,0,800,300)
    }
  
  //montañas
    if (montanas) {
       let segundos = floor(contador / 60); //contador en segundos 
    if (segundos<=12){
     xM = (contador/2) % width;
   }
  image(montanas, xM - width, 120, width, 400);
  image(montanas, xM, 120, width, 400);
 } 
  
    //arboles de atras
    if (arboles2) {
      let segundos = floor(contador / 60);
    if (segundos<=12){
    xA2 = (contador*4) % width;
    }
  image(arboles2, xA2 - width, 200, width, 210);
  image(arboles2, xA2, 200, width, 210);
  }
  
  //arboles de enfrente
    if (arboles1) {
 let segundos = floor(contador / 60);
     if (segundos<=12){
    xA1 = (contador*6) % width;
     }
  image(arboles1, xA1 - width, 190, width, 210);
  image(arboles1, xA1, 190, width, 210);
 }
 
  //pasto
  if (pasto) {
 let segundos = floor(contador / 60);
      if (segundos<=12){
   xP = (contador*8) % width;
     }
  image(pasto, xP - width, 390, width, 210);
  image(pasto, xP, 390, width, 210);
 }
 
 //Personajes
 
 Aaura()
 Mmac()
 Ttor()
 
 //transicion a blanco
 let segundos = floor(contador / 60);
 if (segundos >=16){
 let opacidad = map (contador,16*60,17*60,0,255);
 opacidad = constrain(opacidad,0,255);
 fill(255,opacidad);
 rectMode(CORNER);
 rect(0,0,810,610);
 }
}

function Aaura(){
// Aura
let segundos = floor(contador / 60); //floor elimina los decimales

let frameAura = floor(contador / 10) % 4; //produce el cambio del sprite,en este caso cambia cada 10 segundos

 let x = 530;
 if (segundos<=1){
   x = 800 - (contador - 1 * 60)*4.5; //mueve la cordenadas del personaje
 }else if (segundos>=12){
   x = 530 - (contador - 12 * 60)*7;
 }
image(Aura[frameAura], x, 300);
}

function Mmac(){
// Macnectric

let segundos = floor(contador / 60);

let frameMac = floor(contador / 9) % 4;

 let x = 170;
  if (segundos<=1){
   x = 800 - (contador - 1 * 60)*10;
  }else if (segundos>=12){
   x = 170 - (contador - 12 * 60)*5;
 }
image(Mac[frameMac], x, 400);
}

function Ttor(){
  
  let segundos = floor(contador / 60); 
  
if (segundos < 1) {
  let xa = 800 - contador * 1.60; 
let frameTor = floor(contador / 2) % 4;
image(Tor[frameTor], xa, 390);

// Torchic run
} else if (segundos < 12) {
let frameTor = floor(contador / 2) % 4;
image(Tor[frameTor], 700, 390);

// Torchic floor
}else if (segundos < 14) {
  let frameTor = 4 + floor((contador - 12 * 60) / 30); //Resta los 12 segundos para que el contador de esta animación empiece en 0 y que empiece usando el frame 4.Cada 30 frames suma 1 para pasar al frame 5.
  frameTor = min(frameTor, 5); //min es para que elija hasta el 5 como maximo y no intente buscar Tor[6],etc.
  image(Tor[frameTor], 700, 410);
  
// Torchic run again
}else if (segundos < 17) {

  let frameTor = floor((contador - 14 * 60) / 2) % 4;
  
   let x = 700;
   
   x = 700 - (contador - 14 * 60)*5;
  image(Tor[frameTor], x, 390);
  
 }
}
