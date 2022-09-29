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
    switch(eventType) {
        case "BR":
            var multiplier = 1
            break;
        case "AR":
            var multiplier = 2
            break;
        case "SR":
            var multiplier = 2
            break;
        case "TR":
            var multiplier = 2
            break;
        case "SR":
            var multiplier = 2
            break;
        case "BF":
            var multiplier = 2
            break;
    }
    var multiplied = parseInt(points) * multiplier;
    document.getElementById(paLocation.replace('PA', 'MU')).innerHTML = multiplied;
}