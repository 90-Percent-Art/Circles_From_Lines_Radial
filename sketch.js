// Circle specific
let diameter = 30;
let maxLines = 50;

// Full draw
let numRings = 10;
let ringSpacing = 30;
let withinRingSpacing = 10;

// Canvas
let xsize = 1000;
let ysize = 1000;

function setup() {
  createCanvas(xsize, ysize, SVG);
  strokeWeight(1);
  stroke('black');
  noFill();
  noLoop();
}

function draw(){

  // Translate and draw middle one
  translate(xsize/2, ysize/2);
  drawCircle(0,0, diameter, maxLines);

  let ringDiam, ringRadius, ringCircumf, circsPerRing;

  for(i=1; i < numRings; i++){

    ringDiam = i*(2*ringSpacing + diameter);
    ringCircumf = PI*ringDiam;
    ringRadius = ringDiam/2;
    circsPerRing = floor(ringCircumf/(withinRingSpacing+diameter));

    let theta;

    for(m=0;m<circsPerRing; m++){

      theta=2*PI*(m/circsPerRing);
      console.log(theta);
      push();
      translate(ringRadius*cos(theta), ringRadius*sin(theta));
      drawCircle(0,0,diameter, maxLines*(1-i/numRings));
      pop();

    }
  }

}

function drawCircle(i,j, d, n){

  let z = d/2;

  let theta1, theta2;

  for(k=1;k<n;k++){

    theta1 = random(0,2*PI);
    theta2 = random(0,2*PI);

    x1 = z*cos(theta1);
    y1 = z*sin(theta1);

    x2 = z*cos(theta2);
    y2 = z*sin(theta2);

    line(x1,y1,x2,y2);
    ellipse(x1,y1,3);
    ellipse(x2,y2,3);

  }

}

function mousePressed(){
  save("circles_from_lines_variant.svg"); // give file name
}
