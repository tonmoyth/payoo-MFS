document.getElementById('cashout-button').addEventListener('click',function(event){
    event.preventDefault()
    const cashAmount = document.getElementById('cash-amount').value;
    const cashAmountConvert = parseFloat(cashAmount);
    
    const cashPin = document.getElementById('cash-pin').value;
    const cashPinConvert = parseInt(cashPin);
    
    const availableBalance = document.getElementById('money').innerText;
    const availableConvert = parseFloat(availableBalance);
    

    const number = document.getElementById('number').value;
    
    if(number.length == 11){
        if(cashAmountConvert > 0){
            if(cashPinConvert === 1234){
                const subtract = availableConvert - cashAmountConvert;
                document.getElementById('money').innerText = subtract;
                 document.getElementById('cash-amount').value = '';
                document.getElementById('cash-pin').value = '';
            }else{
                alert('Enter Your Valid Pin')
            }
        }else{
            alert('Enter Your valid Amount')
        }
    }else{
        alert('Enter Your Valid Number')
    }

})