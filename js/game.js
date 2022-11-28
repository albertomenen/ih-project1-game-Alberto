class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.person= new Person (500, 400, 70, 70);
    this.droplet = [];
    this.points = 0;
  }

  _generateDrops() {
    this.generateInterval = setInterval( () => {
      const newDroplet = new Droplet();
      newDroplet._assignRole();
      newDroplet._assignImage();
      newDroplet._fallDown();
      this.droplet.push(newDroplet)
    }, 1000)
  }

  _drawPerson() {
    this.ctx.drawImage(this.person.image, this.person.x, this.person.y, this.person.width, this.person.height)
  }

  _drawDroplets() {
    this.droplet.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height)
    })
  }

  // _assignControls() {
  //   // Controles del teclado
  //   document.addEventListener('keydown', (event) => {
  //     switch (event.code) {
  //       case 'ArrowLeft':
  //         this.meatball.moveLeft();
  //         break;
  //       case 'ArrowRight':
  //         this.meatball.moveRight();
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawPerson();
    this._drawDroplets();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    // this._assignControls();
    this._update();
  }
}