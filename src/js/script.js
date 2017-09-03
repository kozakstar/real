/**
 * Created by Kozak1991 on 01.09.2017.
 */
window.onload = function () {
 var arrowRight = document.querySelector('.arrs-right');
 var arrowLeft = document.querySelector('.arrs-left');
 var img = document.querySelectorAll('.real__img');
 var i = 0;

    arrowLeft.onclick = function () {
        img[i].classList.remove('showed');
        i--;
        if(i < 0){
            i = img.lenght -1;
        }
        img[i].classList.add('showed');

    }


    arrowRight.onclick = function () {

     img[i].classList.remove('showed');
     i++;
     if(i >= img.lenght){
         i=0;
     }
     img[i].classList.add('showed');

 }



}
var value = document.querySelector(".price__value");
var products = document.querySelectorAll('.products');
// var btn = document.querySelectorAll('.products__btn')

for(var i = 0; i<products.length; i++){
    products[i].onclick = function(){
        this.classList.toggle('products-active');
        calcPrice();
    }


}
function calcPrice() {
    var price = 0;

    for(var i = 0; i<products.length; i++){
        if(products[i].classList.contains('products-active')) {
            price += parseInt(products[i].getAttribute('data-price'));
        }

    }
    value.innerHTML = price;


}
// for (var i = 0; i<btn.length; i++){
//
// }


