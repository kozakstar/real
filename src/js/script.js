/**
 * Created by Kozak1991 on 01.09.2017.
 */
window.onload = function () {
    var value = document.querySelector(".price__value");
    var products = document.querySelectorAll('.products');


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


}
