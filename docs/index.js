MixItUp();

function MixItUp() {
    //24 tiles required to be shuffled and placed into table upon page refresh
    tileTextArray = [
        "Home Goal", "Away Goal", "Face-Off Violation", "One-Timer", "Hat-Trick",
        "High Stick", "Icing", "Power Play Goal", "Penalty Kill", "Tripping",
        "Overtime", "Player Blocks Shot", "Blood!", "Offside", "Puck In Stands",
        "Glove Save", "Gloves Dropped", "Ref Falls Down", "Fans Boo", "Lost Fan",
        "Same Number Different Player", "Player Exits Game Early", "Broken Stick", "K/O"
    ];
    
    var stack = [];
    shuffle(tileTextArray).forEach((text)=>{
        stack.push(text);
    })

    var tilesArray = document.querySelectorAll("#tile");

    tilesArray.forEach((tile)=>{
        tile.innerHTML = stack.pop();
    });
    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
