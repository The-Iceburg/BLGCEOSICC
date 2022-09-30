function teamEntry(teamID) {
    var team = document.getElementById(teamID).value;
    const collection = document.getElementsByClassName(teamID.concat("name"));
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = team;
    }
    resultsGen();
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
    resultsGen();
}

function resultsGen() {

    var results = {};
    const events = ["BR", "AB", "SR", "TR", "RR", "BF"];

    for (let k = 0; k < 8; k++) {

        var pointotal = 0;

        for (let i = 0; i < 6; i++) {

            var id = "R".concat(k + 1).concat(events[i]).concat("MU");
            var pointsAwarded = document.getElementById(id).textContent;
            pointotal += parseInt(pointsAwarded);
        }
        results["team".concat(k + 1).concat("name")] = pointotal;
        
    }


}    