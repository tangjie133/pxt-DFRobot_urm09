
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
    let i2cAddr = 0x20
    /**
     * 设置测量距离
     */
    //% block="Set Mode Range|%ramge"
    export function SetModeRange(range: Range): void {
        let Mode = range | 0x80
        let buffer:number[]=[];
        buffer=[7,Mode]
        let buf = pins.createBufferFromArray(buffer);
        pins.i2cWriteBuffer(i2cAddr, buf)
        // pins.i2cWriteNumber(i2cAddr, 7, NumberFormat.Int8LE)
        // pins.i2cWriteNumber(i2cAddr, Mode, NumberFormat.Int8LE)
    }
    /**
     * 读距离
     */
    //% block="read distance"
    export function i2cReadDistance(): number {
        pins.i2cWriteNumber(i2cAddr, 3, NumberFormat.Int16LE)
        let buffer = pins.i2cReadBuffer(i2cAddr, 2)
        let distance = (buffer[0]<<8)+buffer[1]
        basic.pause(100)
        distance = distance > 222 ? 222 : distance
        //serial.writeNumber(distance)
        //return distance
        return distance
    }
    /**
     * 读取温度
     */
    //%block="read temdistance"
    export function i2cReadTemDistance():number {
        pins.i2cWriteNumber(i2cAddr,5, NumberFormat.Int8LE)
        let buffer = pins.i2cReadBuffer(i2cAddr, 2)
        let tem=Math.round(((buffer[0]<<8)+buffer[1])/10)
        //serial.writeNumber(tem)
        return tem
    }
}
