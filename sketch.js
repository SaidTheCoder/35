//Create variables here

var dog,dog1,happyDog,database,foodS,foodStock;


function preload(){
dog = loadImage("images/dogImg.png")
happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);

dog1=createSprite(250,300,150,150)
dog1.addImage(dog)
dog1.scale=0.25;

foodStock = database.ref('Food')
foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage(happyDog)
  }

  drawSprites();

  fill ("black")
  textSize(15);
  text("press the up arrow to give the dog milk!",20,50)
  textSize(25)
  text ("Food Remaining:",+foodS,250,100)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0
}
else{
  x=x-1
}

  database.ref('/').update({
    Food:x
  })
}


