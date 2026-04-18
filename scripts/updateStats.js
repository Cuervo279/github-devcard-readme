const fs = require("fs")

const username = "Cuervo279"
const token = process.env.GITHUB_TOKEN

async function run(){

    let stats = JSON.parse(fs.readFileSync("./data/stats.json"))

    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const repos = await res.json()

    const repoCount = repos.length

    const xp = repoCount * 50

    function xpToLevel(xp){
        return Math.floor(Math.sqrt(xp/100))
    }

    stats.xp = xp
    stats.level = xpToLevel(xp)

    fs.writeFileSync("./data/stats.json", JSON.stringify(stats,null,2))

    console.log("Repos:", repoCount)
    console.log("XP:", stats.xp)

    return stats
}

run()
