const fetch = require('node-fetch');
const readline = require("readline-sync");

const github = (username) => new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, {
    headers: {
        'authority': 'api.github.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
    }
})
    .then(res => res.json())
    .then(res => {
        resolve(res)
    })
    .catch(err => reject(err))
});

(async () => {
     var username =  readline.question('\n input username : ')
     console.clear()
     const ggithub = await github(username)
     const uname = ggithub["login"]
     const nama = ggithub["name"]
     const followers = ggithub["followers"]
     const following = ggithub["following"]
     console.log(`\n USERNAME = ${uname}`)
     console.log(` NAMA = ${nama}`)
     console.log(` FOLLOWERS = ${followers}`)
     console.log(` FOLLOWING = ${following}`)
})();
