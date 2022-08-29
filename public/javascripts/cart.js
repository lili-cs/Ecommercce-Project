function addOrder(){
    const recipient = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneNumber').value;
    const shipping = document.getElementById('shippingAddress').value;
    const billing = document.getElementById('billingAddress').value;
    const paymentElement = document.getElementById('paymentMethod');
    const payment = paymentElement.options[paymentElement.selectedIndex].text;

    const jwtToken = localStorage.getItem('user');
    const userName = localStorage.getItem('userName');

    fetch('http://localhost:3000/orders/add', 
    {
        method: 'POST',
        body: JSON.stringify({
            userName: userName,
            recipient: recipient,
            email: email,
            phone: phone,
            shipping: shipping,
            billing: billing,
            payment: payment,
            items: []
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'JWT': jwtToken
        }
    })
    .then(res => {
        if(res.status === 200){
            alert('order has been submitted successfully');
        }

    })
    .catch(err => console.log(err));

    
}