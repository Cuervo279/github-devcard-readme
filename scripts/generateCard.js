const fs = require("fs")

const stats = JSON.parse(fs.readFileSync("./data/stats.json"))

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <rect width="100%" height="100%" fill="#0d1117"/>
  
  <text x="20" y="40" fill="white" font-size="20">
    Leonardo Cuervo
  </text>

  <text x="20" y="80" fill="white" font-size="16">
    Level: ${stats.level}
  </text>

  <text x="20" y="110" fill="white" font-size="16">
    XP: ${stats.xp}
  </text>
</svg>
`

fs.writeFileSync("card.svg", svg)

console.log("Card gerado")
return svg
