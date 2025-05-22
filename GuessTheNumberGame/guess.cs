@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(120deg, #74ebd5, #acb6e5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.game-container {
  background-color: #ffffffcc;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

h1 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
}

p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
}

input[type="number"] {
  padding: 10px;
  font-size: 16px;
  width: 70%;
  border: 2px solid #74ebd5;
  border-radius: 8px;
  outline: none;
  margin-bottom: 15px;
}

button {
  padding: 10px 20px;
  margin: 10px 5px 0;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

#submitBtn {
  background-color: #4CAF50;
  color: white;
}

#resetBtn {
  background-color: #f44336;
  color: white;
}

button:hover {
  opacity: 0.9;
}

#resultMessage {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #222;
}
