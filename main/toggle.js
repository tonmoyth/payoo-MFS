document.getElementById('cashout-form').style.display = 'none';

document.getElementById('cashout-box').addEventListener('click',function(){
   document.getElementById('cashout-form').style.display = 'block';
    document.getElementById('add-mony-form').style.display = 'none'
    const cashBox = document.getElementById('cashout-box');
    cashBox.classList.add('bg-[rgba(8,116,242,0.1)]');

    const addMony = document.getElementById('addmony-box');
    addMony.classList.remove('bg-[rgba(8,116,242,0.1)]')
});

document.getElementById('addmony-box').addEventListener('click',function(){
    document.getElementById('cashout-form').style.display = 'none';
   
    document.getElementById('add-mony-form').style.display = 'block'
    const cashBox = document.getElementById('cashout-box');
    cashBox.classList.remove('bg-[rgba(8,116,242,0.1)]');

    const addMony = document.getElementById('addmony-box');
    addMony.classList.add('bg-[rgba(8,116,242,0.1)]')
})