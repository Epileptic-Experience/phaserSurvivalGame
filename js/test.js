var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            enableSleeping: true,
            gravity: {
                y: 0
            },
            debug: {
                showBody: true,
                showStaticBody: true
            }
        }
    },
};

var game = new Phaser.Game(config);
var keyA;
var key5;
var keySpace;
var highlight1;


function preload() {
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create() {
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.input.setDefaultCursor('url(assets/input/cursors/blue.cur), pointer');
    var player = this.add.sprite(400, 300, 'eye');
    const example = () => {
        player.setVelocityX(200)
    }
    this.cursorKeys = this.input.keyboard.on('keydown-A', example, this);
}

function update() {
    const speed = 2.5;
    // let playerVelocity = new Phaser.Math.vector2();
    // if (this.inputKeys.left.isDown) {
    //     playerVelocity.x = 1
    //     playerVelocity.x = -1
    // }else if (this.inputKeys.right.isDown){
}

export default game