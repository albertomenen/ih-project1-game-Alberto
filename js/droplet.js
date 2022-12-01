class Droplet {
    constructor() {
        this.x = Math.floor( Math.random()* 950);
        this.y = Math.floor(Math.random()* -100);
        this.width = 100;
        this.height = 100;
        this.role = null;
        this.image = razer;
        this.fallInterval= null;
    }

    // The drops coming down 

    _fallDown() {
        this.fallInterval = setInterval(() => {
            if(this.y > 600 + this.heigth) {
                clearInterval(this.fallInterval);
            }
            this.y = this.y + 1; 
        }, 50)
    }

    // The two different types of drops, how to assign it 
        
    _assignRole() {
        if(Math.floor(Math.random()*10) % 2 === 0) {
            this.role = "razer";
        } else {
            this.role = "hair";
        }
    }
   
    //  How to assign an image depends of the role the drop has.

    _assignImage() {
      if( this.role === "razer") {
        this.image = razer;
      }  else {
        this.image = hair
      }
    }
    
}