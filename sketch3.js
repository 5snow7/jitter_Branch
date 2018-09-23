let a=0,b; let sponge=[];
let can;let p,p1;

function setup(){
startup();
 can=createCanvas(500,500,WEBGL);can.position(600,50,20);
 can.style('border-style','double');
 can.style('border-width','30px');
 can.style('border-color','green');
  p=createP("text");p1=createP("press mouse in canvas");
 b=new Box(0,0,0,200);
 sponge.push(b);
can.mousePressed(genBoxes);
 
p.position(40,510);
p.position(40,300);
p.html(sponge.length);

 
}


function draw(){
background(51);//noStroke();
noFill();
 rotateX(a);rotateY(0.4*a);rotateZ(0.6*a);
 for(let j=0;j<sponge.length;j++){sponge[j].show();}
 a+=0.01;
p.html(sponge.length);
}

function genBoxes(){
let next=[];testsponge=[];
for(let j=0;j<sponge.length;j++){
next=sponge[j].generate();
testsponge=testsponge.concat(next);
}
sponge=testsponge;
}



