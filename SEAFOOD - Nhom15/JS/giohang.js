
function goBack() {
    window.history.back();
}
function calculateTotal() {
    var quantity = document.querySelector('.quantity-input').value;
    var unitPrice = document.getElementById('unit-price').innerText;
    var total = quantity * unitPrice;
    document.getElementById('total').innerText = total;
}
function deleteMon(button) {
    var mon = button.parentNode;
    mon.parentNode.removeChild(mon);
}