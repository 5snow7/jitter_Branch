let can1;
let p, c;
let par,pmove;
let t,r=50;


function setup() {
  // put setup code here
  can1 = createCanvas(800, 400);
  can1.position(400, 50);can1.class("ch_class");
  t=new logo(100,200,0);
  p = new part(100, 100);
  //can.mousePressed(chcolor);
  par = createP("test again twice w Godaddy2222");
  par.position(30, 400);
  startup1();
pmove=select("#p2");
}
let x3 = 0;
let y3 = 0;
let an = 0;
let col=50;
function draw() {
  background(200, 0, 0);fill(col,0,0);
  col+=1;
  if(col>250){col=50;}

  ellipse(50,50,100,100);

  fill(0, 0, 250);
  line(10, 10, 300, 200);strokeWeight(5);stroke(random(250),0,0);
  t.fd(x3);x3+=5;y3+=2;
t.rt(an);an+=PI/4.0;
strokeWeight(3);stroke((250),0,0);
if(x3>200){x3=0;t.set1(width/2,height/2,0);}
  ellipse(100, 100, 40, 40);
  fill(250, 0, 250);
  rect(200, 200, 50, 20);
  ellipse(200, 200, 40, 40);
  fill(0, 0, 250);
  line(20, 20, 200, 200);
  ellipse(100, 300, 30, 50);
  rect(29, 29, 200, 20);
 pmove.position(x3+1000,y3);
if(y3>400){y3=0;}
    p.display();p.move();p.chbd();
//if(how_old(12)=='a'){r=200;}else{}

}


let ch1,ch2,ch3;let h;
function startup1(){
ch1=select("#par");ch1.position(160,120);
ch1.class("ch_class");
ch2=select("#par2");ch2.position(160,220);
ch2.class("ch_class");
ch3=select("#par3");ch3.position(160,320);
ch3.class("ch_class");
//h=select("#head");h.position(screen.width/2,20);
}

