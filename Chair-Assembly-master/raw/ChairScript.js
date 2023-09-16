/// <reference path="../entiti.d.ts" />

// Local variables
var currentObject;
var currentChild;
var objectStartingPosition;
var endPosition = new Vector3(0, 0, 0);
var t = 0;
var index = 1;

function start() 
{ 
    // Initializing variables
    currentObject = object;
}

function update(deltaTime) 
{ 
    // Animate current chair part
    if(currentChild != null) {
        t += deltaTime*2;
        t = clamp(t,0,1);
        currentChild.transform.position = Vector3.lerp(objectStartingPosition, endPosition, t);

        // Reset variables when animation is done
        if (t == 1) {
            currentChild.transform.position = endPosition;
            currentChild = null;
            t = 0;
        }

    }
}

// Declaring a global function for animating the next chair part
animateChairPart = function() {
    if (index <= currentObject.transform.childCount && currentChild==null){
        currentChild = currentObject.transform.getChildByName(index.toString(), false);
        objectStartingPosition = currentChild.transform.position;
        index++;
    }
}

// Utility function for restricting a value to a given range
function clamp(number, min, max){
    return Math.min(Math.max(number, min), max);
}
