/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function UniqueProductName(context) {
    var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
    var vType = vehicleType.Type;
     //new chnages
     var query = "$filter=vehicleType_name eq '" +vType+"' and category_ID eq " +context.binding.category.ID+" and subCategory_ID eq " +context.binding.ID+"";
     //var query = "$filter=vehicleType/name eq '" +vType+"' and subCategory/name eq '" +context.binding.name+"'&$expand=vehicleType,subCategory,product,mainCustomer";
    return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'GetProductsBySubCategoryAndVehicleType', [], query).then((result) => {
        var returnArray = [];
        for (var i = 0; i < result.length; i++) {
            var item = result.getItem(i);
            if (item.name) {
                returnArray.push({
                    "ReturnValue": item.name,
                    "DisplayValue": item.name
                });
            }
        }
        let ids = returnArray.map(o => o.ReturnValue)
        let filtered = returnArray.filter(({ ReturnValue }, index) => !ids.includes(ReturnValue, index + 1))
        return filtered;
    });
}