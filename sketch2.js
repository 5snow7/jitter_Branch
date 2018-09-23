let can;let bRight;let legs,radioP;
let a,b,br;let tree=[];
function setup() {
  startup();
can=createCanvas(600,400);can.position(450,150);
can.class("can_bord");
can.mousePressed(moreLegs);
legs=createRadio();legs.option('one',1);legs.option('two',2);legs.option('three',3);
legs.option('four',4);legs.option('five',5);

legs.parent("#radio");
radioP=select('#radio');
radioP.class("radio_bord");
radioP.position(80,500);
a=createVector(width/2,height);
b=createVector(width/2,height-100);
br=new branch(a,b);
tree[0]=br;
fill(25,250,250);
rect(50,50,20,40);
}
let number=3;
function draw() {
  background(200,200,250);
for(let j=0;j<tree.length;j++){
  tree[j].show();
  tree[j].jitter();
number=legs.value();

}
}

function moreLegs(){
  for(let j=tree.length-1;j>=0;j--){
   if(number==1){tree.push(tree[j].branchR());}
    else if(number==2){tree.push(tree[j].branchR());tree.push(tree[j].branchL());}
    else if(number==3){tree.push(tree[j].branchR());tree.push(tree[j].branchL());tree.push(tree[j].branchM());}
    else if(number==4){tree.push(tree[j].branchR());tree.push(tree[j].branchL());tree.push(tree[j].branchM());tree.push(tree[j].branchRr());}
    else if(number==5){
tree.push(tree[j].branchR());tree.push(tree[j].branchL());tree.push(tree[j].branchM());tree.push(tree[j].branchRr());
tree.push(tree[j].branchLl());}

  }
}


function butt(){
legs=createRadio();
radio.option('one');radio.option('two');radio.option('three');
radio.option('four');radio.option('five');

}
