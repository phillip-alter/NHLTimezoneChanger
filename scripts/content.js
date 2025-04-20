let gameTimes = document.getElementsByClassName("game-state-container").children.textContent;

if (gameTimes){
    const re = new RegExp("([0-9]{2}):([0-9]{2})\s?([A-Z]{2}\s?([A-Za-z]{3})");
    for (var t of gameTimes){
        const words = t.matchAll(re);
        const TimeSep = [...words];
        let hours = words[0];
        let mins = words[1];
        let ampm = words[2];
        let zone = words[3];
        let pdtHours = hours - 4;
        let pdtMins = mins;
        let pdtAmpm = ampm;
        let pdtZone = "PDT";
        gameTimes = pdtHours + ":" + pdtMins + " " + pdtAmpm + " " + pdtZone;
    }
}