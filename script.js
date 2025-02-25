document.getElementById('form').addEventListener('submit',function(event){

    event.preventDefault()
    const accountNumber = document.getElementById('account-number').value;
    console.log(typeof accountNumber);
    const accountPin = document.getElementById('account-pin').value;
    if(accountNumber.length === 11){
        if(accountPin === '12345'){
            window.location.href="main/main.html"
        }else{
            alert('please check your pin')
        }
    }else{
        alert('please check your number')
    }
});