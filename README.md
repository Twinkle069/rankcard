# rankcard

A simple tool to create a beautiful rankcard using canvas!

```
npm install rankcard
```

## Example

 ```js
 (async () => {
    const { RankCard } = require("rankcard");
    const fs = require("fs");

    const card = new RankCard()
        .setName("Arya")
        .setLevel("Level 69")
        .setColor("auto")
        .setBrightness(60)
        .setAvatar("https://i.imgur.com/LENSTKE.png")
        .setProgress(69)
        .setRank("1")
        .setCurrentXp("589")
        .setRequiredXp("139800")
        .setShowXp(true);
     

    const cardBuffer = await card.build();

    fs.writeFileSync(`RankCard.png`, cardBuffer);
    // console.log("Success!");
})()
 ```
 Preview: 
 
  ![RankCard](https://i.imgur.com/v5PpYrx.png)
