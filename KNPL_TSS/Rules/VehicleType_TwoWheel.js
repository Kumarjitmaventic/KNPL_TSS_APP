/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function vehicleType_TwoWheel(context) {
    let pageProxy = context.getPageProxy();
    let pageClientData = pageProxy.getClientData();

    pageClientData.Type = "2 Wheeler";
    return context.executeAction("/KNPL_TSS/Actions/ProductDefectCategoryNavigation.action");
}