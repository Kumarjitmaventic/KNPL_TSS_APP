/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function DataResponse(context) {
    let actionResult = context.getActionResult("GetDefectResponse");
    if (actionResult && actionResult.data) {
        if (actionResult.data.d.Code == 200) {
            alert(actionResult.data.d.Message);
        }
        else if (actionResult.data.d.Code == 400) {
            alert(actionResult.error.message);
        }
    }
    else {
        alert(actionResult.error.message);
    }
}