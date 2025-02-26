document.getElementById('add-button').addEventListener('click',function(event){
    event.preventDefault()
    const number = getPhoneNumber('agent-number');
    const amount = getNumberConvert("amount");
    const pin = getNumberConvert('pin-number');
    const mainMony = convertInnerText('money');
    const select = document.getElementById('select').value;
    if(number.length === 11){
        if(amount > 0){
            if(pin === 1234){
                const sum = amount + mainMony;
                addedInnerText("money",sum);
                document.getElementById("amount").value = '';
                document.getElementById('pin-number').value = '';

                const transactionData = document.getElementById('transaction-history');
                const div = document.createElement('div');
                div.classList.add('bg-sky-500/75');
                div.classList.add('p-2');
                div.classList.add('my-4');
                div.classList.add('rounded-lg');
                div.innerHTML = `
                <h1 class="text-xl">Add mony ${amount} TK</h1>
                <h4 class="text-lg">From: ${select}</h4>
                <p>From: ${number}</p>
                `
                transactionData.appendChild(div);


            }else{
                alert('Wrong pin!')
            }
        }else{
            alert('Enter your valid number!')
            
        }
    }else{
        alert('Enter your valid number!')
    }
})