const calculatorBox = document.querySelector("calculator")
const inputData = document.getElementById("result")
const formEl = document.querySelector("form")


const buttonsItem = document.querySelectorAll("button")
let lastButtonData = 0;
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
            const previousData = inputData.value;
            // console.log(inputData.value);
            // console.log(buttonData);
            deleteData();
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
    lastButtonData = inputData.value;
}
function deleteData(buttonData) {
    // inputData.value = lastButtonData;
    let currentvalue = inputData.value;
    const y = currentvalue.toString().split('').slice(0, -1).join('');
    const newNum = Number(y);
    inputData.value = newNum;
    console.log(inputData.value)
}

