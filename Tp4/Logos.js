let yLogo = 300;

function LogoFinal(){
  
let segundos = floor(contador);

if (segundos >= 2005){
  imageMode(CENTER);
  
if (segundos >= 2050 && segundos < 2080){
  
 let frameLogo = floor ((segundos - 2050)/5);
  if (frameLogo >=6){
  frameLogo =0;
 }
 image(LogoP[frameLogo],400,300,501,129);
  }
  else if (segundos >= 2150 && segundos < 2180){
  
 let frameLogo = floor ((segundos - 2150)/5);
  if (frameLogo >=6){
  frameLogo =0;
 }

 image(LogoP[frameLogo],400,300,501,129);
  }
  else if (segundos >= 2250 && segundos < 2280){
  
 let frameLogo = floor ((segundos - 2250)/5);
  if (frameLogo >=6){
  frameLogo =0;
 }

 image(LogoP[frameLogo],400,300,501,129);
  }else if (segundos >= 2300){
    if(yLogo > 100){
    yLogo -= 3;
   }
    image(LogoP[0],400,yLogo,501,129);
  }
  else{
  image(LogoP[0],400,300,501,129);
 
  }
 }
 
 if(segundos >= 2360){
   RayquazaAnim();
 imageMode(CENTER);
 image(LogoP[0],400,100,501,129);
 image(LogoE,400,210,379,87);
 }
 
}

function RayquazaAnim(){
let segundos = floor(contador);
if(segundos>=2450){
let frameRay = floor ((segundos - 2450) / 8) % 10;
if (frameRay>5){
 frameRay = 10- frameRay;
}
  imageMode(CENTER);
 image(FondoRay[frameRay],400,300,800,600);
  image(Press,400,350)
 }
}
