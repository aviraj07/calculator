let down=document.getElementById('down');
let up=document.getElementById('up');
let num1="";
let num2="";
let operato="";

window.addEventListener('keydown', keyboard);

function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return Math.round(((num1/num2) + Number.EPSILON )*100000)/100000;
}

function modulu(num1,num2){
    return num1%num2;
}

function operate(operator, num1,  num2){
    if(operator === '+'){
        return add(num1, num2);
    }

    else if(operator === '-')
     return subtract(num1, num2);

    else if(operator === '*')
     return multiply(num1,num2);

    else if(operator === '/')
     return divide(num1, num2);

    else if(operator === '%')
    return modulu(num1,num2); 

    else{
        return "Type Error";
    }

}

let nums = document.getElementsByClassName('num');
Array.from(nums).forEach(function(num){
    num.addEventListener('click',function(e){
      if(down.textContent === "Type Error" || down.textContent === "ERROR" || down.textContent === "Infinity")
      down.textContent = "";

      if(down.textContent.includes('.'))
      document.getElementById('point').style.pointerEvents = 'none';
      else
      document.getElementById('point').style.pointerEvents = 'auto';

      down.textContent += e.target.textContent;
      if(up.textContent === "")
      num1 = parseFloat(down.textContent);
      else
      num2 = parseFloat(down.textContent);
      if(down.textContent.includes('.'))
      document.getElementById('point').style.pointerEvents = 'none';
      else
      document.getElementById('point').style.pointerEvents = 'auto';
    })
})

function number(e){

}

let operators = document.getElementsByClassName('operator');
Array.from(operators).forEach(function(operator){
    operator.addEventListener('click',function(e){
        if(down.textContent.includes('.')){
            document.getElementById('point').style.pointerEvents = 'none';
        }
              
        else{
            document.getElementById('point').style.pointerEvents = 'auto';
        }
        up.textContent = down.textContent + ' ' + e.target.textContent;
        operato = e.target.textContent;
        down.textContent = "";
    })
})

document.querySelector('#equal').addEventListener('click',function(){
    down.textContent = operate(operato,num1,num2);
    up.textContent = "";
    num1 = parseFloat(down.textContent);
    if(down.textContent.length > 15)
    down.textContent = 'ERROR';

}) 

document.getElementById('clear').addEventListener('click',function(){
    up.textContent = "";
    down.textContent = "";
    num1 = "";
    num2 = "";
    operato = "";
})

document.getElementById('opposite').addEventListener('click',function(){
    down.textContent *= -1;
})

document.getElementById('del').addEventListener('click',function(){
    down.textContent = down.textContent.toString();
    down.textContent = down.textContent.slice(0,-1);
    if(down.textContent.includes('.')){
        document.getElementById('point').style.pointerEvents = 'none';
    }
          
    else{
        document.getElementById('point').style.pointerEvents = 'auto';
    }
    
    if(up.textContent === "")
    num1 = parseFloat(down.textContent);
    else
    num2 = parseFloat(down.textContent);
})

function keyboard(e){

}