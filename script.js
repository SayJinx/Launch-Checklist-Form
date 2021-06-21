// Write your JavaScript code here!
window.addEventListener("load", function() {

   const form = document.getElementById("form");
   const pilotName = document.getElementById("pilotName");
   const copilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");
   
   formSubmit.addEventListener("click", function(event){
      event.preventDefault();
      console.log(event);
      //do validation stuff
      formCheck();
      //Submit form
      launchReqs();

      //planet data
      //intGalactic();
   });
   
//validation

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
      if(!isNaN(pilotNameValue) || !isNaN(copilotNameValue)) {
         alert("Crew names are not valid")
         console.log("hello")
      };
      if(isNaN(fuelLevelValue) || isNaN(cargoMassValue)) {
         alert("Fuel Level and Cargo Mass must be numbers")
      };
   };

//faulty items

   function launchReqs() {
      const pilotNameValue = pilotName.value
      const copilotNameValue = copilotName.value
      const fuelLevelValue = fuelLevel.value
      const cargoMassValue = cargoMass.value

      //update pilot
      document.getElementById("pilotStatus").innerHTML = `Captain ${pilotNameValue} is registered and ready for launch.`

      //update copilot
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotNameValue} is registered and ready for launch.`

      //check fuel
      if(fuelLevelValue < 10000) {
         document.getElementById("fuelStatus").innerHTML = `Not enough fuel for journey`
         document.getElementsByClassName("h2").innerHTML = `Shuttle is not ready for launch`
      }
      else if(fuelLevelValue > 1000) {
         document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch!`
         document.getElementById("launchStatus").style.color = "green";
      };

      //check cargo
      if(cargoMassValue > 10000) {
         document.getElementById("cargoStatus").innerHTML = `Cargo weight exceeds tolerances`;
         document.getElementById("launchStatus").innerHTML = `Shuttle is not ready for launch`;
         document.getElementById("launchStatus").style.color = "red";
      }
      else if(cargoMassValue < 1000) {
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch!`
         document.getElementById("launchStatus").style.color = "green";
      };

      document.getElementById("faultyItems").style.visibility = "visible";
   };

   //Planet stuff
  /* function intGalactic() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json()
            const missionTarget = document.getElementById("missionTarget");
               console.log(json[3])
               missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[3].name}</li>
                  <li>Diameter: ${json[3].diameter}</li>
                  <li>Star: ${json[3].star}</li>
                  <li>Distance from Earth: ${json[3].distance}</li>
                  <li>Number of Moons: ${json[3].moons}</li>
               </ol>
               <img src="${json[3].image}">
               `;
            });
   };*/

         this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const missionTarget = document.getElementById("missionTarget");
               console.log(json[3])
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}">
            `;
         })
      })


}
)