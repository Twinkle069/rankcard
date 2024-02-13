# rankcard

```
npm install rankcard
```

## Usage

 ```js
 (async () => {
    const { RankCard } = require("rankcard");
    const fs = require("fs");

    const card = new RankCard()
        .setName("Arya")
        .setLevel("Level 69")
        .setColor("auto")
        .setBrightness(100)
        .setAvatar("https://i.imgur.com/LENSTKE.png")
        .setProgress(69)
        .setRank("1")
        .setCurrentXp("589")
        .setRequiredXp("139800")
        .setShowXp(true);
     

    const cardBuffer = await card.build();

    fs.writeFileSync(`RankCard.png`, cardBuffer);
    console.log("Done!");
})()
 ```
 Preview: 
 
  ![RankCard](https://i.imgur.com/v5PpYrx.png)
