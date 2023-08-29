/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function customerName(context) {
    return context.binding.defectDetails[0].mainCustomer.name;
    // var query="$expand=defectDetails($expand=mainCustomer)"
    // return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'Products',[],query).then((result) => {
    //     var returnArray = [];
    //     for (var i = 0; i < result.length; i++){
    //         var item = result.getItem(i);
    //         // if(item.defectDetails[0].mainCustomer.name){
    //         //     returnArray.push({
    //         //         "ReturnValue" : item.defectDetails[0].mainCustomer.name,
    //         //         "DisplayValue"  : item.defectDetails[0].mainCustomer.name
    //         //     });
    //         // }
    //         return item.defectDetails[i].mainCustomer.name
    //      }
        
    //     // let ids = returnArray.map(o => o.ReturnValue)
    //     // let filtered = returnArray.filter(({ReturnValue}, index) => !ids.includes(ReturnValue, index + 1))
    //     // return filtered;
    // }); 
    //return '$top=50&$skip=0&$expand=defectDetails($expand=mainCustomer/name)'
}