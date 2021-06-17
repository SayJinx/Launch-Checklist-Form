// Write your JavaScript code here!
window.addEventListener("load", function() {

   const form = document.getElementById("form");
   const pilotName = document.getElementById("pilotName");
   const copilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");
   
   formSubmit.addEventListener("click", function(event){
      event.preventDefault()
      //do validation stuff
      formCheck();
      //Submit form?
   });
   
   function formCheck() {
      const pilotNameValue = pilotName.value
      const copilotNameValue = copilotName.value
      const fuelLevelValue = fuelLevel.value
      const cargoMassValue = cargoMass.value
   
      //validate fields filled
      if(pilotNameValue === "" || copilotNameValue === "" || fuelLevelValue === "" || cargoMassValue === "") {
         alert("All fields are required")
      };
      //validate names are not numbers
      if(typeof pilotNameValue === number || typeof copilotNameValue === number) {
         alert("Crew names are not valid")
      };
      if(isNaN(fuelLevelValue) || isNaN(cargoMassValue)) {
         alert("Fuel Level and Cargo Mass must be numbers")
      };
   };

}
)

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
