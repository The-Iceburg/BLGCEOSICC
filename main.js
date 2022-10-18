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
    const orderName = ["1teamname","2teamname","3teamname","4teamname","5teamname","6teamname","7teamname","8teamname"]
    const orderPoints = ["1teampoints","2teampoints","3teampoints","4teampoints","5teampoints","6teampoints","7teampoints","8teampoints"]
    const teams = ["team1","team2","team3","team4","team5","team6","team7","team8"]
    const pointsTotals = []
    const indexOrder = []
    const names = []
    for (let k = 0; k < 8; k++) {
    
        var pointotal = 0;

        
        for (let i = 0; i < 6; i++) {

            var id = "R".concat(k + 1).concat(events[i]).concat("MU");
            var pointsAwarded = document.getElementById(id).textContent;
            pointotal += parseInt(pointsAwarded);
        }
        pointsTotals.push(pointotal)
        results["team".concat(k + 1)] = pointotal;

        
    }
    var pTcopy = pointsTotals.slice()    
    pTcopy.sort(function(a, b){return b - a})

    console.log(pointsTotals)
    for (let i = 0; i < 8; i++) {
        var indexes = pointsTotals.indexOf(pTcopy[i], i)
        if (indexes == -1) {
            indexes = pointsTotals.indexOf(pTcopy[i], 0)
        }

        indexOrder.push(indexes)
    }
    
    for (let i = 0; i < 8; i++) {
        names.push(document.getElementById(teams[i]).value)
    }
    
    for (let k = 0; k < 8; k++) {
        var nameOrder = indexOrder[k] 
        document.getElementById(orderName[k]).innerHTML = names[nameOrder];
        document.getElementById(orderPoints[k]).innerHTML = pTcopy[k]
        
    }



}