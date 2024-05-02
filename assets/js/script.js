const messages = [
  {
    title: "😁",
    message: "I'm a software developer based in Nairobi, Kenya.",
  },
  { title: "🍗", message: "My favorite food is pizza." },
  { title: "🎮", message: "I love playing video games." },
  { title: "🎵", message: "I love listening to hip hop music." },
  { title: "🎥", message: "My favorite movie is The Dictator." },
  { title: "📺", message: "My favorite TV show is Money Heist." },
];

const messageContainer = document.querySelector(".message-container");
let message = messageContainer.querySelector(".message");
const titleElement = document.querySelector(".title");

let currentIndex = 0;

function showNextMessage() {
  currentIndex = (currentIndex + 1) % messages.length;
  const nextMessage = messages[currentIndex];

  let newMessageElement = document.createElement("div");
  newMessageElement.classList.add("message");
  newMessageElement.innerHTML = `<p>${nextMessage.message}</p>`;
  newMessageElement.style.transform = "translateX(100%)";

  messageContainer.appendChild(newMessageElement);

  setTimeout(() => {
    message.style.transform = "translateX(-100%)";
    newMessageElement.style.transform = "translateX(0)";
  }, 10);

  setTimeout(() => {
    messageContainer.removeChild(message);
    message = newMessageElement;
    titleElement.textContent = nextMessage.title;
  }, 500);
}

//change the message every 5 seconds
setInterval(showNextMessage, 2000);
