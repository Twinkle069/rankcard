# rankcard

A simple tool to create a beautiful rankcard using canvas!

```
npm install rankcard
```

## Example

 ```js
    // Import module
    const { RankCard } = require("rankcard");
    const fs = require("fs");

    const card = new RankCard()
        .setName("Arya")
        .setLevel("Level 6")
        .setColor("auto")
        .setBrightness(69)
        .setAvatar("https://imgur.com/NJKVN2W.png")
        .setProgress(50)
        .setRank("3")
        .setCurrentXp("1800")
        .setRequiredXp("3600")
        .setShowXp(true);
     

    const cardBuffer = await card.build();

    fs.writeFileSync(`RankCard.png`, cardBuffer);
    // console.log("Success!");
})()
 ```
 Preview: 
 
  ![RankCard](https://imgur.com/NJKVN2W.png)
