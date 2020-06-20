const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];


const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="btn btn-success">Добавить в корзину</button>
                <img src="..." alt="image" class="img-thumbnail">
              </div>`;
};

const renderProducts = (list) => {
     const productList = list.map(item => renderProduct(item.title, item.price));
//    const productList = list.map((item) => {
//        return renderProduct(item.title, item.price);
//    });

    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);
