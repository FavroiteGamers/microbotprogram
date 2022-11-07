radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        motobit.enable(MotorPower.On)
        motobit.invert(Motor.Left, false)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        basic.pause(1000)
        motobit.enable(MotorPower.Off)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        motobit.enable(MotorPower.On)
        motobit.invert(Motor.Left, false)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        basic.pause(1000)
        motobit.enable(MotorPower.Off)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        motobit.enable(MotorPower.On)
        motobit.invert(Motor.Left, false)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        basic.pause(500)
        motobit.enable(MotorPower.Off)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
	
})
