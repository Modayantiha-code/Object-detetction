modelstatus = "";
finalarray = [];

function preload() {
    catdog = loadImage("dog_cat.jpg");
}

function setup() {
    mycanvas = createCanvas(700, 440);
    mycanvas.center()
    COCOmodel = ml5.objectDetector('cocossd', modelhasloaded);
    document.getElementById("status").innerHTML = "Detecting objects...";
}

function modelhasloaded() {
    console.log("Model has loaded");
    modelstatus = true
    COCOmodel.detect(catdog, getResults);
}

function getResults(errorname, resultsarray) {
    if (errorname) {
        console.error(errorname);
    } else {
        console.log(resultsarray);
        finalarray = resultsarray;
    }
}



function draw() {
    image(catdog, 0, 0, 700, 440);
    if (modelstatus != "") {
        for (forloopvalue = 0; forloopvalue = finalarray.length; forloopvalue = forloopvalue + 1) {
            document.getElementById("status").innerHTML = "Objects Detected";
            x = finalarray[forloopvalue].x;
            y = finalarray[forloopvalue].y;
            height = finalarray[forloopvalue].height;
            width = finalarray[forloopvalue].width;
            objectname = finalarray[forloopvalue].label;
            fill("purple");
            text(objectname, x, y);
            noFill();
            stroke("black");
            rect(x, y, width, height);
        }
    }

}