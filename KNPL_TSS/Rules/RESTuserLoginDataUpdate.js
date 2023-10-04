/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function RESTuserLoginDataUpdate(clientAPI) {
    try{
       let updateLog =  clientAPI.executeAction("/KNPL_TSS/Actions/RESTupdateUserLogReport.action");
       return clientAPI.executeAction("/KNPL_TSS/Actions/Service/InitializeOnlineSuccessMessage.action");
    }
    catch{
        return clientAPI.executeAction("/KNPL_TSS/Actions/Service/InitializeOnlineFailureMessage.action");;
    }
}
