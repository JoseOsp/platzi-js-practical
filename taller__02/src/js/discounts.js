const originalPrice = 120;
const discount = 18;

// const percentOriginalPriceWithDiscount = 100 - discount;
//
// const priceWithDiscount = (originalPrice * percentOriginalPriceWithDiscount) / 100;
//
// console.log({
//     originalPrice,
//     discount,
//     percentOriginalPriceWithDiscount,
//     priceWithDiscount,
// });

const calPriceWithDiscount = ( price, discount ) => {
    const percentOriginalPriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentOriginalPriceWithDiscount) / 100;

    return priceWithDiscount;
}

const handlePriceWithDiscount = ( price, discount ) => {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;

    const priceWithDiscount = calPriceWithDiscount( priceValue, discountValue );

    const priceResult = document.getElementById('priceResult');
    priceResult.innerText = `El precio con descuento es: ${priceWithDiscount}`;
}