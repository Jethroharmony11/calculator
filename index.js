function init(){
    const number1field =document.getElementById("number1field")
    const number2field =document.getElementById("number2field")
    const addbutton =document.getElementById("addbutton")
    const subtractbutton =document.getElementById("subtractbutton")
    const multiplybutton =document.getElementById("multiplybutton")
    const dividebutton =document.getElementById("dividebutton")
    const answerfield=document.getElementById("answerfield")

    function onClickAdd(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answerfield.value =number1 + number2;
    }
    function onClickSubtraction(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answerfield.value =number1 - number2;
    }
    function onClickMultiply(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answerfield.value =number1 * number2;
    }
    function onClickDivide(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answerfield.value =number1 / number2;   
}
addbutton.onclick = onClickAdd;
subtractbutton.onclick = onClickSubtraction;
multiplybutton.onclick = onClickMultiply;
dividebutton.onclick = onClickDivide;
window.Function.onclick = ()=> document.body.style.background=`
rgb(${Math.random()*255}), ${Math.random9*255}, ${Math.random()*255}`

}
window.onload=init;