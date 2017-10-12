"use strict";
var CategoryModel = (function () {
    function CategoryModel(categoryId, categoryName, imageURL, itemList) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.imageURL = imageURL;
        this.itemList = itemList;
    }
    return CategoryModel;
}());
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=category.model.js.map