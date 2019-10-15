DFRobotUltrasonic.SetModeRange(Range.MEASURE_RANG_150)
basic.forever(function () {
    basic.showNumber(DFRobotUltrasonic.i2cReadTemDistance())
    basic.showNumber(DFRobotUltrasonic.i2cReadDistance())
})
