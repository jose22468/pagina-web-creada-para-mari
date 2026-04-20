const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreLabel = document.getElementById("score");
const timeLabel = document.getElementById("time");
const gameMessage = document.getElementById("gameMessage");
const restartBtn = document.getElementById("restartBtn");

const WORLD = {
  width: canvas.width,
  height: canvas.height,
  duration: 30,
};

const player = {
  x: 70,
  y: WORLD.height / 2,
  size: 34,
  speed: 4,
};

const target = {
  x: 0,
  y: 0,
  size: 24,
};

const keys = new Set();
let score = 0;
let timeLeft = WORLD.duration;
let isPlaying = true;
let lastTick = performance.now();

function randomPosition(margin = 30) {
  return {
    x: Math.floor(Math.random() * (WORLD.width - margin * 2) + margin),
    y: Math.floor(Math.random() * (WORLD.height - margin * 2) + margin),
  };
}

function placeTarget() {
  const next = randomPosition(45);
  target.x = next.x;
  target.y = next.y;
}

function resetGame() {
  score = 0;
  timeLeft = WORLD.duration;
  isPlaying = true;
  player.x = 70;
  player.y = WORLD.height / 2;
  placeTarget();
  gameMessage.classList.add("hidden");
  scoreLabel.textContent = score;
  timeLabel.textContent = timeLeft;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function updatePlayer() {
  if (keys.has("arrowup") || keys.has("w")) player.y -= player.speed;
  if (keys.has("arrowdown") || keys.has("s")) player.y += player.speed;
  if (keys.has("arrowleft") || keys.has("a")) player.x -= player.speed;
  if (keys.has("arrowright") || keys.has("d")) player.x += player.speed;

  player.x = clamp(player.x, player.size / 2, WORLD.width - player.size / 2);
  player.y = clamp(player.y, player.size / 2, WORLD.height - player.size / 2);
}

function collides() {
  const dx = player.x - target.x;
  const dy = player.y - target.y;
  const distance = Math.hypot(dx, dy);
  return distance < player.size / 2 + target.size / 2;
}

function drawBackground() {
  ctx.clearRect(0, 0, WORLD.width, WORLD.height);
  const gradient = ctx.createLinearGradient(0, 0, WORLD.width, WORLD.height);
  gradient.addColorStop(0, "#fff5fd");
  gradient.addColorStop(1, "#eaf4ff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WORLD.width, WORLD.height);
}

function drawTarget() {
  ctx.font = "28px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("⭐", target.x, target.y);
}

function drawPlayer() {
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size / 2, 0, Math.PI * 2);
  ctx.fillStyle = "#d678f4";
  ctx.fill();

  ctx.font = "21px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🧸", player.x, player.y + 1);
}

function draw() {
  drawBackground();
  drawTarget();
  drawPlayer();
}

function gameOver() {
  isPlaying = false;
  gameMessage.classList.remove("hidden");
  gameMessage.innerHTML = `
    <h2>¡Tiempo terminado!</h2>
    <p>Tu puntaje final fue <strong>${score}</strong>. Muy bien ✨</p>
    <p>Tip: intenta rutas en diagonal para recolectar más rápido.</p>
  `;
}

function gameLoop(now) {
  const delta = now - lastTick;
  lastTick = now;

  if (isPlaying) {
    updatePlayer();

    if (collides()) {
      score += 1;
      scoreLabel.textContent = score;
      placeTarget();
    }

    timeLeft -= delta / 1000;
    if (timeLeft <= 0) {
      timeLeft = 0;
      timeLabel.textContent = "0";
      gameOver();
    } else {
      timeLabel.textContent = Math.ceil(timeLeft).toString();
    }
  }

  draw();
  requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (event) => {
  keys.add(event.key.toLowerCase());
});

window.addEventListener("keyup", (event) => {
  keys.delete(event.key.toLowerCase());
});

restartBtn.addEventListener("click", resetGame);

resetGame();
requestAnimationFrame((now) => {
  lastTick = now;
  gameLoop(now);
});
