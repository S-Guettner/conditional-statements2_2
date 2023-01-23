let rangeInput = document.getElementById("range")
let healthConcern = document.getElementById("healthConcern")
let healthEffect = document.getElementById("healthEffect")
let body = document.querySelector("body")

function checkAirQuality(){
    console.log(rangeInput.value);
    if(rangeInput.value <= 50){
        healthConcern.innerHTML = "Good"
        healthEffect.innerHTML = "Little or no risk"
        body.style.backgroundColor="green"
    }else if(rangeInput.value > 50 && rangeInput.value <= 100){
        healthConcern.innerHTML = "Moderate"
        healthEffect.innerHTML = "Acceptable quality"
        body.style.backgroundColor="yellow"
    }else if(rangeInput.value > 100 && rangeInput.value <= 150){
        healthConcern.innerHTML = "Unhealthy for sensitive groups"
        healthEffect.innerHTML = "Generable publics not likely affected"
        body.style.backgroundColor="orange"
    }
}

checkAirQuality()