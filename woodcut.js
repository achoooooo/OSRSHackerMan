
// import robotjs library 😊😊😊😊😊😊😊😊😊✅✅✅✅✅✅✅✅✅✅✅
var robot = require('robotjs');

// (っ◔◡◔)っ ♥ He turned into a Pickle ♥

//NARRATOR:
//(Black screen with text; The sound of buzzing bees can be heard)
//According to all known laws of aviation,
//there is no way a bee should be able to fly.
//
// WELCOME TO THE MAINFRAME 
//
// START EDGEVILLE BANK 💰🚶👌
// ROBOT MOVES MOUSE TO COMPASS

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function click_compass(){
    const COMPASS_LEFT_X = 1625;
    const COMPASS_TOP_Y = 42;
    const COMPASS_RIGHT_X = 1666;
    const COMPASS_BOT_Y = 73;

    console.log("Clicking compass")

    const compassClickX = getRandomInt(COMPASS_LEFT_X, COMPASS_RIGHT_X);
    const compassClickY = getRandomInt(COMPASS_TOP_Y, COMPASS_BOT_Y);

    console.log("Clicking: ", compassClickX, compassClickY);

     robot.moveMouseSmooth(compassClickX, compassClickY);
    sleep(500);
    robot.mouseClick('left');
    sleep(500);
}

function click_compass2(){
    const COMPASS_LEFT_X = 1625;
    const COMPASS_TOP_Y = 42;
    const COMPASS_RIGHT_X = 1666;
    const COMPASS_BOT_Y = 73;

    console.log("Clicking compass")

    const compassClickX = getRandomInt(COMPASS_LEFT_X, COMPASS_RIGHT_X);
    const compassClickY = getRandomInt(COMPASS_TOP_Y, COMPASS_BOT_Y);

    console.log("Clicking: ", compassClickX, compassClickY);

     robot.moveMouseSmooth(compassClickX, compassClickY);
    sleep(500);
    robot.mouseClick('left');
    sleep(500);
}

function Marker1toMarker2(){
    const MARKER1_LEFT_X = 903;
    const MARKER1_TOP_Y = 776;
    const MARKER1_RIGHT_X = 957;
    const MARKER1_BOT_Y = 839;

    console.log("CHOOSING WHERE TO MOVE IN TO MARKER 1")

    const Marker1ClickX = getRandomInt(MARKER1_LEFT_X, MARKER1_RIGHT_X);
    const Marker1ClickY = getRandomInt(MARKER1_TOP_Y, MARKER1_BOT_Y);

    console.log("Moving and clicking Marker 1 to Marker 2");
        robot.moveMouseSmooth(Marker1ClickX, Marker1ClickY);
    sleep(500);
    robot.mouseClick('left');
    sleep(500);

}
function Marker2toGayYew2(){
    const GAY_YEW2_LEFT_X = 728;
    const GAY_YEW2_TOP_Y = 712;
    const GAY_YEW2_RIGHT_X = 770;
    const GAY_YEW2_BOT_Y = 765;

    console.log("CHOOSING WHICH GAY PIXEL TO CLICK")

    const MarkerYewGay2X = getRandomInt(GAY_YEW2_LEFT_X, GAY_YEW2_RIGHT_X);
    const MarkerYewGay2Y = getRandomInt(GAY_YEW2_TOP_Y, GAY_YEW2_BOT_Y);

    console.log("Moving to Gay Yew Tree 2");

    robot.moveMouseSmooth(MarkerYewGay2X, MarkerYewGay2Y);
    sleep(500);
    robot.mouseClick('left');
    sleep(500);


}

function mousewheelzoomMove(){
    const MOUSEWHEEL_LEFT_X = 1455;
    const MOUSEWHEEL_TOP_Y = 50;
    const MOUSEWHEEL_RIGHT_X = 1555;
    const MOUSEWHEEL_BOT_Y = 100;

    console.log("Generating random Mouse Zoom Out Location");

    const MouseWheelZoomX = getRandomInt(MOUSEWHEEL_LEFT_X, MOUSEWHEEL_RIGHT_X);
    const MouseWheelZoomY = getRandomInt(MOUSEWHEEL_TOP_Y, MOUSEWHEEL_BOT_Y);

    console.log("Moving mouse to Zooming Out Zone", MouseWheelZoomX, MouseWheelZoomY);

      robot.moveMouseSmooth(MouseWheelZoomX, MouseWheelZoomY);
    sleep(500);
    // UHHHH NOT WORKING HELP INDIA 
    // robot.scrollMouse(0, 50);
    // sleep(500);
    // robot.scrollMouse(0, -50);
    // sleep(500);
    // robot.scrollMouse(50, 0);
    // sleep(500);
    // robot.scrollMouse(-50, 0);
}

function YewTree1(){
    const YEWTREE_ONE_LEFT_X = 390;
    const YEWTREE_ONE_TOP_Y = 949;
    const YEWTREE_ONE_RIGHT_X = 642;
    const YEWTREE_ONE_BOT_Y = 997;

    console.log("Choosing where to click Yew 1");

    const YewTree1X = getRandomInt(YEWTREE_ONE_LEFT_X, YEWTREE_ONE_RIGHT_X);
    const YewTree1Y = getRandomInt(YEWTREE_ONE_TOP_Y, YEWTREE_ONE_BOT_Y);

    console.log("Moving to Yew Tree 1", YewTree1X, YewTree1Y);

    robot.moveMouseSmooth(YewTree1X, YewTree1Y);
    sleep(500);
    robot.mouseClick('left');
    sleep(500);

}

function YewTree2(){
    const YEWTREE_TWO_LEFT_X = 781;
    const YEWTREE_TWO_TOP_Y = 1036;
    const YEWTREE_TWO_RIGHT_X = 864;
    const YEWTREE_TWO_BOT_Y = 1006;

    console.log("Choosing where to click Yew 2");

    const YewTree2X = getRandomInt(YEWTREE_TWO_LEFT_X, YEWTREE_TWO_RIGHT_X);
    const YewTree2Y = getRandomInt(YEWTREE_TWO_TOP_Y, YEWTREE_TWO_BOT_Y);

    console.log("Moving to Yew Tree 2", YewTree2X, YewTree2Y);

        robot.moveMouseSmooth(YewTree2X, YewTree2Y);
    sleep(500);
    robot.mouseClick('left');
    sleep(500);

}
function YewTree1Return(){
    const YEWTREE_ONE_RETURN_LEFT_X = 886;
    const YEWTREE_ONE_RETURN_TOP_Y = 268;
    const YEWTREE_ONE_RETURN_RIGHT_X = 940;
    const YEWTREE_ONE_RETURN_BOT_Y = 370;

    console.log("Choosing where to click to return to Yew 1");

    const YewTree1ReturnX = getRandomInt(YEWTREE_ONE_RETURN_LEFT_X, YEWTREE_ONE_RETURN_RIGHT_X);
    const YewTree1ReturnY = getRandomInt(YEWTREE_ONE_RETURN_TOP_Y, YEWTREE_ONE_RETURN_BOT_Y);

    console.log("Moving Back to Yew Tree 1", YewTree1ReturnX, YewTree1ReturnY);

        robot.moveMouseSmooth(YewTree1ReturnX, YewTree1ReturnY);
    sleep(500);
    robot.mouseClick('left');
    sleep(500);

}

function FindTree1(){
    var x = 390, y = 949, width = 252, height = 48
    var img = robot.screen.capture(x, y, width, height);

    var tree_colors = ["#a28954", "#867247", "#57612e"];

    for(var i = 0; i < 100; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (tree_colors.includes(sample_color)){
            var screen_x = random_x + x;
            var screen_y = random_y + y;

            console.log("Found a Tree at: " + screen_x + ", " + screen_y + " color " + sampled_color);
            return {x: screen_x, y: screen_y};
        }
    }
}
   






function main(){
    console.log("Starting...");
    sleep(3000);
    click_compass();
    sleep(500);
    mousewheelzoomMove();
    sleep(500);
    Marker1toMarker2();
    sleep(100);
    Marker2toGayYew2();
    click_compass2();
    FindTree1();

    
}
// 🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺
main();


