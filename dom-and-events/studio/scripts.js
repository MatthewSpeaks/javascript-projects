// Write your JavaScript code here.
// Remember to pay attention to page loading!
 window.addEventListener("load", () =>{

    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const shuttleRocket = document.querySelector(".rocketImage");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

    console.log(shuttleRocket);

    let bottom = parseInt(shuttleRocket.style.bottom);
    let left = parseInt(shuttleRocket.style.left);

    // lookup getComputedStyle()

    
    upButton.addEventListener("click", () => { 
        //makes the rocket go up by 10px when pressed
        bottom += 10;
        return shuttleRocket.style.bottom = bottom;
        
    });
    downButton.addEventListener("click", () => {
        //makes the rocket go down by 10px when pressed
        return shuttleRocket.style.bottom -= "10px";
    });
    rightButton.addEventListener("click", () => {
        //makes the rocket go right by 10px when pressed127.0.0.1
        return shuttleRocket.style.left += "10px";
    });
    leftButton.addEventListener("click", () => {
        //makes the rocket left up by 10px when pressed
        return shuttleRocket.style.left -= "10px";
    });

    takeoffButton.addEventListener("click", () => {
        // "confirm that the shuttle is ready for takeoff"
        if (confirm("Confirm that the shuttle is ready for takeoff")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue"; 
            let newShuttleHeight = Number(spaceShuttleHeight.innerHTML);
            newShuttleHeight += 10000;
            spaceShuttleHeight.innerHTML = newShuttleHeight;
        }
    })

    landButton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green"; 
        spaceShuttleHeight.innerHTML = 0;
    })

    abortButton.addEventListener("click", () => {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }


    });


    //
 }
 )