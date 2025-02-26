document.getElementById('cashout-button').addEventListener('click',function(event){
    event.preventDefault();

    const number = getPhoneNumber('number');
    const amount = getNumberConvert('cash-amount');
    const pin = getNumberConvert('cash-pin');
    const mainMoney = convertInnerText('money');

    if(number.length === 11){
        if(amount > 0){
            if(pin === 1234){
                const sum = amount - mainMoney;
                addedInnerText('money',sum);
                document.getElementById('cash-amount').value = '';
                document.getElementById('cash-pin').value = '';

                const transactionData = document.getElementById('transaction-history');
                const div = document.createElement('div');
                div.classList.add('bg-sky-500/75');
                div.classList.add('p-2');
                div.classList.add('my-4');
                div.classList.add('rounded-lg');
                div.innerHTML = `
                <h1 class="text-xl">Cashout ${amount} TK</h1>
                <p>Agent Number: ${number}</p>
                `
                transactionData.appendChild(div);

            }else{
                alert('Enter valid pin')
            }
        }else{
            alert('Enter valid number');
        }
    }else{
        alert('Enter valid number');
    }
})