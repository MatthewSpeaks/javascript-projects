function init () {
    const missionAbort = document.getElementById("abortMission");
    const liftButton = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    liftButton.addEventListener("click", event =>{
        paragraph.innerHTML = "Houston, we have liftoff!";
    })
    missionAbort.addEventListener("mouseover", event =>{
        missionAbort.style.backgroundColor = "red";
    })
    missionAbort.addEventListener("mouseout", event =>{
        missionAbort.style.backgroundColor = "";
    })

    missionAbort.addEventListener("click", event=> {
        let response = window.confirm("Are you sure you want to abort the mission?");
        if (response) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
        }
    })

}

window.addEventListener("load", init);