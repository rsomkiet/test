input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 50)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 75)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 150)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 225)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    }
})
basic.showIcon(IconNames.Heart)
