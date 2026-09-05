function GyK(){
  
 let frames = floor(contador);
 
  if(frames>=1150){ 
    imageMode(CORNER);
    image(FondoG,0,0,800,600)
    fill(0);
    rect(0,0,800,130);
    rect(0,470,800,130);
 }
  
  if(frames>=1325){ 
    imageMode(CORNER);
    image(FondoK,0,0,800,600)
    fill(0);
    rect(0,0,800,130);
    rect(0,470,800,130);
    
 }
 
 Gro()
 Kyog()
 
}

function Gro() {
  
let segundos = floor(contador);


if (segundos>=1150 && segundos < 1200) {
let frameGrou = floor(contador / 10) % 5;
imageMode(CENTER);
image(Grou[frameGrou], 400, 300,408,306);
 } else if (segundos>=1200 && segundos< 1325) {
 let frameGrouB = floor(contador / 10) % 5;
imageMode(CENTER);
image(GrouB[frameGrouB], 400, 300,408,306);
 }
}

function Kyog(){
  
let segundos = floor(contador);

if (segundos>=1325 && segundos < 1375) {
let frameKyo = floor(contador / 10) % 5;
imageMode(CENTER);
image(Kyo[frameKyo], 400, 300,408,306);
 } else if (segundos>=1375) {
 let frameKyoB = floor(contador / 10) % 5;
imageMode(CENTER);
image(KyoB[frameKyoB], 400, 300,408,306);
 }
} 
