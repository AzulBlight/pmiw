function Pokeball(){
  
  let segundos = floor(contador);
  
  if (segundos>1050 && segundos<1150){
    
    let progreso = map(contador,1050,1150,0,1);
    
    let tamano = map(progreso,0,1,0,2000);
    let angulo = map(progreso,0,1,0, -TWO_PI*2);
    
  push();
  translate(width/2,height/2);
  rotate(angulo);
  imageMode(CENTER);
  image(Pok,0,0,tamano,tamano);
  pop();
  
  }
   //transicion a blanco
 if (segundos >=1125){
      
 let opacidad = map (contador,1125,1150,0,255);
 opacidad = constrain(opacidad,0,255);
 fill(255,opacidad);
 rectMode(CORNER);
 rect(0,0,810,610);
 }
}
