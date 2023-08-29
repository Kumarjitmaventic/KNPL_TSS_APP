/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function UniqueDefectType(context) {
      var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
     var vType = vehicleType.Type;
  
     var productId = context.binding.ID;
     var subCatId = context.binding.subCategory_ID;

     var query = "$expand=mainCustomer,vehicleType,product,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" +vType+"' and product/ID eq " +productId+" and subCategory/ID eq " +subCatId+"";
       // return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" +vType+"'";
    //var query="$expand=defectDetails&$orderby=code asc"
    //var query = "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" +vType+"'";
    //var query= "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=mainCustomer/name eq '" +context.binding.mainCustomer+"'";
    //var readLink = context.getPageProxy().binding['@odata.readLink'];
    return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'DefectDetails', [], query).then((result) => {
        var returnArray = [];
        for (var i = 0; i < result.length; i++) {
            var item = result.getItem(i);
            if (item.title) {
                returnArray.push({
                    "ReturnValue": item.title,
                    "DisplayValue": item.title
                });
            }
        }
        let ids = returnArray.map(o => o.ReturnValue)
        let filtered = returnArray.filter(({ ReturnValue }, index) => !ids.includes(ReturnValue, index + 1))
        return filtered;
    });
}