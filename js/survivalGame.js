
import test from "./test.js"

const config = {
    type: Phaser.AUTO,
    parent: 'app',
    width: 800,
    height: 600,
 
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            gravity: {
                y: 200
            },
            debug: {
                showBody: true,
                showStaticBody: true
            }
        }
    },
    scene: [test],
}