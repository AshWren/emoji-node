let emoji = require('node-emoji');
let emoArr = []
for(let i = 0; i < 10; i++){
    emoArr.push(emoji.random());
}


for(let i = 0; i < emoArr.length; i++){
    console.log(emoArr[i].emoji)
}