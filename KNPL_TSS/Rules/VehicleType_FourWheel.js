/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function vehicleType_FourWheel(context) {
    let pageProxy = context.getPageProxy();
    let pageClientData = pageProxy.getClientData();

    pageClientData.Type = "4 Wheeler";
    return context.executeAction("/KNPL_TSS/Actions/ProductDefectCategoryNavigation.action");
}