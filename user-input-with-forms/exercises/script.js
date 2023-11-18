    //Code Your Solution Below
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        let testName = document.querySelector("input[name=testName]");
        let testDate = document.querySelector("input[name=testDate]");
        let testValidDate = new Date(testDate);
        let rocketType = document.querySelector("input[name=rocketType]");
        let boosterCount = document.querySelector("input[name=boosterCount]");
        let windRating = document.querySelector("input[name=windRating]");
        let productionServers = document.querySelector("input[name=productionServers]");
        let validateIfEmpty = [testName, testDate, rocketType, boosterCount, windRating, productionServers];
        
        // adding validation
        
        if (testName.value === "" || testDate.value === "") {
                alert("All fields are required!");
                event.preventDefault();
            }
            //testing date validation
            if (!isNaN(testValidDate)) {
                alert("All fields are required!");
                event.preventDefault();
            }
        }); // end of event listener
    });

