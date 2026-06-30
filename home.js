


/*function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
} */

  const btn = document.getElementById("aboutme");
const box = document.getElementById("infoBox");
const closeBtn = document.querySelector(".closeBtn");

btn.addEventListener("click", () => {
  box.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  box.style.display = "none";
});




var numberInput = document.getElementById("weight");
var repsInput = document.getElementById("reps");

function calculateOneRepMax() {
    let number = parseFloat(numberInput.value);
    let reps = parseInt(repsInput.value);
    let oneRepMax = (number * reps) / 30 + number;
    document.getElementById("resultat").value = oneRepMax.toFixed(2);
}


const container = document.getElementById("container_menu");
const closeButton = document.querySelector(".closeButton");
const openButton = document.querySelector(".menu_item1");

openButton.addEventListener("click", () => {
    container.style.display = "block";
});

closeButton.addEventListener("click", () => {
    container.style.display = "none";
});







let inputAge = document.getElementById("age");
let inputWeight2 = document.getElementById("weight2");
let inputHeight = document.getElementById("height");

function calculateBMR() {
    let age = parseInt(inputAge.value);
    let weight = parseFloat(inputWeight2.value);
    let height = parseFloat(inputHeight.value);
    let activityLevel = Number(document.querySelector('input[name="activity"]:checked').value);
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let sex =  document.querySelector('input[name="sex"]:checked').value;

    let target = Number(document.querySelector('input[name="target"]:checked').value);

    if (sex == "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    let resultat2 = Math.floor(bmr * activityLevel * target);
    document.getElementById("resultat2").value = resultat2.toFixed(0);
}




const container2 = document.getElementById("container_menu2");
const closeButton2 = document.querySelector(".closeButton2");
const openButton2_BMR = document.querySelector(".menu_item2");
const openButton2_activities = document.querySelector(".openButton2");
const closeButton_activities = document.querySelector(".closeButton2_activities");

openButton2_BMR.addEventListener("click", () => {
    container2.style.display = "flex";
    closeButton_activities.style.display = "none";
});

closeButton2.addEventListener("click", () => {
    container2.style.display = "none";
});

openButton2_activities.addEventListener("click", () => {
    container2.style.display = "flex";
    closeButton_activities.style.display = "block";
    document.getElementById("activities").style.display = "flex";
});

closeButton_activities.addEventListener("click", () => {
    document.getElementById("activities").style.display = "none";
    /*closeButton_activities.style.display = "none";*/
    document.querySelector(".closeButton2_activities").style.display = "none";
});







const target_box = document.getElementById("target_box");
const openButton_target = document.getElementById("target");
const closeButton_target = document.querySelector(".closeButton_target");

openButton_target.addEventListener("click", () => {
    target_box.style.display = "flex";
});

closeButton_target.addEventListener("click", () => {
    target_box.style.display = "none";
});

function calculateBMI() {  
    let weight = parseFloat(document.getElementById("weight_BMI").value);
    let height = parseFloat(document.getElementById("height_BMI").value) / 100;
    let bmi = weight / (height * height);
    document.getElementById("resultat_BMI").value = bmi.toFixed(2);
    if (bmi < 18.5) {
        document.getElementById("resultat_BMI2").value = "Недостаточная масса тела";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("resultat_BMI2").value = "Нормальная масса тела";
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById("resultat_BMI2").value = "Избыточная масса тела";
    } else {
        document.getElementById("resultat_BMI2").value = "Ожирение";
    }
}

const container_BMI = document.querySelector(".container_BMI");
const openButton_BMI = document.querySelector(".menu_item3");
const closeButton_BMI = document.querySelector(".closeButton_BMI");
openButton_BMI.addEventListener("click", () => {
    container_BMI.style.display = "flex";
});


closeButton_BMI.addEventListener("click", () => {
    container_BMI.style.display = "none";
});


