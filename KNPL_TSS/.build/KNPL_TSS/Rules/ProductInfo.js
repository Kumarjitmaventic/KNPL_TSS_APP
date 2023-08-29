/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ProductInfo(context) {
    let userId= context.evaluateTargetPath('#Application/#ClientData/UserId');
    console.log(userId);
}