/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ProductList(context) {
       var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
        var vType = vehicleType.Type;
       const searchString = context.searchString;
        
    if (searchString ==undefined ||searchString ===undefined || searchString.length==0){
        
        //return "$expand=defectDetails($expand=mainCustomer),vehicleType($filter=name eq '" +vType+"'),subCategory($filter=name eq '" +context.binding.name+"')";
        //new chnages
        //return "$filter=vehicleType/name eq '" +vType+"' and subCategory/ID eq '" +context.binding.ID+"'&$expand=vehicleType,subCategory,product,mainCustomer";
        return "$filter=vehicleType_name eq '" +vType+"' and category_ID eq " +context.binding.category.ID+" and subCategory_ID eq " +context.binding.ID+"";
        //return "$expand=category&$filter=category/name eq '" +vType+"'";
    }
    else{
        let qob = context.dataQueryBuilder();
        //qob.expand('category');

        var custName = "contains(tolower(cust_name),'" +searchString.toLowerCase()+"')";
        var productName = "contains(tolower(name),'" +searchString.toLowerCase()+"')";
        var productCode = "contains(tolower(code),'" +searchString.toLowerCase()+"')";

        var term1 = '('+" ";
       if(custName !=undefined){
        term1 += custName +" or ";
       }
       if(productName !=undefined){
        term1 += productName +" or ";
       }
       if(productCode !=undefined){
        term1 += productCode + ")";
       }
        var filterval= "vehicleType_name eq '" +vType+"' and category_ID eq " +context.binding.category.ID+" and subCategory_ID eq " +context.binding.ID+"";
        qob.top(100);
        qob.skip(0);
        qob.filter(filterval).and(term1);
        return qob;
    }
    
}