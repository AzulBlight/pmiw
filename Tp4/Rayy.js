
let xNubeI = -360;
let xNubeD = 800;

function RayquazaIntro(){

    let segundos = floor(contador);

 if (segundos >= 1540){
    image(CieloC,400,300,800,600)
    image(Sol,400,300,120,120)
    fill(0);
    rect(0,0,800,130);
    rect(0,470,800,130);
  
  imageMode (CORNER);
  
   if (xNubeI < -10){
  xNubeI +=4;
 }   
   if (xNubeD > 440){
  xNubeD -= 4;
 }
    image(NubeI, xNubeI,130,360,350);
    image(NubeD, xNubeD,130,360,350);
 }
 
 if (segundos>=1610){
  let opacidad = map (contador,1610,1640,0,255);
 opacidad = constrain(opacidad,0,255);
 fill(54,60,65,opacidad);
 rectMode(CORNER);
 rect(0,0,810,610);
 }
 //bordes negros
  if (segundos >= 1540){
    fill(0);
    rect(0,0,800,130);
    rect(0,470,800,130);
  }
}

function RayquazaRayos(){
  
let segundos = floor(contador);

  if (segundos >= 1680){
    fill(255)
    rect(0,0,800,600);
    imageMode(CENTER)
    image(Ray[0],400,300,308,206);
  }
  if (segundos >= 1700){
   fill(54,60,65)
   rect(0,0,800,600);
  }
  if (segundos >= 1740){
    fill(255)
    rect(0,0,800,600);
    imageMode(CENTER)
    image(Ray[0],400,300,308,206);
  }
    if (segundos >= 1760){
   fill(54,60,65)
   rect(0,0,800,600);
  }
  if (segundos >= 1780){
    fill(255)
    rect(0,0,800,600);
    imageMode(CENTER)
    image(Ray[0],400,300,358,256);
  }
    if (segundos >= 1800){
   fill(54,60,65)
   rect(0,0,800,600);
  }
  if(segundos >= 1820){
   let opacidad = (segundos - 1820)*15;
    fill(153,197,238,opacidad);
    rect(0,0,800,600);
    imageMode(CENTER)
    image(Ray[1],400,300,358,256);
  }
  if(segundos >= 1840){
  let frameRay = floor((contador - 1840) / 5);
  frameRay = min(frameRay, 2);
  
  imageMode(CENTER);
  image(Ray[frameRay + 2], 400, 300,358,256);
  }
  if(segundos >= 1900){
    
    if(segundos < 2000){
     let tamanoBlast = 0 + (segundos - 1900)*15;
     imageMode(CENTER);
     image(Blast, 400, 300,tamanoBlast,tamanoBlast);
  } else {
  fill(255);
  rect(0,0,800,600);
  if (segundos >= 1960 && segundos < 1965){
  let opacidad = (segundos - 1960) *50;
  fill(0,0,0,opacidad);
  rect(0,0,800,600);
  }else {
  fill(0);
  rect(0,0,800,600);
  }
 }
}
  
  
  
  //bordes negros
    if (segundos >= 1540 && segundos<= 2010){
    fill(0);
    rect(0,0,800,130);
    rect(0,470,800,130);
  }
}
