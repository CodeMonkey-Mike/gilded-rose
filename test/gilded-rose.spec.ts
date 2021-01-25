import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });

    it('Conjured should decrease twice', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 1, 3) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured Mana Cake');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(1);
    });

});
