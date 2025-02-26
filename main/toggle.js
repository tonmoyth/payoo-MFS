document.getElementById('cashout-form').style.display ='none';
document.getElementById('transaction').style.display = 'none';

document.getElementById("addmony-box").addEventListener('click',function(){
    noneOrBlock("add-mony-form","block");
    noneOrBlock("cashout-form","none");
    noneOrBlock('transaction','none');
    boxColor('addmony-box');
    boxRemoveColor('cashout-box');
    boxRemoveColor('transaction-box')
})
document.getElementById("cashout-box").addEventListener('click',function(){
    noneOrBlock("add-mony-form","none");
    noneOrBlock("cashout-form","block");
    noneOrBlock('transaction','none');

    boxColor('cashout-box');
    boxRemoveColor('addmony-box',);
    boxRemoveColor('transaction-box')
})

document.getElementById('transaction-box').addEventListener('click',function(){
    boxRemoveColor('cashout-box');
    boxRemoveColor('addmony-box',);
    boxColor('transaction-box')
})



