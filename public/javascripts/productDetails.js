function addToCart(product){
    const amount = document.getElementById('amount').value;
    if(!amount || amount <= 0){
        window.alert('product amount error');
    }
    const jwtToken = localStorage.getItem('user');

    if(!jwtToken){
        window.open('http://localhost:3000/login');
    }

    fetch('http://localhost:3000/cart/add',
        {
            method: 'POST',
            body: JSON.stringify({
                amount: amount,
                product: product.id
            }),
            headers: {
                'Content-Type': 'application/json',
                'JWT': jwtToken
            }
        })
        .then(res => {
            if(res.status === 200){
                alert('add to cart successfully');
            }
            else if(res.status === 401){
                alert('invalid token.plz re-login');
            }
            return res.json();
        })
        .then(data => {
            if(data.redirect){
                window.location.href = `http://localhost:3000${data.redirect}`;
            }

            console.log(data);
        })
}