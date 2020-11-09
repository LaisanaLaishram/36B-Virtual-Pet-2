//Create variables here
var feed;
var addFood;
var lastFed;
function preload()
{
	//load images here
}

function setup() {
  createCanvas(800, 700);
  feed=createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed("feedDog");

  addFood=createButton("Add Food");
  addFood.psition(800,95);
  addFood,mousePressed("addFoods");
  
}


function draw() {  
  fill(225,225,254);
  textSize(15);
  if(lastFed>=12){
    text("last Feed:"+ lastFed%12 + "PM",350,30);
  }else if(lastFed==0){
    text("last Feed:12 AM",350,30);
  }else{
    text("last Feed:"+lastFed+"AM",350,30);
  }
  }
  


 drawSprites();
  //add styles here





