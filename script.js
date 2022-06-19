// TODO: add code here 
//for(astronaut of json)
window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            // if($astronaut.active="true"){
            //     astronaut.active.color = green;
            // };            
            for(astronaut of json){

                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li id= "${astronaut.firstName}">Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture} alt="astronauts"></img>
                </div>
                `; 
                let element = document.getElementById(`${astronaut.firstName}`);
                if(astronaut.active){
                    element.style.color = "green";
                }
                if(astronaut.active == false){
                    element.style.color = "red";
                }
            };
        });
    });
});