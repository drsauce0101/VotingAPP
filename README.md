# Voting App 🗳️

[English](#-english-version) • [Português (Brasil)](#-versão-em-português-brasil)

---

## 🇬🇧 English Version

A simple yet complete full-stack voting application built to showcase the integration between a dynamic frontend and a Python-powered backend. This project demonstrates core web development principles, including API communication, DOM manipulation, and environment setup.

### ✨ Features

* **Dynamic Loading:** Fetches voting options from a backend API when the page loads.
* **Interactive Voting:** Users can cast a vote for their favorite option by clicking a button.
* **Real-time Updates:** The vote count is immediately updated on the screen without requiring a page reload.
* **Clear Architecture:** A clean separation between the Flask backend and the Vanilla JavaScript frontend.

---

## 🇧🇷 Versão em Português (Brasil)

Uma aplicação de votação full-stack simples, porém completa, construída para demonstrar a integração entre um frontend dinâmico e um backend em Python. Este projeto demonstra princípios fundamentais do desenvolvimento web, incluindo comunicação com APIs, manipulação do DOM e configuração de ambiente.

### ✨ Funcionalidades

* **Carregamento Dinâmico:** Busca as opções de voto de uma API no backend assim que a página carrega.
* **Votação Interativa:** Usuários podem votar em sua opção favorita clicando em um botão.
* **Atualizações em Tempo Real:** A contagem de votos é imediatamente atualizada na tela, sem a necessidade de recarregar a página.
* **Arquitetura Limpa:** Uma separação clara entre o backend em Flask e o frontend em JavaScript puro (Vanilla JS).

---

## 🚀 Technologies Used / Tecnologias Utilizadas

**Backend:**
* Python 3
* Flask
* Flask-CORS

**Frontend:**
* HTML5
* CSS3
* JavaScript (Vanilla JS, ES6+ `async/await`, `fetch`)

## ⚙️ Getting Started / Como Executar o Projeto

Follow these instructions to get the project running on your local machine.

### Prerequisites

* Python 3.x installed
* Git installed
* VS Code with the **Live Server** extension is recommended for the frontend.

### 1. Clone the Repository

```bash
git clone [https://github.com/drsauce0101/VotingAPP.git](https://github.com/drsauce0101/VotingAPP.git)
cd VotingAPP
```

### 2. Set Up and Run the Backend

The backend server must be running for the application to work.

```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv

# Activate on Windows
.\venv\Scripts\Activate

# Activate on macOS/Linux
# source venv/bin/activate

# Before installing dependencies, create the requirements.txt file
# This command lists all installed packages in your venv and saves them to the file
pip freeze > requirements.txt

# Now, install the dependencies from the file
pip install -r requirements.txt

# Run the Flask server
python app.py
```
The server will be running at `http://1227.0.0.1:5000`. **Leave this terminal open.**

### 3. Run the Frontend

1.  Open the **`frontend`** folder in a new VS Code window (`File > Open Folder...`).
2.  Click on the `index.html` file to make it the active window.
3.  Click the **"Go Live"** button in the bottom-right corner of VS Code.
4.  Your browser will open the application, and it will be fully functional.