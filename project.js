let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raio = diametro / 2;

let xRaquete = 2;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaqueteOponente = 588;
let yRaqueteOponente = 150;
let velocidadeyOponente

let meusPontos = 0;
let pontosOponente = 0;


let trilhaSom;
let raqueteSom;
let pontoSom;

function preload(){
  trilhaSom = loadSound("./sounds/trilha.mp3");
  raqueteSom = loadSound("./sounds/raquete.mp3");
  pontoSom = loadSound("./sounds/ponto.mp3");
  

}



function setup() {
  createCanvas(600, 400);
  trilhaSom.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaqueteOponente(xRaqueteOponente, yRaqueteOponente)
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  placar();
  marcaPonto();

}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha
}

function verificaColisaoBorda(){
    
  if (xBolinha + raio > width || xBolinha - raio< 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
  if (
    xBolinha - raio < x + raqueteComprimento &&
    yBolinha - raio < y + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadexBolinha *= -1;
    raqueteSom.play();
  }
}

function verificaColisaoRaqueteOponente(x, y) {
  if (
    xBolinha + raio > xRaqueteOponente &&
    xBolinha - raio < xRaqueteOponente + raqueteComprimento &&
    yBolinha - raio < yRaqueteOponente + raqueteAltura &&
    yBolinha + raio > yRaqueteOponente
  ) {
    velocidadexBolinha *= -1;
    raqueteSom.play();
  }
}

function verificaColisoes() {
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
}

function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
    if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
 
}

function placar(){
  textSize(18);
  textAlign(CENTER);
  fill(255);
  text(meusPontos, 278 , 26);
  text(pontosOponente, 321 , 26);
} 

function marcaPonto(){
  if (xBolinha > 585){
    meusPontos += 1;
    pontoSom.play();
  }
  if (xBolinha < 13){
    pontosOponente += 1;
    pontoSom.play();
  }
}