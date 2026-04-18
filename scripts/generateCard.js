const fs = require("fs")

const username = "Cuervo279"
const avatar = `https://avatars.githubusercontent.com/${username}?s=120&v=${Date.now()}`

const stats = JSON.parse(fs.readFileSync("./data/stats.json"))

const xpNeeded = (stats.level + 1) ** 2 * 100
const progress = Math.min(stats.xp / xpNeeded, 1)
const barWidth = 220 * progress

const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="420"
height="180">

<style>
.title { font: bold 18px sans-serif; fill: #c9d1d9; }
.text { font: 14px sans-serif; fill: #8b949e; }
.stat { font: bold 14px sans-serif; fill: #58a6ff; }
</style>

<rect width="100%" height="100%" rx="12" fill="#0d1117" stroke="#30363d"/>

<!-- avatar mask -->
<defs>
  <mask id="avatarMask">
    <rect width="100%" height="100%" fill="black"/>
    <circle cx="50" cy="60" r="30" fill="white"/>
  </mask>
</defs>

<!-- avatar -->

<image
x="20"
y="30"
width="60"
height="60"
mask="url(#avatarMask)"
href="${avatar}"
/>

<!-- name -->
<text x="100" y="45" class="title">Leonardo Cuervo</text>

<!-- level -->
<text x="100" y="70" class="text">Level</text>
<text x="150" y="70" class="stat">${stats.level}</text>

<!-- xp text -->
<text x="100" y="95" class="text">XP ${stats.xp} / ${xpNeeded}</text>

<!-- xp bar background -->
<rect x="100" y="105" width="220" height="10" rx="5" fill="#30363d"/>

<!-- xp bar progress -->
<rect x="100" y="105" width="${barWidth}" height="10" rx="5" fill="#58a6ff"/>

<!-- rank -->
<text x="20" y="140" class="text">🏆 Rank</text>
<text x="80" y="140" class="stat">${stats.rank || "Unranked"}</text>

<!-- main language -->
<text x="220" y="140" class="text">💻 Main</text>
<text x="280" y="140" class="stat">${stats.language || "JavaScript"}</text>

</svg>
`

fs.writeFileSync("card.svg", svg)

console.log("Card gerado")
return svg
