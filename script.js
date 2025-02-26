document.getElementById('log-btn').addEventListener('click',function(event){
    event.preventDefault();
    const number = document.getElementById('account-number').value;
    const pin = document.getElementById('account-pin').value;
    
    if(number.length === 11){
        if(pin === "12345"){
            window.location.href="main/main.html"
        }else{
            alert('Wrong pin')
        }
    }else{
        alert('Enter valid number');
    }
})