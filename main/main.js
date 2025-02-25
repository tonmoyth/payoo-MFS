document.getElementById('add-button').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertAmount = parseFloat(amount);
    const pinNumber = document.getElementById('pin-number').value;
    const convertPin = parseInt(pinNumber);
    const mony = document.getElementById('money').innerText;
    const convertMony = parseFloat(mony);
    
    console.log(mony);
    if(convertAmount && convertPin){
        if(convertPin === 1234){
            const sum = convertAmount + convertMony;
            document.getElementById('money').innerText = sum;
            document.getElementById('pin-number').value = '';
            document.getElementById('amount').value = '';
        }else{
            alert('Check Your PIN')
        }
    }else{
        alert('please fill out this field')
    }
})