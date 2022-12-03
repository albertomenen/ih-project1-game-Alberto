class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.person= new Person (500, 500, 70, 70);
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

  noTimeForBold() {
    setTimeout 
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

  _showScore() {
    this.ctx.fillStyle = "red";
    this.ctx.font = "40px Sans";
    this.ctx.fillText(`Pelos: ${this.points} `, 850, 590)
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

  _checkCollisions() {
    //console.log("pum! Pelos conseguidos!", this.points  )
    this.droplet.forEach((droplet) =>{
      
      

      if (
        (this.person.x >= droplet.x && this.person.x <= droplet.x +droplet.width ||
        this.person.x + this.person.width >= droplet.x && this.person.x + this.person.width <= droplet.x + droplet.width |
        droplet.x >= this.person.x && droplet.x <= this.person.x + this.person.width
        ) &&
        (
          this.person.y >= droplet.y && this.person.y <= droplet.y + droplet.height ||
          this.person.y + this.person.height >= droplet.y && this.person.y + this.person.height <= droplet.y + droplet.height |
          droplet.y >= this.person.y && droplet.y <= this.person.y + this.person.height
        )
      ){ 
       
        if (droplet.role === "hair") {
          console.log("pelo")
          //this.person._gettingHair();
          this.points++
        } else if (droplet.role === "razer") {
          console.log("razor")
          //this.person._losingHair();
          this.points--
        }
        let index  = this.droplet.indexOf(droplet);
        this.droplet  .splice(index, 1)

      }
    })
  }

  _changeHair() {
    if (this.points >= 1) {
      // Quiero poder cambiar la imagen del personaje principal
      this.person.image = someHair
    }
  }

  _gettingThere() {
    if(this.points >=2) {
      this.person.image = bigHair
    }
  }

  _winGame() {
    if(this.points === 5) {
      console.log("finally using champoo again!");
      const winpage = document.getElementById("win-page");
      winpage.classList.remove("hidden");
      winpage.style = "display: flex";
      const canvas = document.getElementById("canvas");
      canvas.style = "display:none";
    }
  }

  _lostGame() {
    if(this.points === -1) {
      console.log(" Hello Vin Diesel!");
      const lostpage = document.getElementById("lost-page");
      lostpage.classList.remove("hidden");
      lostpage.style = "display : flex"; 
      const canvas = document.getElementById("canvas");
      canvas.style = "display : none"; 
    }
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawPerson();
    this._drawDroplets();
    this._checkCollisions();
    this._showScore();
    this._winGame();
    this._lostGame();
    this._changeHair();
    this._gettingThere();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
    this._generateDrops();
  }
}