// Write your JavaScript code here!
window.addEventListener("load", function() {

   const form = document.getElementById("form");
   const pilotName = document.getElementById("pilotName");
   const copilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");

   let pilotCheck = false
   let copilotCheck = false
   let fuelCheck = false
   let massCheck = false


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
      if(pilotNameValue === "") {
         alert("All fields are required")
         pilotCheck = false
         //document.getElementById("pilotStatus").innerHTML = `Captain ${pilotNameValue} is not registered for launch.`
      }
         else if(!isNaN(pilotNameValue)) {
            alert("Crew names are not valid")
            pilotCheck = false
            //document.getElementById("pilotStatus").innerHTML = `Captain ${pilotNameValue} is not registered for launch.`
         }
         else {
            pilotCheck = true
         };
         console.log(pilotCheck)

      if(copilotNameValue === "") {
         alert("All fields are required")
         copilotCheck = false
         //document.getElementById("copilotStatus").innerHTML = `Copilot ${pilotNameValue} is not registered for launch.`
      }  
         else if(!isNaN(copilotNameValue)) {
         alert("Crew names are not valid")
         copilotCheck = false
         //document.getElementById("pilotStatus").innerHTML = `Captain ${pilotNameValue} is not registered for launch.`
      }
         else {
         copilotCheck = true
      };
      console.log(copilotCheck)

      if(fuelLevelValue === "") {
         alert("All fields are required")
         fuelCheck = false
         //document.getElementById("fuelLevel").innerHTML = `Not a valid entry.`
      }
         else if(isNaN(fuelLevelValue)) {
            fuelCheck = false
            alert("Fuel must be a number.")
         }
         else if(fuelLevelValue < 10000) {
            fuelCheck = false
         }
         else {
            fuelCheck = true
         };
         console.log(fuelCheck)

      if(cargoMassValue === "") {
         alert("All fields are required")
         document.getElementById("fuelLevel").innerHTML = `Not a valid entry.`
      }
         else if(isNaN(cargoMassValue)) {
            massCheck = false
            alert("Cargo mass must be a number.")
         }
         else if(cargoMassValue > 10000) {
            massCheck = false
         }
         else {
            massCheck = true
         };
         console.log(massCheck)


      //Removed these lines to better address Katie's comments
     /* if(!isNaN(pilotNameValue)) {
         alert("Crew names are not valid")
         document.getElementById("pilotStatus").innerHTML = `Captain ${pilotNameValue} is not registered for launch.`
         console.log("hello")
      };*/

     /* if(!isNaN(copilotNameValue)) {
         alert("Crew names are not valid")
         document.getElementById("copilotStatus").innerHTML = `Copilot ${pilotNameValue} is not registered for launch.`
         console.log("hello")*/

      /*if(isNaN(fuelLevelValue) || isNaN(cargoMassValue)) {
         alert("Fuel Level and Cargo Mass must be numbers")
         document.getElementById("fuelLevel").innerHTML = `Fuel Level not a valid entry.`
      };*/

      /*if(isNaN(cargoMassValue)) {
         alert("Fuel Level and Cargo Mass must be numbers")
         document.getElementById("cargoMass").innerHTML = `Cargo Mass not a valid entry.`
      };
   };*/
};

//faulty items

   function launchReqs() {
      const pilotNameValue = pilotName.value
      const copilotNameValue = copilotName.value
      const fuelLevelValue = fuelLevel.value
      const cargoMassValue = cargoMass.value

      //update pilot
      if(pilotCheck === true) {
      document.getElementById("pilotStatus").innerHTML = `Captain ${pilotNameValue} is registered and ready for launch.`
      }
      else if(pilotCheck === false) {
            document.getElementById("pilotStatus").innerHTML = `Captain ${pilotNameValue} is NOT registered and ready for launch.`
         };

      //update copilot
      if(copilotCheck === true) {
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotNameValue} is registered and ready for launch.`
      }
      else if(copilotCheck === false) {
            document.getElementById("pilotStatus").innerHTML = `Co-Pilot ${pilotNameValue} is NOT registered and ready for launch.`
         };

      //update fuel

      if(fuelCheck === true) {
         document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
      }
      else if(fuelCheck === false && fuelLevelValue < 10000) {
            document.getElementById("fuelStatus").innerHTML = `Not enough fuel for journey`
         }
         else if(isNaN(fuelLevelValue)) {
            document.getElementById("fuelStatus").innerHTML = `Fuel is not a number.`
         };

      //update cargo

      if(massCheck === true) {
         document.getElementById("cargoStatus").innerHTML = `Cargo level low enough for launch`
      }
         else if(massCheck === false && cargoMassValue > 10000) {
            document.getElementById("cargoStatus").innerHTML = `Mass too high for journey`
         }
         else if(isNaN(cargoMassValue)) {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass is not a number.`
         };
      
      //Removed these lines to better address Katie's comments
      /*if(fuelLevelValue < 10000) {
         document.getElementById("fuelStatus").innerHTML = `Not enough fuel for journey`
         document.getElementsByClassName("h2").innerHTML = `Shuttle is not ready for launch`
      }
      else if(fuelLevelValue > 10000) {
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
      else if(cargoMassValue < 10000) {
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch!`
         document.getElementById("launchStatus").style.color = "green";
      };*/

      if(pilotCheck === true && copilotCheck === true && fuelCheck === true && massCheck === true) {
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch!`
         document.getElementById("launchStatus").style.color = "green";
         console.log("Check complete")
      }
         else {
            document.getElementById("launchStatus").innerHTML = `Shuttle is not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
            console.log("Check failed")
         };

      document.getElementById("faultyItems").style.visibility = "visible";
   };

   //removed these to replace with the block below
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

   let index = Math.floor(Math.random()*5)

         this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const missionTarget = document.getElementById("missionTarget");
               console.log(json[index])
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
         })
      })



}
)