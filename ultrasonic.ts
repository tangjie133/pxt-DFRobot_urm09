
enum Range {
    //% block="measure_rang_500"
    MEASURE_RANG_500 = 0x20,
    //% block = "measure_rang_300"
    MEASURE_RANG_300 = 0x10,
    //% block = "measure_rang_150"
    MEASURE_RANG_150 = 0x00
}
//% weight=100  color=#0020ff  block="ultrasonic"
namespace DFRobotUltrasonic {
    let i2cAddr = 0x11
    /**
     * 设置测量距离
     */
    //% block="Set Mode Range|%ramge"
    function SetModeRange(range: Range): void {
        let Mode = range | 0x80
        pins.i2cWriteNumber(i2cAddr, Mode, NumberFormat.UInt8BE)
    }
    /**
     * 读距离
     */
    //% block="read distance"
    function i2cReadDistance(): number {
        pins.i2cWriteNumber(i2cAddr, 3, NumberFormat.UInt16BE)
        let buffer = pins.i2cReadBuffer(i2cAddr, 2)
        let distance = (buffer[0] << 8) + buffer[1]
        return distance
    }

}
