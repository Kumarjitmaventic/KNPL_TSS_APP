/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function UserInfo(context) {
    let userId= context.evaluateTargetPath('#Application/#ClientData/UserId');
    console.log(userId);
    return '$expand=userType&$filter=email eq ' +"'" +userId+"'";
}