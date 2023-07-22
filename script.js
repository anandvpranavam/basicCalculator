const calculatorBox = document.querySelector("calculator")
const inputData = document.getElementById("result")
const formEl = document.querySelector("form")


const buttonsItem = document.querySelectorAll("button")

for(let i=0; i < buttonsItem.length; i++){
    buttonsItem[i].addEventListener("click", ()=>{
        const buttonData = buttonsItem[i].textContent;
        if(buttonData === "C"){
            clearScreen();
            
        }
        else if(buttonData === "="){
            showResult();
        }
        else if(buttonData === "D"){
            
        }
        else{
            appendData(buttonData);
        }

    })
    
}


function clearScreen() {
    inputData.value =""
}
function showResult() {
    inputData.value = eval(inputData.value)
}
function appendData(buttonData) {
    inputData.value = inputData.value + buttonData;
}

