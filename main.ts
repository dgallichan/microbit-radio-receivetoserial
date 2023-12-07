input.onButtonPressed(Button.A, function () {
    isSending = 1 - isSending
})
function sendSerialLine () {
    if (isSending == 1) {
        thisString = convertToText(control.millis())
        for (let value2 of allVars) {
            thisString = "" + thisString + "," + value2
        }
        serial.writeLine(thisString)
        led.toggle(0, 0)
    }
}
function resetNewData () {
    for (let value of isNewData) {
        isNewData[value] = 0
    }
}
radio.onReceivedValue(function (name, value) {
    allVars[parseFloat(name)] = value
    isNewData[parseFloat(name)] = 1
    if (parseFloat(name) == nVars - 1) {
        isAllNewData = 1
        for (let value2 of isNewData) {
            if (value2 == 0) {
                isAllNewData = 0
            }
        }
        if (isAllNewData == 1) {
            sendSerialLine()
        }
    }
})
let isSending = 0
let isAllNewData = 0
let isNewData: number[] = []
let allVars: number[] = []
let nVars = 0
let thisString = ""
thisString = ""
radio.setGroup(1)
nVars = 9
allVars = []
isNewData = []
isAllNewData = 0
isSending = 0
basic.showIcon(IconNames.Target)
basic.forever(function () {
	
})
