const countValue = document.querySelector('#counter')
const increment=()=>{
    //get the value from ui
    let value= parseInt(countValue.innerText);
    //inc the value
    value=value+1;
    //set the value
    countValue.innerText=value;
}

const decrement=()=>{

    //get the value from ui
    let value= parseInt(countValue.innerText);
    //dec the value
    value=value-1;
    //set the value
    countValue.innerText=value;

}