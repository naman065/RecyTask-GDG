
function startCountdown() {
  const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

 
  const timer = setInterval(function () {
      const now = new Date().getTime();
      const timeLeft = newYearDate - now;

      if (timeLeft <= 0) {
          clearInterval(timer); 
          document.getElementById("countdown-timer").innerHTML = "00:00:00:00";
          alert("Happy New Year! 🎉");
          return;
      }

      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

     
      document.getElementById("countdown-timer").innerHTML = 
          `${days}D : ${hours}H : ${minutes}Min : ${seconds}S`;
  }, 1000);
}

document.getElementById('demo-btn').addEventListener('click', () => {
  alert('Happy New Year!');
});
window.onload = startCountdown;

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90+60;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();