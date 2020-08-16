function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  
  translate(200, 200);
  fill(59, 14, 64)
  stroke(255,255 , 255)
  ellipse(0, 0, 320, 320);
  
  rotate(-90);

  
   var hr = hour();
   var mn = minute();
   var sc = second();


  var  secondAngle = map(sc, 0, 60, 0, 360);
  

 
  var minuteAngle = map(mn, 0, 60, 0, 360);



  var hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secondAngle);
  strokeWeight(7)
  stroke(255, 50, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  strokeWeight(7)
  stroke(255, 250,0);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  strokeWeight(7)
  stroke(0, 5, 255);
  line(0, 0, 50, 0);
  pop();

  


  strokeWeight(7);
  stroke(255,50 , 150)
  noFill()
  arc(0, 0, 300, 300, 0, secondAngle);
  strokeWeight(7);
  stroke(255,250 , 0)
  arc(0, 0, 250, 250, 0, minuteAngle);
  strokeWeight(7);
  stroke(0,5 , 255)
  arc(0, 0, 200, 200, 0, hourAngle);
  rotate(90)
  fill(0)
  stroke(255,255 , 255)
  ellipse(0, 0, 15, 15);
  textSize(20);
  text("12", 0,-75)
  text("3", 75,0)
  text("6", 0,75)
  text("9", -75,0)
}