//function displayValue() {
//    let posVal = document.getElementsByName("possibleVal")[0].value;
//    document.getElementById("testt").innerHTML = posVal
    // Write into a Separate Document Eventually and session storage
//}

function teamEntry(teamID) {
    var team = document.getElementById(teamID).value;
    const collection = document.getElementsByClassName(teamID.concat("name"));
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = team;
      }
}

function pointAward(paLocation) {
    var points = document.getElementById(paLocation.replace('PA', 'FP')).value;
    document.getElementById(paLocation).innerHTML = points;
    var eventType = paLocation[2].concat(paLocation[3]);
    if (eventType == "AB") {
        var multiplier = 2
    } else {
        var multiplier = 1
    }
    var multiplied = parseInt(points) * multiplier;
    document.getElementById(paLocation.replace('PA', 'MU')).innerHTML = multiplied;
}