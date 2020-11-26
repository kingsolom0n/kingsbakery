
/**
 * Arrays for field options
 */
let dessert = ["Red Velvet Cupcakes (dozen)", "Southern Butter Pound Cake", "Cream Cheese Muffins (dozen)", "Bailey's & Chocolate Chip Cheesecake"];
let deliveryOption = ["In-Store Pickup", "Curbside Pickup", "Home Delivery"];
let giveTip = [0, 5, 10, 15, 20, 25];
let packaging = ["standard", "gift"];

populateDessert();
populateDelivery();
populateTip();
populatePackaging();

function populateDessert() {
    let dessertOptionField = document.getElementById('dessertOption');
    dessert.forEach(function (element) {
        dessertOptionField.innerHTML += '<option>' + element + '</option>';
    });
}

function populateDelivery() {
    let deliveryOptionField = document.getElementById('deliveryOption');
    deliveryOption.forEach(function (element) {
        deliveryOptionField.innerHTML += '<option>' + element + '</option>';
    });
}

function populateTip() {
    let giveTipOptionField = document.getElementById('giveTipOption');
    giveTip.forEach(function (element) {
        giveTipOptionField.innerHTML += '<option>' + element + '</option>';
    });
}

function populatePackaging() {
    let packagingOptionField = document.getElementById('packagingOption');
    packaging.forEach(function (element) {
        packagingOptionField.innerHTML += '<option>' + element + '</option>';
    });
}

function addTaxes() {
    const taxPercentage = 0.07;
    let taxAmount = taxPercentage * calculateTotal();
    return taxAmount;
}

function calculateTotal() {

}

function validateDessertSelection() {

}

function validateTip() {

}

function validatePackaging() {

}

function validateDeliveryOption() {

}
