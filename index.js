window.onload=()=>{
    let button=document.querySelector("#submit");
    button.addEventListener("click",calculateBMI)
}
function calculateBMI(){
    let age=parseInt(document.querySelector("#age").value);
    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    let result=document.querySelector("#result")
    if(age>120 || age<2){
        result.innerHTML="please provide an age between 2 - 120";
    }
    else if(height===""){
        result.innerHTML="please provide a valid height";
    }
    else if(weight===""){
        result.innerHTML="please provide a valid height";
    }
    else{
        let bmi=(weight/((height*height)/10000)).toFixed(1)
        if(bmi<16){
            result.innerHTML= `Severe Thinnes:<span>${bmi}</span>`
        }
        else if(bmi>=16 && bmi<=17){
            result.innerHTML= `Moderate Thinnes:<span>${bmi}</span>`
        }
        else if(bmi>17 && bmi<18.5){
            result.innerHTML= `Mild Thinnes:<span>${bmi}</span>`
        }
        else if(bmi>=18.5&& bmi<25){
            result.innerHTML= `Normal:<span>${bmi}</span>`
        }
        else if(bmi>=25 && bmi<30){
            result.innerHTML= `Overweight:<span>${bmi}</span>`
        }
        else if(bmi>=30 && bmi<35){
            result.innerHTML= `Obese Class 1:<span>${bmi}</span>`
        }
        else if(bmi>=35 && bmi<40){
            result.innerHTML= `Obese Class 2:<span>${bmi}</span>`
        }else{
            result.innerHTML= `Obese Class 3:<span>${bmi}</span>`
        }
    }

}