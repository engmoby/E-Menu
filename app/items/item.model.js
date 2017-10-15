"use strict";
var ItemModel = (function () {
    function ItemModel(itemID, itemName, itemDescription, imageURL) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.imageURL = imageURL;
    }
    return ItemModel;
}());
exports.ItemModel = ItemModel;
//# sourceMappingURL=item.model.js.map