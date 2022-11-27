class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.person= new Person (500, 400, 70, 70);
    this.points = 0;
  }

  _drawPerson() {
    this.ctx.drawImage(this.person.image, this.person.x, this.person.y, this.person.width, this.person.height)
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
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}