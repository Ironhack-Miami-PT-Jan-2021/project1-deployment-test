class Dinosaur {
  constructor() {
    this.currentX = 25;
    this.currentY = 25;
    this.height = 50;
    this.width = 50;
    this.img = new Image();
    this.i = 0;
    this.j = 0;
    this.columns = 5;
    this.picWidth = 160;
    this.widthOfASignlePic = this.picWidth/this.columns;
    this.k = 0;
    this.rows = 9;
    this.picHeight = 288;
    this.heightOfASignlePic = this.picHeight/this.rows;
    this.img.src = 'https://raw.githubusercontent.com/mozilla/BrowserQuest/master/client/img/1/clotharmor.png';
    // "./dino.png";
  }

  draw() {
    this.i++;
    if(this.i >= this.columns * 5) { this.i = 0}
    ctx.drawImage(
      this.img,
      Math.floor(this.i/5) * this.widthOfASignlePic,
      this.j * this.heightOfASignlePic,
      this.widthOfASignlePic,
      this.heightOfASignlePic,
      this.currentX,
      this.currentY,
      this.width,
      this.height
    );
  }

  safeFromEdges(speed) {
    if (this.currentX - speed <= 0 && currentGame.activeDirections.left) return false;
    if (this.currentX + speed >= 500 && currentGame.activeDirections.right) return false;
    if (this.currentY - speed <= 0 && currentGame.activeDirections.up) return false;
    if (this.currentY + speed >= 300 && currentGame.activeDirections.down) return false;

    return true;
  }

  move(speed) {
    if (this.safeFromEdges(speed)) {
      if (currentGame.activeDirections.right) {
        this.j = 0;
        this.columns = 5;
        this.currentY += speed;
      }

      if (currentGame.activeDirections.left) this.currentX -= speed;

      if (currentGame.activeDirections.down) {
          this.j = 7;
          this.columns = 4;
          this.currentY += speed;
        }

      if (currentGame.activeDirections.up) {
        this.j = 3;
        this.columns = 5;
        this.currentY -= speed;
      }
    }
  }
}
