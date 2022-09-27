const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './assets/game-map.png'

const playerImage = new Image()
playerImage.src = './assets/art/playerDown.png'

class Sprite {
    constructor({position, velocity, image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, -1120, -480)
    }
}

const background = new Sprite({
    position:{
    x: -1120,
    y: -480
},
    image: image
})


function animate(){
    window.requestAnimationFrame(animate)
    background.draw();
    c.drawImage(playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        //first 4 arguments crop

        canvas.width/2-playerImage.width/4 / 2, 
        canvas.height/2-playerImage.height/2,
        playerImage.width/4,
        playerImage.height)
        //positioning
}

window.addEventListener('keydown', (e) =>{
    switch (e.key) {
        case 'arrowUp':

            break
        case 'arrowLeft':

            break
        case 'arrowRight':

            break
        case 'arrowDown':

            break
    }

})


