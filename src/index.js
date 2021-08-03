import "./style.scss";
import Phaser from "phaser";
import sky from "./assets/sky.png";
import ground from "./assets/platform.png";
import star from "./assets/star.png";
import bomb from "./assets/bomb.png";
import dude from "./assets/dude.png";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("sky", sky);
  this.load.image("ground", ground);
  this.load.image("star", star);
  this.load.image("bomb", bomb);
  this.load.spritesheet("dude", dude, { frameWidth: 32, frameHeight: 48 });
}

function create() {}

function update() {}
