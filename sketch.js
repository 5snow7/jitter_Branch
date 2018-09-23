let can;let p,c;let h,ch5,ch6,ch7;
let parts=[];
function setup() {
startup();
//ch5=select("#par5");ch5.position(1000,20);ch5.class("ch_class");
can=createCanvas(500,400);
can.position(.25*screen.width,.15*screen.height);
can.style('background','green');
p=new part(100,100);can.class("bord");
h=select("#head");
h.position(screen.width/2-150,30);
for(let j=0;j<10;j++){
parts[j]=new part(random(400),random(400));
}
frameRate(60);
ch5=select("#par5");ch5.position(980,120);
ch5.class("ch_class");
ch6=select("#par6");ch6.position(980,260);
ch6.class("ch_class");
ch7=select("#par7");ch7.position(980,400);
ch7.class("ch_class");
ch8=select("#par8");ch8.position(500,540);
ch8.class("ch_class");

}


function draw() {
  background(100,100,100);
fill(0,0,250);
ellipse(100,100,40,40);
fill(0,250,0);
rect(200,200,50,20);
ellipse(200,200,40,40);
fill(0,0,250);
ellipse(100,300,30,50);

ellipse(200,100,500,60);
p.display();
p.move();
p.chbd();
for(let j=0;j<10;j++){
parts[j].move();
parts[j].display();
parts[j].chbd();

}
}




