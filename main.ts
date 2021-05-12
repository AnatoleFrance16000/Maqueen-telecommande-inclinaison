radio.onReceivedNumber(function (receivedNumber) {
    received = receivedNumber
    if (receivedNumber == 0) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 128)
    } else if (receivedNumber == 1) {
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 128)
    } else if (receivedNumber == 2) {
        Maqueen.MotorRun(Maqueen.Motors.All, Maqueen.Dir.CW, 128)
    } else if (receivedNumber == 4) {
        Maqueen.MotorRun(Maqueen.Motors.All, Maqueen.Dir.CCW, 128)
    } else {
        Maqueen.MotorRun(Maqueen.Motors.All, Maqueen.Dir.CW, 0)
    }
})
let received = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 700) {
        radio.sendNumber(0)
    } else if (input.acceleration(Dimension.X) < -700) {
        radio.sendNumber(1)
    } else if (input.acceleration(Dimension.Y) < -700) {
        radio.sendNumber(2)
    } else if (input.acceleration(Dimension.Y) > 700) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(3)
    }
})
