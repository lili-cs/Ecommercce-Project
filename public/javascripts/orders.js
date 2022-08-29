document.addEventListener('DOMContentLoaded', () => {
    const btns = document.getElementsByTagName('button');
    for(let btn of btns){
        const userName = localStorage.getItem('userName');
        if(userName === 'admin'){
            btn.style.display = 'block'
        }
        else{
            btn.style.display = 'none';
        }
    }
});



function approveOrder(orderId){
    fetch(`http://localhost:3000/orders/${orderId}`,
    {
        method: 'PUT',
        body: JSON.stringify({
            status: 'Approved'
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => {
        if(res.status == 200){
            alert('order updated successfully');

            //refecth orders from server
            const userName = localStorage.getItem('userName');
            window.location.href = `http://localhost:3000/pending-orders`;
        }
        else if(res.status === 500){
            alert('order updat failed');
        }
    })
    .catch(err => console.log(err));
}