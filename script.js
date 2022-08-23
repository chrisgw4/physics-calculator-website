const accelOne = document.querySelectorAll(".accel-one")
const accelTwo = document.querySelectorAll(".accel-two")
const accelThree = document.querySelectorAll(".accel-three")




function checkAccelerationOne() {

    let answerBox = document.querySelector("#accel-one-answer")
    let answerBegin = document.querySelector("#accel-one-equation-beginning")

    let valueDict = { "time": 0, "accel": 0, "vel-init": 0, "vel-final": 0 }

    let numOfInputs = 0
    let missingVar = ""
    for (input of accelOne) {
        if (input.value) {
            if (isNaN(input.value)) {
                return;
            } else {
                numOfInputs++;
            }
            if (input.name in valueDict) {
                // sets the dictionary equivalent to the name to the input value
                valueDict[input.name] = parseFloat(input.value)
                document.getElementsByName(input.name)[0].style.color = "#FF0000";

                //console.log(valueDict[input.name])
            }
            //console.log(parseFloat(input.value))

        } else {
            missingVar = input.name
        }
    }
    if (numOfInputs < 3) {
        return
    }

    // if the var to find is time
    if (missingVar == "time") {
        // (vf - v0)/a = t
        answerBox.innerHTML = (Math.abs((valueDict["vel-final"] - valueDict["vel-init"]) / valueDict["accel"])).toFixed(3) + " s"
        answerBegin.innerHTML = "Time is"
    }
    // if the var to find is acceleration
    else if (missingVar == "accel") {
        // (vf - v0)/t = a
        answerBox.innerHTML = ((valueDict["vel-final"] - valueDict["vel-init"]) / valueDict["time"]).toFixed(3) + " m/s^2"
        answerBegin.innerHTML = "Acceleration is"
    }
    // if the var to find is initial velocity
    else if (missingVar == "vel-init") {
        // (vf - at) = v0
        answerBox.innerHTML = ((valueDict["vel-final"] - valueDict["accel"] * valueDict["time"])).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Initial Velocity is"

    }
    // if the var to find is final velocity
    else if (missingVar == "vel-final") {
        // v0 + at = vf
        answerBox.innerHTML = ((valueDict["vel-init"] + valueDict["accel"] * valueDict["time"])).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Final Velocity is"
    }
}



function checkAccelerationTwo() {

    let answerBox = document.querySelector("#accel-two-answer")
    let answerBegin = document.querySelector("#accel-two-equation-beginning")

    let valueDict = { "time-two": 0, "accel-two": 0, "vel-init-two": 0, "pos-final-two": 0, "pos-init-two": 0 }

    let numOfInputs = 0
    let missingVar = ""
    for (input of accelTwo) {
        if (input.value) {
            if (isNaN(input.value)) {
                return;
            } else {
                numOfInputs++;
            }
            if (input.name in valueDict) {
                // sets the dictionary equivalent to the name to the input value
                valueDict[input.name] = parseFloat(input.value)
                document.getElementsByName(input.name)[0].style.color = "#FF0000";
            }

        } else {
            missingVar = input.name
        }
    }
    if (numOfInputs < 4) {
        return
    }

    // if the var to find is time
    if (missingVar == "time-two") {
        // sqrt((xf - x0 - v0t)/(1/2*a)) = t
        answerBox.innerHTML = Math.sqrt((valueDict["pos-final-two"] - valueDict["pos-init-two"] - (valueDict["vel-init-two"] * valueDict["time-two"])) / (1 / 2 * valueDict["accel-two"])).toFixed(3) + " s"
        answerBegin.innerHTML = "Time is"
    }
    // if the var to find is acceleration
    else if (missingVar == "accel-two") {
        // (xf - x0 - v0t)/(1/2t^2) = a
        answerBox.innerHTML = ((valueDict["pos-final-two"] - valueDict["pos-init-two"] - valueDict["vel-init-two"] * valueDict["time-two"]) / (1 / 2 * Math.pow(valueDict["time-two"], 2))).toFixed(3) + " m/s^2"
        answerBegin.innerHTML = "Acceleration is"
    }
    // if the var to find is initial velocity
    else if (missingVar == "vel-init-two") {
        // (xf-x0-(1/2*a*t^2))/t = v0
        answerBox.innerHTML = ((valueDict["pos-final-two"] - valueDict["pos-init-two"] - (1 / 2 * valueDict["accel-two"] * Math.pow(valueDict["time-two"], 2))) / valueDict["time-two"]).toFixed(2) + " m/s"
        answerBegin.innerHTML = "Initial Velocity is"

    }
    // if the var to find is final position
    else if (missingVar == "pos-final-two") {
        // (x0 + v0*t + (1/2*a*t^2)) = xf
        answerBox.innerHTML = ((valueDict["pos-init-two"] + valueDict["vel-init-two"] * valueDict["time-two"] + (1 / 2 * valueDict["accel-two"] * Math.pow(valueDict["time-two"], 2)))).toFixed(3) + " m"
        answerBegin.innerHTML = "Final Position is"
    }
    // if the var to find is initial position
    else if (missingVar == "pos-init-two") {
        // (xf-v0*t-(1/2*a*t^2)) = x0
        answerBox.innerHTML = ((valueDict["pos-final-two"] - valueDict["vel-init-two"] * valueDict["time-two"] - (1 / 2 * valueDict["accel-two"] * Math.pow(valueDict["time-two"], 2)))).toFixed(3) + " m"
        answerBegin.innerHTML = "Initial Position is"
    }
}

function checkAccelerationThree() {

    let answerBox = document.querySelector("#accel-three-answer")
    let answerBegin = document.querySelector("#accel-three-equation-beginning")

    let valueDict = { "vel-final-three": 0, "vel-init-three": 0, "pos-three": 0, "accel-three": 0 }

    let numOfInputs = 0
    let missingVar = ""
    for (input of accelThree) {
        if (input.value) {
            if (isNaN(input.value)) {
                return;
            } else {
                numOfInputs++;
            }
            if (input.name in valueDict) {
                // sets the dictionary equivalent to the name to the input value
                valueDict[input.name] = parseFloat(input.value)
                document.getElementsByName(input.name)[0].style.color = "#FF0000";
            }

        } else {
            missingVar = input.name
        }
    }
    if (numOfInputs < 3) {
        return
    }

    // if the var to find is time
    if (missingVar == "vel-final-three") {
        // math.sqrt(v_0^2 + 2 * a * x)
        answerBox.innerHTML = Math.sqrt(Math.pow(valueDict["vel-init-three"], 2) + 2 * valueDict["accel-three"] * valueDict["pos-three"]).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Final Velocity is"
    }
    // if the var to find is acceleration
    else if (missingVar == "vel-init-three") {
        // sqrt(v^2_f - 2*a*x) = v_0
        answerBox.innerHTML = Math.sqrt(Math.pow(valueDict["vel-final-three"], 2) - 2 * valueDict["accel-three"] * valueDict["pos-three"]).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Initial Velocity is"
    }
    // if the var to find is initial velocity
    else if (missingVar == "pos-three") {
        // (v^2_f - v_0^2)/2a
        answerBox.innerHTML = ((Math.pow(valueDict["vel-final-three"], 2) - Math.pow(valueDict["vel-init-three"], 2)) / (2 * valueDict["accel-three"])).toFixed(3) + " m"
        answerBegin.innerHTML = "Position is"

    }
    // if the var to find is final position
    else if (missingVar == "accel-three") {
        // (v^2_f - v_0^2)/2x
        answerBox.innerHTML = ((Math.pow(valueDict["vel-final-three"], 2) - Math.pow(valueDict["vel-init-three"], 2)) / (2 * valueDict["pos-three"])).toFixed(3) + " m/s^2"
        answerBegin.innerHTML = "Acceleration is"
    }
}



setInterval(checkAccelerationOne, 500);
setInterval(checkAccelerationTwo, 500);
setInterval(checkAccelerationThree, 500);
