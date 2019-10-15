# pxt-dfrobot_urm09



## Add extension

open your microbit makecode project, in Extension, paste  

https://github.com/tangjie133/pxt-dfrobot_urm09

to search box then search.

## Basic usage

```
DFRobotUltrasonic.SetModeRange(Range.MEASURE_RANG_150)
basic.forever(function () {
    basic.showNumber(DFRobotUltrasonic.i2cReadTemDistance())
    basic.showNumber(DFRobotUltrasonic.i2cReadDistance())
})

```


## API

- SetModeRange(range: Range)  
	Set the automatic mode  the measurement distance 
- i2cReadDistance()  
   Read the distance data of the register
- i2cReadTemDistance()
Read the temperature data of the register 

## License

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit
(The metadata above is 
