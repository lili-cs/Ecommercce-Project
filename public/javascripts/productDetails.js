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
                // Authorization: `Bearer ${jwtToken}`
                // 'JWT': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InVzZXI2QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidXNlcjYiLCJpYXQiOjE2NjE1NjQyMTF9.hkcl4wk53716D-7q7R-BrYCP8vCu1DtOY4D59m1hM3w"
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.redirect){
                alert('invalid token.plz re-login');
                window.location.href = `http://localhost:3000${data.redirect}`;
            }

            console.log(data);
        })
}