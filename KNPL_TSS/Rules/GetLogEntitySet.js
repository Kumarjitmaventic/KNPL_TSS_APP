/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function GetLogEntitySet(clientAPI) {
    let userId= clientAPI.evaluateTargetPath('#Application/#ClientData/UserId');
    return "/UserLoginData('" + userId + "')";
    
}
