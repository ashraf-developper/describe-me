import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOb9kUh3w_sYR9zP_3sOrNq4iopL1oDiQ",
  authDomain: "login-system-c56cd.firebaseapp.com",
  databaseURL: "https://login-system-c56cd-default-rtdb.firebaseio.com",
  projectId: "login-system-c56cd",
  storageBucket: "login-system-c56cd.appspot.com",
  messagingSenderId: "931009113553",
  appId: "1:931009113553:web:959d83dbdda2baadc204f0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const form = document.getElementById("messageForm");
const nicknameInput = document.getElementById("nickname");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nickname = nicknameInput.value.trim();
  const message = messageInput.value.trim();

  if (!nickname || !message) {
    alert("Please fill out both fields.");
    return;
  }

  const messagesRef = ref(db, "messages");
  push(messagesRef, {
    nickname,
    message
  }).then(() => {
    alert("Message sent!");
    form.reset();
  }).catch((err) => {
    alert("Error: " + err.message);
  });
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("secretPageBtn").addEventListener("click", () => {
  window.location.href = "secret.html";
});
