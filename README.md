## Dev card README.md

Um experimento simples para gerar **cards dinâmicos para README do GitHub usando SVG**.

A ideia do projeto foi explorar como é possível criar **componentes visuais dinâmicos dentro do README**, atualizados automaticamente com dados da API do GitHub.

---

## 🧩 Exemplo

![Dev Card](./card.svg)

O card mostra:

* 👤 Avatar
* 📈 Level calculado
* ⚡ Progresso de XP
* 🏆 Rank
* 💻 Linguagem principal

Tudo gerado automaticamente.

---

## ⚙️ Como funciona

O sistema usa um workflow do GitHub Actions que roda diariamente.

Fluxo:

```
GitHub API
   ↓
updateStats.js
   ↓
stats.json
   ↓
generateCard.js
   ↓
card.svg
```

A cada execução o workflow:

1. Busca dados na API do GitHub
2. Atualiza as estatísticas
3. Gera um novo SVG
4. Faz commit do card atualizado

---

## 📂 Estrutura do projeto

```
.github/workflows/
   update.yml

scripts/
   updateStats.js
   generateCard.js

data/
   stats.json

card.svg
```

---

## 🚀 Como usar

1️⃣ Clone o projeto

```
git clone https://github.com/seu-usuario/github-devcard-readme
```

2️⃣ Altere o username nos scripts:

```
scripts/updateStats.js
scripts/generateCard.js
```

```
const username = "SEU_USUARIO"
```

3️⃣ Ative o GitHub Actions.

O workflow roda automaticamente todos os dias.

---

## 📌 Adicionando ao README

Você pode usar o card assim:

```
![Dev Card](https://raw.githubusercontent.com/SEU_USUARIO/github-devcard-readme/main/card.svg)
```

---

## 💡 Ideia do projeto

Esse repositório nasceu como um **experimento para entender melhor os limites do README do GitHub** e explorar formas de criar interfaces visuais usando apenas SVG.

É basicamente um laboratório para testar ideias como:

* cards dinâmicos
* automações com GitHub Actions
* geração de SVG programática
* visualizações dentro do README

---

## 🔮 Próximos experimentos

Algumas ideias futuras:

* múltiplos cards
* gráficos de atividade
* temas customizáveis
* badges dinâmicos
* versões animadas

---

## 🛠 Tecnologias

* Node.js
* GitHub Actions
* GitHub API
* SVG
