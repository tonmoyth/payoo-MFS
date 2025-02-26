// return phone number
function getPhoneNumber(id){
    const number = document.getElementById(id).value;
    return number;
}

// convert string to number function
function getNumberConvert(id){
    const element = document.getElementById(id).value;
    const converted = parseFloat(element);
    return converted;
}

//convert inner text to number
function convertInnerText(id){
    const text = document.getElementById(id).innerText;
    const converted = parseFloat(text);
    return converted;
}

//added inner text value add
function addedInnerText(id,value){
    document.getElementById(id).innerText = value;
}

// toggle
function noneOrBlock(id,status){
    document.getElementById(id).style.display = status;
}

// box bg color add change
function boxColor(id){
    document.getElementById(id).classList.add('bg-[rgba(8,116,242,0.1)]');
}
//box bg color remove
function boxRemoveColor(id){
    document.getElementById(id).classList.remove('bg-[rgba(8,116,242,0.1)]');
}