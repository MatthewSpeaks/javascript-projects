//TODO: Add Your Code Below
window.addEventListener("load", ()=> {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            console.log(json);
            const bioInfo = document.getElementById("container");
            for (let i=0; i < json.length; i++) {
            bioInfo.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li id="green${i}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
            <img class="avatar" src="${json[i].picture}">
            </div>`
            let greenText = document.getElementById(`green${i}`);
            if (json[i].active){
                greenText.style.color = "green";
            }
            };
        })
})
})