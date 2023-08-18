function calculationBtn(btnCalculation,inputValue1,inputValue2,areaId,setInfo) {
    const buttonClick = document.getElementById(btnCalculation);
    buttonClick.addEventListener('click',function () {
      const getInputValue1 =  inputElementvalue(inputValue1);
      const getInputValue2 =  inputElementvalue(inputValue2);
      const getInfoList =  getElementList(setInfo);
      const muliPulation = 0.5 * getInputValue1 * getInputValue2;

      setValueElement(areaId,muliPulation,getInfoList)

      console.log(getInfoList);
        

    })
}

function getElementList(elementId) {
    const getValueList = document.getElementById(elementId).innerText;
    return getValueList;
}


function inputElementvalue(elementValue) {
   if (typeof elementValue ==' '|| elementValue <= 0 ) {
    alert("give me valid Info");
   }else{
    const getValue = document.getElementById(elementValue);
    const convertValue = parseFloat(getValue.value);
    document.getElementById(elementValue).value = '';
    return convertValue;
   }
}
let added = 1;
function setValueElement(areaID, ValueElement, setInfo) {
    const getArea = document.getElementById(areaID);
    const creaElement = document.createElement('div');
    creaElement.classList.add('item-set', 'flex', 'h-20', 'justify-between', 'p-4', 'bg-green-400', 'items-center','rounded','m-3');
    creaElement.innerHTML = `
    <span style="color: red; font-size: 18px;">${added} ${" "} ${setInfo}</span>
    <span style="color: blue; font-size: 24px;">${ValueElement}</span>
    <p class="text-2xl">cm<sup>2</sup></p>
    <button class="btn btn-primary text-xs">Convert</button>
    `;

    getArea.appendChild(creaElement);
    added++;
}

