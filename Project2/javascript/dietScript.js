function showDetails(plan) {
    const plans = {
        "Weight Loss": {
            title: "Weight Loss Diet",
            img: "images/WeightLoss.png",
            desc: "Low-calorie, balanced meals to shed extra pounds.",
            bullets: [
                "Meal timings : <strong>8 AM, 1 PM, 7 PM</strong>",
                "Grocery list : <strong>Greens, oats, lean meat</strong>",
                "Custom recipes : <strong>Quinoa salad, protein smoothies</strong>"
            ]
        },
        "Muscle Gain": {
            title: "Muscle Gain Diet",
            img: "images/MuscleGain.png",
            desc: "High-protein meals to build muscle mass.",
            bullets: [
                "Meal timings : <strong>7 AM, 11 AM, 3 PM, 8 PM</strong>",
                "Grocery list : <strong>Eggs, chicken, whey protein</strong>",
                "Custom recipes : <strong>Chicken wraps, protein pancakes</strong>"
            ]
        },
        "Balanced": {
            title: "Balanced Diet",
            img: "images/BalancedDiet.png",
            desc: "Optimal balance of proteins, carbs, and fats.",
            bullets: [
                "Meal timings : <strong>3 balanced meals & 2 snacks</strong>",
                "Grocery list : <strong>Fruits, whole grains, nuts</strong>",
                "Custom recipes : <strong>Veggie bowls, lentil soups</strong>"
            ]
        }
    };

    const planData = plans[plan];
    const modal = document.getElementById("dietModal");
    const content = document.getElementById("modalContent");

    if (planData) {
        content.innerHTML = `
            <img src="${planData.img}" alt="${planData.title}">
            <h2>${planData.title}</h2>
            <p>${planData.desc}</p>
            <ul>
                ${planData.bullets.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <button onclick="closeModal()" class="close-btn">OK</button>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    document.getElementById("dietModal").style.display = "none";
    document.body.style.overflow = "auto";
}


function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Basal Metabolic Rate (BMR) calculation 
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const calorieNeeds = Math.round(bmr * activity);

    document.getElementById('calorie-result').textContent = 
        `Your daily calorie requirement: ${calorieNeeds} kcal.`;
}