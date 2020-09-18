class Log extends BaseClass{
  constructor(x,y,height,width){
    super(x,y,20,height,width);
    this.height = height;
    this.width = width;
    this.image = loadImage("sprites/wood2.png");
   // Matter.Body.setAngle(this.body, angle);
  }
  display(){
    super.visible = false;

  }
}