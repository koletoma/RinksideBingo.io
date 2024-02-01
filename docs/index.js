//MixItUp();
$(()=>{
    $(".tile").each((index,item)=>{
        console.log("tiles found");
        $(item).on("click", () =>{
            //let tile = $("[class='" + item.class + "']");
            if(item.clicked == "false"){
                item.clicked = "true";
                item.style.backgroundColor = "red";
            }
            else
            {
                item.clicked = "false";
                item.style.backgroundColor = "white";
            }
            

            console.log("click!");
        })
    })
})
window.addEventListener("load", (event) => {
    MixItUp();
  });

function TileClick(){
    $("[type=button]").each((item)=>{
        $(item).on("click", () =>{
            let tile = $("[class='" + item.class + "']");
            console.log(tile.val());
        })
    })
}
function MixItUp() {
    //24 tiles required to be shuffled and placed into table upon page refresh
    tileTextArray = [
        "Home Goal", "Away Goal", "Face-Off Violation", "One-Timer", "Hat-Trick",
        "High Stick", "Icing", "Power Play Goal", "Penalty Kill", "Tripping",
        "Overtime", "Player Blocks Shot", "Blood!", "Offside", "Puck In Stands",
        "Glove Save", "Fight Ensues", "Ref Falls Down", "Fans Boo", "Lost Fan",
        "Double-Double", "Player Exits Game Early", "Broken Stick", "Top Shelf"
    ];
    
    var stack = [];
    shuffle(tileTextArray).forEach((text)=>{
        stack.push(text);
    })

    const tilesArray = document.querySelectorAll("[class=tile]");

    tilesArray.forEach((tile,i)=>{
        tile.innerHTML = stack.pop();
        tile.clicked = "false";
        tile.style.backgroundColor = "white";
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
