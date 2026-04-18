const fs = require("fs")

const stats = JSON.parse(fs.readFileSync("./data/stats.json"))

const svg = `
<svg width="400" height="200">
<text x="10" y="20">Leonardo Cuervo</text>
<text x="10" y="40">Level: ${stats.level}</text>
<text x="10" y="60">XP: ${stats.xp}</text>
</svg>
`

fs.writeFileSync("card.svg", svg)

console.log("Card gerado")
return svg
