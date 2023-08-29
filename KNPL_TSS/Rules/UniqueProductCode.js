/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function UniqueProductCode(context) {
    var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
    var vType = vehicleType.Type;
    //var query="$expand=defectDetails&$orderby=code asc"
    //var query="$filter=vehicleType/name eq '" +vType+"' and subCategory/name eq '" +context.binding.name+"'&$expand=vehicleType,subCategory";
    //var query = "$filter=vehicleType/name eq '" +vType+"' and subCategory/name eq '" +context.binding.name+"'&$expand=vehicleType,subCategory,product,mainCustomer";

    var query = "$filter=vehicleType_name eq '" +vType+"' and category_ID eq " +context.binding.category.ID+" and subCategory_ID eq " +context.binding.ID+"";

    return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'GetProductsBySubCategoryAndVehicleType', [], query).then((result) => {
        var returnArray = [];
        for (var i = 0; i < result.length; i++) {
            var item = result.getItem(i);
            if (item.code) {
                returnArray.push({
                    "ReturnValue": item.code,
                    "DisplayValue": item.code
                });
            }
        }
        let ids = returnArray.map(o => o.ReturnValue)
        let filtered = returnArray.filter(({ ReturnValue }, index) => !ids.includes(ReturnValue, index + 1))
        return filtered;
    });
}