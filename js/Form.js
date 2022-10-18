class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
        this.playButton = createButton("Jugar");
        this.titleImg = createImg("./assets/title.png", "titulo del juego");
        this.greeting = createElement("h2");
    }

    setElementsPosition() {
        this.titleImg.position(120, 50);
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
    setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("custumButton");
        this.greeting.class("greeting");
    }

    hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }

    handleMousePressed() {
        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide(); //this.input.value   nos muestra el dato que el usuario nos dio
            var message = `         
      Hola ${this.input.value()}       
      </br>Espera a que otro jugador se una :D`;
            this.greeting.html(message);
        });
    }
    display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }


}