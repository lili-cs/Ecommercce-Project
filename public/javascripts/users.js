function showOrderHistory(userName){
    const url = 'http://localhost:3000/orders/' + userName;
    window.open(url, '_blank');
    // window.location.href = 'http://localhost:3000/orders/' + userName;
}