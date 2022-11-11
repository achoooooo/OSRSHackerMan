
// import robotjs library 😊😊😊😊😊😊😊😊😊✅✅✅✅✅✅✅✅✅✅✅
var robot = require('robotjs');

// (っ◔◡◔)っ ♥ He turned into a Pickle ♥

function main(){
    console.log("Starting...");
    sleep(4000);
   
//NARRATOR:
//(Black screen with text; The sound of buzzing bees can be heard)
//According to all known laws of aviation,
//there is no way a bee should be able to fly.
//
// WELCOME TO THE MAINFRAME 
//
// START EDGEVILLE BANK 💰🚶👌
// ROBOT MOVES MOUSE TO COMPASS


mouse.moveTo(x, y, delay);
// ROBOT CLICKS COMPASS
mouse.click('left')
// ROBOT ROBOT TAKES SCREEN SHOT
var img = robot.screencapture(0,0, 1920, 1080);
// ROBOT IDENTIFIES IF INVENTORY FULL
var pixel_color = img.colorAt(x, y)


// IF INVENTORY FULL, GO TO BANK BEEP BOOP BOP


// 🚶 ROBOT MOVES TO MARKER 1 🚶🚶🚶
var first_marker_x
// ROBOT MOVES MOUSE TO MARKER 1
mouse.moveTo(x, y, delay);
// ROBOT CLICKS INSIDE MARKER 1
mouse.click('left');
// MS DELAY
sleep(4000);
// ROBOT TAKES SCREEN SHOT TO CONFIRM IF ON MARKER 1
var img = robot.screencapture(0,0, 1920, 1080);

// 🚶🚶 ROBOT MOVES TO MARKER 2 🚶🚶
var second_marker_x
// ROBOT MOVES MOUSE TO MARKER 2
mouse.moveTo(x, y, delay);
// ROBOT LEFT CLICKS INSIDE MARKER 2
mouse.click('left');
// MS DELAY
sleep(4000);
// ROBOT TAKES SCREEN SHOT TO CONFIRM IF ON MARKER 2
var img = robot.screencapture(0,0, 1920, 1080);

// 🚶🚶🚶 ROBOT MOVES TO MARKER 3 CUZ WHY NOT 🚶🚶🚶
var third_marker_x
// ROBOT MOVES MOUSE TO MARKER 3
mouse.moveTo(x, y, delay);
// ROBOT LEFT CLICKS INSIDE MARKER 3
mouse.click('left');
// MS DELAY
sleep(4000);
// ROBOT TAKES SCREEN SHOT TO CONFIRM IF ON MARKER 3
var img = robot.screencapture(0,0, 1920, 1080);

// 💰💰💰💰 ROBOT MOVES TO BANK 💰💰💰💰
// ROBOT FINDS BANKER
var pixel_color = img.colorAt(x, y)
// ROBOT CHOOSES WHICH BANKER TO BANK ON (MAYBE RNG ROLL 1 OF 2)
Math.floor(Math.random() * 2) + 1;
// ROBOT MOVES MOUSE TO BANKER OF CHOICE BUSSY BAKA
mouse.moveTo(x, y, delay)
// ROBOT RIGHT CLICKS ON BANKER
mouse.click('right');
// MS DELAY VARYING OFC
sleep(4000);
// ROBOT MOVES MOUSE TO "BANK ITEMS" TEXT
mouse.moveTo(x, y, delay);
// ROBOT LEFT CLICKS ON "BANK ITEMS" TEXT
mouse.click('left');
// ROBOT TAKES SCREEN SHOT
var img = robot.screencapture(0,0, 1920, 1080);


// 💰💰💰💰 ROBOT BANKS ITEMS 💰💰💰💰
// ROBOT MOVES MOUSE TO BOTTOM RIGHT INVENTORY ITEM CUZ IT'S EASY
mouse.moveTo(x, y, delay);
// ROBOT RIGHT CLICKS BOTTOM RIGHT INVENTORY ITEM
mouse.click('right');
// ms delay
sleep(1000);
// ROBOT MOVES MOUSE TO "DEPOSIT ALL"
mouse.moveTo(x, y, delay);
// ROBOT LEFT CLICKS
mouse.click('left');
// MS DELAY
sleep(4000);
// ROBOT MOVES MOUSE TO CLOSE BANK TAB X
mouse.moveTo(x, y, delay);
// ROBOT LEFT CLICKS CLOSE BANK TAB
mouse.click('left');
// MS DELAY
sleep(4000);


// 🌲🌲🌲🌲 WHEN INVENTORY NOT FULL = GO FIND TREE 🌲🌲🌲🌲
var first_tree_x
// ROBOT MOVES MOUSE TO COMPASS
mouse.moveTo(x, y, delay);
// ROBOT MOUSE LEFT CLICKS COMPASS
mouse.moveTo(x, y, delay);
// ROBOT TAKES SCREEN SHOT
var img = robot.screencapture(0,0, 1920, 1080);
// ROBOT FINDS MARKER 1
var pixel_color = img.colorAt(x, y)
// ROBOT LEFT CLICKS MARKER 1
mouse.click('left');
// MS DELAY
sleep(4000);
// PRETTY SURE THE BOT CAN SEE YEW TREE 1 FROM MARKER 1 BUT WE'LL CROSS THAT BRIDGE WHEN WE GET THERE




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
    // 💀💀💀  yo where the fuck does the screenshot go and do shit man 💀💀💀
    var tree_colors = ["6e7a2f", "98a83f", "727c3c", "4a5227"];
    //  these are the willow trees colors that i stole totally aren't also on the ground that is around the tree
    for(var i = 0; i < 1; i++) {
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


