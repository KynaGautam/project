class ComputerArcher{
  constructor(x,y,width,height,angle){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/computerArcher.png");
    this.angle = angle;

}
display(){
    if( keyIsDown(UP_ARROW) && PlayerAncher,body.angle<1.77){
        angleValue  =0.1;

    }else{
        angleValue=-0.1;
    }
    if( keyIsDown(DOWN_ARROW) && PlayerAncher,body.angle>1.47){
        angleValue  = -0.1;

    }else{
        angleValue=0.1;
    }
    fill("#676e6a");
    push();
    translate(this.x,this.y);
    Matter.Body.setAngle(this.body,-PI/2)
        rotate(this.angle);
    rect(-10,-20,this.width,this.height);
    pop();
    arc(this.x - 30 , this.y + 90 , 100,200,PI , TWO_PI);
    noFill();
    
}
}