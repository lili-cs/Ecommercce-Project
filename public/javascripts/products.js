// document.addEventListener('DOMContentLoaded', () => {
//     // const imageElements = document.getElementsByClassName('thumbnail');
//     const imageElements = document.getElementsByTagName('div');
//     for(let img of imageElements){
//         img.addEventListener('click', 
//             displayProductDetails(this.id)
//         );
//     }
// });

function displayProductDetails(data, productId){
    // const product = data.filter(item => item.id === productId)[0];

    window.open(`http://localhost:3000/products/${productId}`, '_blank');

    // const iframe = document.createElement('iframe');
    // iframe.onload = 'refreshLink(this.contentWindow.location.href)';
    // document.body.appendChild(iframe);

    // let doc = iframe.contentWindow.document;

    // let name = document.createElement('h1');
    // name.innerText = `Name: ${product.name}  Stock: ${product.stock}`;
    // doc.getElementsByTagName('body')[0].appendChild(name);

}


