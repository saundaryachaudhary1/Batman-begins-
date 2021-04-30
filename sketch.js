var rainDrops;

function preload(){
    
}

function setup(){
    createCanvas(400,700);
   
    
}

function draw(){
    background(0);

    var maxDrops = 100;

    for(var i=0; i<maxDrops; i++ ){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
    
}   

