function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {

  colorMode(HSB);

  // 顏色會跟滑鼠位置變化
  fill(mouseX % 360, 100, 100);

  // 畫圓形
  ellipse(mouseX, mouseY, 50, 50);
}