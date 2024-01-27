Shuffle();

function Shuffle() {
    //24 tiles required to be shuffled and placed into table upon page refresh
    tileTextArray = [
        "Home Goal", "Away Goal", "Face-Off Violation", "One-Timer", "Hat-Trick",
        "High Stick", "Icing", "Power Play Goal", "Penalty Kill", "Tripping",
        "Overtime", "Player Blocks Shot", "Blood!", "Offside", "Puck In Stands",
        "Glove Save", "Gloves Dropped", "Ref Falls Down", "Fans Boo", "Lost Fan",
        "Same Number Different Player", "Player Exits Game Early", "Broken Stick", "K/O"
    ];
    
    var stack = [];
    tileTextArray.Shuffle.forEach((text)=>{
        stack.push(text);
    })

    var tilesArray = document.querySelectorAll('table td');

    tilesArray.forEach((tile)=>{
        tile.innerHTML = stack.pop();
    });
    
}
