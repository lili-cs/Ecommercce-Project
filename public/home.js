document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

function loadProducts(){
    fetch('http://localhost:3000/products')
        .then(res => {
            renderProducts(res);
        })
        .catch(err => console.log(err));
}

function renderProducts(res){
    let brands = res.map(product => product.brand);
    brands = new Set(brands);

    for(let brand of brands){
        const hElement = document.createElement('h3');
        hElement.textContent = brand;

        const container = document.getElementById('products');
        container.appendChild(hElement);

        const selected = res.filter(product => product.brand === brand);
        const thumbnails = selected.map(product => product.thumbnail);
    }
}