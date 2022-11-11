
// import robotjs library 😊😊😊😊😊😊😊😊😊✅✅✅✅✅✅✅✅✅✅✅
var robot = require('robotjs');

// (っ◔◡◔)っ ♥ He turned into a Pickle ♥

function main(){
    console.log("Starting...");
    sleep(4000);
   // 
//NARRATOR:
//(Black screen with text; The sound of buzzing bees can be heard)
//According to all known laws of aviation,
//there is no way a bee should be able to fly.
//
// WELCOME TO THE MAINFRAME
//
var first_tree_x
// START EDGEVILLE BANK
// ROBOT MOVES MOUSE TO COMPASS
// ROBOT CLICKS COMPASS
// ROBOT ROBOT TAKES SCREEN SHOT

// ROBOT IDENTIFIES IF INVENTORY FULL

// IF INVENTORY FULL, GO TO BANK BEEP BOOP BOP

// 💩💩💩💩 ROBOT MOVES TO MARKER 1 💩💩💩💩
// ROBOT MOVES MOUSE TO MARKER 1
// ROBOT CLICKS INSIDE MARKER 1
// MS DELAY
// ROBOT TAKES SCREEN SHOT TO CONFIRM IF ON MARKER 1

// 💩💩💩💩 ROBOT MOVES TO MARKER 2 💩💩💩💩
// ROBOT MOVES MOUSE TO MARKER 2
// ROBOT LEFT CLICKS INSIDE MARKER 2
// MS DELAY
// ROBOT TAKES SCREEN SHOT TO CONFIRM IF ON MARKER 2

// 💩💩💩💩 ROBOT MOVES TO MARKER 3 CUZ WHY NOT 💩💩💩💩
// ROBOT MOVES MOUSE TO MARKER 3
// ROBOT LEFT CLICKS INSIDE MARKER 3
// MS DELAY
// ROBOT TAKES SCREEN SHOT TO CONFIRM IF ON MARKER 3

// 💰💰💰💰 ROBOT MOVES TO BANK 💰💰💰💰
// ROBOT FINDS BANKER
// ROBOT CHOOSES WHICH BANKER TO BANK ON (MAYBE RNG ROLL 1 OF 2)
// ROBOT MOVES MOUSE TO BANKER OF CHOICE BUSSY BAKA
// ROBOT RIGHT CLICKS ON BANKER
// MS DELAY VARYING OFC
// ROBOT MOVES MOUSE TO "BANK ITEMS" TEXT
// ROBOT LEFT CLICKS ON "BANK ITEMS" TEXT
// ROBOT TAKES SCREEN SHOT

// 💰💰💰💰 ROBOT BANKS ITEMS 💰💰💰💰
// ROBOT MOVES MOUSE TO BOTTOM RIGHT INVENTORY ITEM CUZ IT'S EASY
// ROBOT RIGHT CLICKS BOTTOM RIGHT INVENTORY ITEM
// ROBOT MOVES MOUSE TO "DEPOSIT ALL"
// ROBOT LEFT CLICKS
// MS DELAY
// ROBOT MOVES MOUSE TO CLOSE BANK TAB X
// ROBOT LEFT CLICKS CLOSE BANK TAB
// MS DELAY

// 🌲🌲🌲🌲 IF INVENTORY NOT FULL = GO FIND TREE 🌲🌲🌲🌲
// ROBOT MOVES MOUSE TO COMPASS
// ROBOT MOUSE LEFT CLICKS COMPASS
// ROBOT TAKES SCREEN SHOT
// ROBOT FINDS MARKER 1
// ROBOT LEFT CLICKS MARKER 1
// MS DELAY



function testScreenCapture() {
    //  taking a screen shot
    var img = robot.screencapture(0,0, 1920, 1080);
    // hell yeah
    var pixel_color = img.colorAt(30, 18)
    console.log(pixel_color);
    //💩💩💩 is it taking the pixel color of this 30, 18? cuz this is probs all trash 💩💩💩
    class 💩💩💩💩
    }
}

function findTree() {
    var x = 300 , y = 300, width = 1300 , height = 400
    var img = robot.screencapture(0, 0, 1920, 1080);
    // 💀💀💀🏳️‍🌈  yo where the fuck does the screenshot go and do shit man 🏳️‍🌈💀💀💀
    var tree_colors = ["6e7a2f", "98a83f", "727c3c", "4a5227"];
    //  these are the willow trees colors that i stole totally aren't also on the ground that is around the tree
    for(var i = 0; i < 100; i++) {
        var random_x = getRandomInt(0 , width-1);
        var random y = getRandomInt(0, height -1);
        var sample_color = img.colorAt(random_x, random_y);
            // i think this is all for uhhhh x and y RND which is cool and probs will use a lot

        if (tree_colors.includes(sample_color)) {
            var screen_x = random_x + x;
            var screen_y = random_y + y;
            
            console.log("Found a tree at: "  + screen_x + " " + screen_y + " color " + sampled_color);
            return {x:screen_x, y: screen_y}    
                 // ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
                // ❤️ok cool i think this is telling us it found a tree in the terminal?    ❤️
                // ❤️man shit dawg can u make your own terminal into a program??            ❤️
                // ❤️am i making a program with java script? PeepoThink                     ❤️
                // ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
        }

    }

    \\ did not find the color in our screenshot
    return false;
}
// 🅶🆁🅴🅴🆃🅸🅽🅶🆂 🅼🆈 🅳🆄🅳🅴🆂 🅶🆁🅴🅴🆃🅸🅽🅶🆂 🅼🆈 🅳🆄🅳🅴🆂  🅶🆁🅴🅴🆃🅸🅽🅶🆂 🅼🆈 🅳🆄🅳🅴🆂  🅶🆁🅴🅴🆃🅸🅽🅶🆂 🅼🆈 🅳🆄🅳🅴🆂 
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }
//🤔 i have no idea what this means🤔

function getRandomInt(min, max) {
    min = Math.ceil.apply(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min;   
        // i think i googled and found this? <==3 <==3 <=3

}

// 🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺
main();


