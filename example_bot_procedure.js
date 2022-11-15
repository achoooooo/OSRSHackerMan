
var numTimesRun = 0;
var keepGoing = true;

// Return true 90% of the time
function resultFromMyOtherFunctionThing() {
    return (Math.random() < 0.9);
}

while (keepGoing) {
    // Print how many times we've run this damn darn loop
    numTimesRun += 1;
    console.log("We've run this thing", numTimesRun, "time(s)!");

    // Fetch something or do something whatever lol
    keepGoing = resultFromMyOtherFunctionThing();
}


let currentPhase = 'waiting';

while (true) {
    const startTime = getCurrentTime();

    // Get the current screenshot
    const screengrab = takeScreenshot();

    // Determine what to do lol
    const actionToPerform = figureOutWhatToDo(screengrab, currentPhase);

    // JUST Do it Nike
    performAction(actionToPerform);

    const finishTime = getCurrentTime();

    // If it took less than a second to do this loop, just wait a little bit extra
    // This way we don't do some stupid shit like take 10000 screenshots in a second
    if (finishTime - startTime < 1000) {
        sleep(finishTime - startTime);
    }
}
