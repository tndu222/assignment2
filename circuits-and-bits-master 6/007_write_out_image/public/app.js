
var mr_dragon, lazy_dragon; //these are global variables

function preload() {
  geometry = loadImage("./geometry.png");
  geometry1 = loadImage("./geometry1.png");
}

function setup() {
  canvas_context=createCanvas(983,983);
  background(255,255,255,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<6;x++){
      for(var y=0;y<6;y++){
        image(geometry,x*196,y*196,200,200);
        console.log("x:"+x+"y:"+y);
      }
    }


  // for(var counter=0;counter<6;counter=counter+1){
  //   if(counter%2==0){
  //     image(geometry,counter*196,0,200,200);
  //   }
  //   else{
  //     image(geometry1,counter*196,0,200,200);
  //   }
  // }

  save(canvas_context, "dragonImage.jpg")
  //https://p5js.org/reference/#/p5/save
}
