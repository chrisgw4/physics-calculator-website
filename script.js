const accelOne = document.querySelectorAll(".accel-one")
const accelTwo = document.querySelectorAll(".accel-two")
const accelThree = document.querySelectorAll(".accel-three")

// sec -> min -> hours -> days -> years
const secDict = { "sec": 0 }

// styles the correct equation
function styleCorrectEquation(equation) {
    equation.style.color = "#FF0000"
    equation.style.fontSize = "30";
}

// resets the styles of the equations passed in to their original values
function resetEquations(equations) {
    for (e of equations) {
        e.style.color = "#000000";
        e.style.fontSize = "larger";
        e.style.opacity = "1"
    }
}

// the equations passed in will have its style made to show the equation is not being used
function styleIncorrectEquation(equation) {
    equation.style.fontSize = "x-small"
    equation.style.opacity = "0.5"
}

function convertLengthUnits(value, unit) {


    // converts the input number into meters
    if (unit === "km") {
        // convert from kilometers into meters for the math
        return value * 1000
    }
    if (unit === "m") {
        return value
    }
    if (unit === "cm") {
        // convert from centimeters into meters for the math
        return value / 100
    }
    if (unit === "mm") {
        // convert from millimeters into meters for the math
        return value / 1000
    }

}

function checkAccelerationOne() {

    let answerBox = document.querySelector("#accel-one-answer")
    let answerBegin = document.querySelector("#accel-one-equation-beginning")

    let valueDict = { "time": 0, "accel": 0, "vel-init": 0, "vel-final": 0 }

    let equations = document.querySelectorAll(".constant-accel-one")

    // keeps track of which variable relates to which equation index
    let equationDict = { "vel-final": 0, "vel-init": 1, "accel": 2, "time": 3 }

    // sets the equations styles back to normal
    resetEquations(equations)


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
                    //document.getElementsByName(input.name)[0].style.color = "#2466f2";
                if (input.name === "vel-final") {
                    let accelUnits = document.querySelectorAll(".accel-one-units")[0]

                    // converts the input number into meters
                    valueDict[input.name] = convertLengthUnits(valueDict[input.name], accelUnits.options[accelUnits.selectedIndex].value)
                }
                if (input.name === "vel-init") {
                    let accelUnits = document.querySelectorAll(".accel-one-units")[2]

                    // converts the input number into meters
                    valueDict[input.name] = convertLengthUnits(valueDict[input.name], accelUnits.options[accelUnits.selectedIndex].value)
                }
                if (input.name === "accel") {
                    let accelUnits = document.querySelectorAll(".accel-one-units")[4]

                    // converts the input number into meters
                    valueDict[input.name] = convertLengthUnits(valueDict[input.name], accelUnits.options[accelUnits.selectedIndex].value)
                }

                input.style.color = "#2466f2";
                styleIncorrectEquation(equations[equationDict[input.name]])

            }


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
        styleCorrectEquation(equations[3])
    }
    // if the var to find is acceleration
    else if (missingVar == "accel") {
        // (vf - v0)/t = a
        answerBox.innerHTML = ((valueDict["vel-final"] - valueDict["vel-init"]) / valueDict["time"]).toFixed(3) + " m/s^2"
        answerBegin.innerHTML = "Acceleration is"
        styleCorrectEquation(equations[2])
    }
    // if the var to find is initial velocity
    else if (missingVar == "vel-init") {
        // (vf - at) = v0
        answerBox.innerHTML = ((valueDict["vel-final"] - valueDict["accel"] * valueDict["time"])).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Initial Velocity is"
        styleCorrectEquation(equations[1])

    }
    // if the var to find is final velocity
    else if (missingVar == "vel-final") {
        // v0 + at = vf
        answerBox.innerHTML = ((valueDict["vel-init"] + valueDict["accel"] * valueDict["time"])).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Final Velocity is"
        styleCorrectEquation(equations[0])
    }
}



function checkAccelerationTwo() {

    let answerBox = document.querySelector("#accel-two-answer")
    let answerBegin = document.querySelector("#accel-two-equation-beginning")

    let valueDict = { "time": 0, "accel": 0, "vel-init": 0, "pos-final": 0, "pos-init": 0 }


    let equations = document.querySelectorAll(".constant-accel-two")

    // keeps track of which variable relates to which equation index
    let equationDict = { "pos-final": 0, "pos-init": 1, "vel-init": 2, "accel": 3, "time": 4 }

    // sets the equations styles back to normal
    resetEquations(equations)


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
                    //document.getElementsByName(input.name)[0].style.color = "#FF0000";
                input.style.color = "#2466f2";
                styleIncorrectEquation(equations[equationDict[input.name]])
            }

        } else {
            missingVar = input.name
        }
    }
    if (numOfInputs < 4) {
        return
    }

    // if the var to find is time
    if (missingVar == "time") {
        //  (v0 - sqrt(v0^2 + 2*a*Delta x))/a       sqrt((xf - x0 - v0t)/(1/2*a)) = t 
        answerBox.innerHTML = ((valueDict["vel-init"] + Math.sqrt(Math.pow(valueDict["vel-init"], 2) + 2 * valueDict["accel"] * (valueDict["pos-final"] - valueDict["pos-init"]))) / valueDict["accel"]).toFixed(3) + " s" //Math.sqrt((valueDict["pos-final"] - valueDict["pos-init"] - (valueDict["vel-init"] * valueDict["time"])) / (1 / 2 * valueDict["accel"])).toFixed(3) + " s"
        answerBegin.innerHTML = "Time is"
        styleCorrectEquation(equations[4])
    }
    // if the var to find is acceleration
    else if (missingVar == "accel") {
        // (xf - x0 - v0t)/(1/2t^2) = a
        answerBox.innerHTML = (2 * (valueDict["pos-final"] - valueDict["pos-init"] - valueDict["vel-init"] * valueDict["time"]) / (Math.pow(valueDict["time"], 2))).toFixed(3) + " m/s^2"
        answerBegin.innerHTML = "Acceleration is"
        styleCorrectEquation(equations[3])

    }
    // if the var to find is initial velocity
    else if (missingVar == "vel-init") {
        // (xf-x0-(1/2*a*t^2))/t = v0
        answerBox.innerHTML = ((valueDict["pos-final"] - valueDict["pos-init"] - (1 / 2 * valueDict["accel"] * Math.pow(valueDict["time"], 2))) / valueDict["time"]).toFixed(2) + " m/s"
        answerBegin.innerHTML = "Initial Velocity is"
        styleCorrectEquation(equations[2])

    }
    // if the var to find is final position
    else if (missingVar == "pos-final") {
        // (x0 + v0*t + (1/2*a*t^2)) = xf
        answerBox.innerHTML = ((valueDict["pos-init"] + valueDict["vel-init"] * valueDict["time"] + (1 / 2 * valueDict["accel"] * Math.pow(valueDict["time"], 2)))).toFixed(3) + " m"
        answerBegin.innerHTML = "Final Position is"
        styleCorrectEquation(equations[0])

    }
    // if the var to find is initial position
    else if (missingVar == "pos-init") {
        // (xf-v0*t-(1/2*a*t^2)) = x0
        answerBox.innerHTML = ((valueDict["pos-final"] - valueDict["vel-init"] * valueDict["time"] - (1 / 2 * valueDict["accel"] * Math.pow(valueDict["time"], 2)))).toFixed(3) + " m"
        answerBegin.innerHTML = "Initial Position is"
        styleCorrectEquation(equations[1])

    }
}

function checkAccelerationThree() {

    let answerBox = document.querySelector("#accel-three-answer")
    let answerBegin = document.querySelector("#accel-three-equation-beginning")

    let valueDict = { "vel-final": 0, "vel-init": 0, "pos": 0, "accel": 0 }

    let equations = document.querySelectorAll(".constant-accel-three")

    // keeps track of which variable relates to which equation index
    let equationDict = { "vel-final": 0, "vel-init": 1, "accel": 2, "pos": 3 }

    // sets the equations styles back to normal
    resetEquations(equations)


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

                if (input.name === "accel") {
                    let accelUnits = document.querySelectorAll(".accel-three-units")[0]


                    if (accelUnits.options[accelUnits.selectedIndex].value == "km") {
                        // convert from kilometers into meters for the math
                        valueDict[input.name] = valueDict[input.name] / 1000
                        console.log(valueDict[input.name])
                    }

                }

                //document.getElementsByName(input.name)[0].style.color = "#FF0000";
                input.style.color = "#2466f2";
                styleIncorrectEquation(equations[equationDict[input.name]])

            }

        } else {
            missingVar = input.name
        }
    }
    if (numOfInputs < 3) {
        return
    }

    // if the var to find is time
    if (missingVar == "vel-final") {
        // math.sqrt(v_0^2 + 2 * a * x)
        answerBox.innerHTML = Math.sqrt(Math.pow(valueDict["vel-init"], 2) + 2 * valueDict["accel"] * valueDict["pos"]).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Final Velocity is"
        styleCorrectEquation(equations[0])
    }
    // if the var to find is acceleration
    else if (missingVar == "vel-init") {
        // sqrt(v^2_f - 2*a*x) = v_0
        answerBox.innerHTML = Math.sqrt(Math.pow(valueDict["vel-final"], 2) - 2 * valueDict["accel"] * valueDict["pos"]).toFixed(3) + " m/s"
        answerBegin.innerHTML = "Initial Velocity is"
        styleCorrectEquation(equations[1])

    }
    // if the var to find is initial velocity
    else if (missingVar == "pos") {
        // (v^2_f - v_0^2)/2a
        answerBox.innerHTML = ((Math.pow(valueDict["vel-final"], 2) - Math.pow(valueDict["vel-init"], 2)) / (2 * valueDict["accel"])).toFixed(3) + " m"
        answerBegin.innerHTML = "Position is"
        styleCorrectEquation(equations[3])

    }
    // if the var to find is final position
    else if (missingVar == "accel") {
        // (v^2_f - v_0^2)/2x
        answerBox.innerHTML = ((Math.pow(valueDict["vel-final"], 2) - Math.pow(valueDict["vel-init"], 2)) / (2 * valueDict["pos"])).toFixed(3) + " m/s^2"
        answerBegin.innerHTML = "Acceleration is"
        styleCorrectEquation(equations[2])

    }
}



setInterval(checkAccelerationOne, 100);
setInterval(checkAccelerationTwo, 100);
setInterval(checkAccelerationThree, 100);