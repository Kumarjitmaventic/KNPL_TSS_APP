/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function vehicleType(context) {
    var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
    var vType = vehicleType.Type;

    return vType;
}