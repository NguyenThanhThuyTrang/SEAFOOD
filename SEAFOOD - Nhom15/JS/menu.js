function cartplus() {
    var Value = parseInt(document.getElementById("cart").innerText);
    var newv = Value + 1;
    document.getElementById("cart").innerText = newv;
    localStorage.setItem("cartv", newv);
}
document.addEventListener("DOMContentLoaded", function () {
    var cartv = localStorage.getItem("cartv");
    document.getElementById("cart").innerText = cartv || 0;
});
// lưu trữ vị trí của chuột
window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPos', window.scrollY || window.pageYOffset);
});

// khôi phục vị trí của chuột khi đc tải lại
window.addEventListener('load', function() {
    var scrollPos = sessionStorage.getItem('scrollPos') || 0;
    window.scrollTo(0, scrollPos);
});

var cart = {};

var storedCarts = JSON.parse(localStorage.getItem('Carts'));

if (storedCarts) {
    cart = storedCarts;
} else {
    // Nếu chưa có giỏ hàng, khởi tạo một giỏ hàng mẫu
    cart = {};
}

function addCart(foodName, price, cartName) {
    // kiểm tra xem tên cart có trong giỏ hàng hay chưa
    if (!cart.hasOwnProperty(cartName)) {
    // nếu không có thì phải tạo một mảng trống có index là cartname
        cart[cartName] = [];
    }

    // Kiểm tra xem món ăn đã tồn tại trong giỏ hàng chưa
    var existingItem = cart[cartName].find(item => item.name === foodName);

    if (existingItem) {
        // Nếu đã tồn tại, tăng số lượng
        existingItem.quantity++;
    } else {
        // Nếu chưa tồn tại, thêm món ăn vào giỏ hàng
        cart[cartName].push({
            name: foodName,
            price: price,
            quantity: 1
        });
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('Carts', JSON.stringify(cart));
}








