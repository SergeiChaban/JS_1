const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];


const renderProduct = (title, price) => {
    return `<div class="card" style="width: 18rem;">
                    <img src="https://place-hold.it/300x200" alt="image" class="img-thumbnail">
                    <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary" role="button">${price}</a>
                    </div>
            </div>`;
    
};

const renderProducts = (list) => {
     const productList = list.map(item => renderProduct(item.title, item.price));


    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);
