## Compile code
```
yarn compile
```

## Notes:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
Quality drops to 0 after the concert

The description above current cover by existed updateQuality() method.

The job here only apply new code to adapt new requirement.

- We have recently signed a supplier of conjured items. This requires an update to our system:

- "Conjured" items degrade in Quality twice as fast as normal items

## Updated code

After read the story on the requirement and went through the code.

`updateQuality()` method with line 28.

based on the requirement added new line:

```
this.items[i].quality = this.items[i].quality - 2
```

This line will be decreased double quality as fast as normal items

## Compare with requirement 

- "Conjured" items degrade in Quality twice as fast as normal items

1. Test with mocha:

    ```
    yarn test
    ```

    End result:

    ✓ Conjured should decrease twice


2. Added 2 lines to get expected result.

    ```
    node test/golden-master-text-test.js
    ```

    End result:

    ```
    -------- day 0 --------
    name, sellIn, quality
    +5 Dexterity Vest 10 20
    Aged Brie 2 0
    Elixir of the Mongoose 5 7
    Sulfuras, Hand of Ragnaros 0 80
    Sulfuras, Hand of Ragnaros -1 80
    Backstage passes to a TAFKAL80ETC concert 15 20
    Backstage passes to a TAFKAL80ETC concert 10 49
    Backstage passes to a TAFKAL80ETC concert 5 49
    Conjured Mana Cake 3 6
    Conjured Mana Cake 2 49

    -------- day 1 --------
    name, sellIn, quality
    +5 Dexterity Vest 9 19
    Aged Brie 1 1
    Elixir of the Mongoose 4 6
    Sulfuras, Hand of Ragnaros 0 80
    Sulfuras, Hand of Ragnaros -1 80
    Backstage passes to a TAFKAL80ETC concert 14 21
    Backstage passes to a TAFKAL80ETC concert 9 50
    Backstage passes to a TAFKAL80ETC concert 4 50
    Conjured Mana Cake 2 4
    Conjured Mana Cake 1 47

    -------- day 2 --------
    name, sellIn, quality
    +5 Dexterity Vest 8 18
    Aged Brie 0 2
    Elixir of the Mongoose 3 5
    Sulfuras, Hand of Ragnaros 0 80
    Sulfuras, Hand of Ragnaros -1 80
    Backstage passes to a TAFKAL80ETC concert 13 22
    Backstage passes to a TAFKAL80ETC concert 8 50
    Backstage passes to a TAFKAL80ETC concert 3 50
    Conjured Mana Cake 1 2
    Conjured Mana Cake 0 45
    ```
