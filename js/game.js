class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.person= new Person (500, 400, 70, 70);
    //this.droplet = [new Droplet( 100, 100, 50, 50),new Droplet(100, 100, 50, 50)]
    this.droplet = [];
    this.points = 0;
  }

  _generateDrops() {
    this.generateInterval = setInterval(() => {
      //if (this.droplet.length < 5) { // luego quitar este condicional
      const newDroplet = new Droplet(20, 0, 50, 50);
      newDroplet._assignRole();
      newDroplet._assignImage();
      console.log("droplet created", newDroplet)
      newDroplet._fallDown();
      this.droplet.push(newDroplet)
      //console.log(this.droplet)
      }, 1000)
  }

  _drawPerson() {
    this.ctx.drawImage(this.person.image, this.person.x, this.person.y, this.person.width, this.person.height)
  }

  _drawDroplets() {
    this.droplet.forEach((elem) => {
      // this.ctx.fillStyle = "#FF0000";
      // console.log(elem)
      // this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height)
    })
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.person.moveLeft();
          break;
        case 'ArrowRight':
          this.person.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }º

  _update() {
    this._clean();
    this._drawPerson();
    this._drawDroplets();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
    this._generateDrops();
  }
}