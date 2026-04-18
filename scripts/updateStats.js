const fs = require("fs")

let stats = JSON.parse(fs.readFileSync("./data/stats.json"))

function xpToLevel(xp){
    return Math.floor(Math.sqrt(xp/100))
}

stats.xp += 25

stats.level = xpToLevel(stats.xp)

fs.writeFileSync("./data/stats.json", JSON.stringify(stats,null,2))

console.log("XP atualizado:", stats.xp)
return stats
