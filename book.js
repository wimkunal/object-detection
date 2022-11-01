
img = "";

status = "";

//defining an array variable
objects = [];

function preload(){
    img = loadImage("book.jpg");
}

function setup(){
    canvas = createCanvas( 380 , 380);
    canvas.center();
    
    //initializing cocossd model
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML  =  "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded");
     status = true;

   objectDetector.detect(img , gotResults);
}

function gotResults(error , results){
    if (error) {
       console.log(error);

    } 
    else {
       console.log(results);
       objects = results;
    }
}

function draw(){

    
    image(img , 0 , 0 , 380 , 380);

    if (status != "") {
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object detected";

             fill ("#FF0000");
             percent = floor(objects[i].confidence * 100);

             text (objects[i].label + " " +  percent + "%" , objects[i].x + 10, objects[i].y  , 100, 100);

             noFill ();
             stroke ("#FF0000");
             rect ( objects[i].x , objects[i].y , objects[i].width-400, objects[i].height-390 );
        }
    } 
        
    
    
}