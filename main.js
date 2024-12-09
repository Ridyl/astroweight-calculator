var planets = [ 
['Pluto', 0.06], 
['Neptune', 1.148], 
['Uranus', 0.917], 
['Saturn', 1.139], 
['Jupiter', 2.640], 
['Mars', 0.3895], 
['Moon', 0.1655], 
['Earth', 1], 
['Venus', 0.9032], 
['Mercury', 0.377], 
['Sun', 27.9] 
];

let button = document.getElementById("calculate-button");
let list = document.getElementById("planets");
let plutoHaters = document.getElementById("pluto-denial");

// On page load function reverses order of array and then places each option within list dropdown
planets.reverse().forEach((element) => {
    let newOption = document.createElement("option");
    let name = element[0];
    
    newOption.textContent = name;

    list.appendChild(newOption);
});

// When function is called a default gravity variation is placed and given planetName is filtered through plants list to find corresponding variation value.
function calculateWeight(weight, planetName) { 
    let variation = 1;

    planets.forEach((planet) => {
        if (planet[0] === planetName) {
            variation = planet[1];
        } 
    });
    return weight * variation;
}

// Handles ClickEvent for the calculate button. Takes required inputs and asigns them to variables to be passes to calculateWeight(), then returned and placed in output text.
function handleClickEvent(e) {
    let userInput = document.getElementById("user-weight");
    let output = document.getElementById("output");
    let userWeight = userInput.value;
    let planetName = list.value;
    let result = null;

    // If statement insures that there is a value input by the user in weight input. If not, user is prompted to enter one.
    if(userInput && userInput.value) {
        result = calculateWeight(userWeight, planetName);
        output.textContent = `If you were on ${planetName}, you would weigh ${result}lbs!`;
    } else {
        output.textContent = `Please enter a weight.`;
    }
    

} 

button.onclick = handleClickEvent;



// Bonus Challenges 
// 9. Create a remove pluto button to appease the pluto deniers.
// 10. Cutsom Planet

