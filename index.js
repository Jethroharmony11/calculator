function init(){
    const number1field =document.getElementById("number1field")
    const number2field =document.getElementById("number2field")
    const addbuttaon =document.getElementById("ddbuttaon")
    const subtractbutton =document.getElementById("subtractbutton")
    const multiplybutton =document.getElementById("multiplybutton")
    const dividebutton =document.getElementById("dividebutton")
    const answer1field=document.getElementById("answer1field")

    function onClichAdd(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answer1field.value =number1 + number2field;
    }
    function onClichsubtraction(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answer1field.value =number1 - number2field;
    }
    function onClichmultiply(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answer1field.value =number1 * number2field;
    }
    function onClichAdd(){
        const number1 = Number(number1field.value)
        const number2 = Number(number2field.value)
        answer1field.value =number1 / number2field;   
}
addButton.onclick = onClickAdd;
subtractbutton.onclick = onClicksubtract;
multiplybutton.onclick = onClickMultiply;
dividebutton.onclick = onClickDivide;
window.Function.onclick = ()=> document.body.style.background=`
rgb(${Math.random()*255}), ${Math.random9*255}, ${Math.random()*255}

}