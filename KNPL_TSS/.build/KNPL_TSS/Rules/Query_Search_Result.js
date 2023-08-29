/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/

export default function Query_Search_Result(context) {
    const searchString = context.searchString;
    var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
    var vType = vehicleType.Type;
    var productId = context.binding.ID;
    var subCatId = context.binding.subCategory_ID;
    var CatId = context.binding.category_ID;
    var custName =context.binding.cust_name;
    //alert(searchString);
    if (searchString ==undefined ||searchString ===undefined || searchString.length==0) {
        return "$expand=mainCustomer,vehicleType,product,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" +vType+"' and product/ID eq " +productId+" and category/ID eq " +CatId+" and subCategory/ID eq " +subCatId+" and mainCustomer/name eq '" +custName+"' and IsActiveEntity eq true ";
        //return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory";
        //return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=mainCustomer/name eq '" +context.binding.defectDetails[0].mainCustomer.name+"'";

        //return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory";
    } else{
       let qob = context.dataQueryBuilder();
       qob.expand('dryingCondition','vehicleType','composition','electrostatic','atomization','exteriorInterior','crossLinkType','paintType','substrateMaterial','targetSubstrate','layer','JV','subCategory','category','mainCustomer','product','layer','targetSubstrate','substrateMaterial','paintType','crossLinkType','exteriorInterior','dryingCondition','atomization','electrostatic','composition','JV','category','subCategory');
       qob.top(100);
       qob.skip(0);

       const title = "contains(tolower(title), '" +searchString.toLowerCase()+"')";
       const productname = "contains(tolower(product/name), '" +searchString.toLowerCase()+"')";
       //const defectType = "contains(tolower(defectType/name), '" +searchString.toLowerCase()+"')";
       const register = "contains(tolower(createdBy), '" +searchString.toLowerCase()+"')";
       const problemdesc = "contains(tolower(problemDescription), '" +searchString.toLowerCase()+"')";
       const causeOfProblem = "contains(tolower(causeOfProblem), '" +searchString.toLowerCase()+"')";
       const countermeasureTaken = "contains(tolower(countermeasureTaken), '" +searchString.toLowerCase()+"')";
       const categoryName = "contains(tolower(category/name), '" +searchString.toLowerCase()+"')";
       const subcategoryName = "contains(tolower(subCategory/name), '" +searchString.toLowerCase()+"')";
       const jv = "contains(tolower(JV/name), '" +searchString.toLowerCase()+"')";
       const customerName = "contains(tolower(mainCustomer/name), '" +searchString.toLowerCase()+"')";
       const layer = "contains(tolower(layer/name), '" +searchString.toLowerCase()+"')";
       const targetSub = "contains(tolower(targetSubstrate/name), '" +searchString.toLowerCase()+"')";
       const substrate = "contains(tolower(substrateMaterial/name), '" +searchString.toLowerCase()+"')";
       const paintType = "contains(tolower(paintType/name), '" +searchString.toLowerCase()+"')";
       const custocrosslink = "contains(tolower(crossLinkType/name), '" +searchString.toLowerCase()+"')";
       const exterior = "contains(tolower(exteriorInterior/name), '" +searchString.toLowerCase()+"')";
       const application1 = "contains(tolower(atomization/name), '" +searchString.toLowerCase()+"')";
       const application2 = "contains(tolower(electrostatic/name), '" +searchString.toLowerCase()+"')";
       const application3 = "contains(tolower(composition/name), '" +searchString.toLowerCase()+"')";
       const dryingCondition = "contains(tolower(dryingCondition/name), '" +searchString.toLowerCase()+"')";

       var term1 = '('+" ";
       if(title !=undefined){
        term1 += title +" or ";
       }
       if(productname !=undefined){
        term1 += productname +" or ";
       }
    //    if(defectType !=undefined){
    //     term1 += defectType +" or ";
    //    }
    //    if(defectType !=undefined){
    //     term1 += defectType +" or ";
    //    }
       if(register !=undefined){
        term1 += register +" or ";
       }
       if(problemdesc !=undefined){
        term1 += problemdesc +" or ";
       }
       if(causeOfProblem !=undefined){
        term1 += causeOfProblem +" or ";
       }
       if(countermeasureTaken !=undefined){
        term1 += countermeasureTaken +" or ";
       }
       if(categoryName !=undefined){
        term1 += categoryName +" or ";
       }
       if(subcategoryName !=undefined){
        term1 += subcategoryName +" or ";
       }
       if(jv !=undefined){
        term1 += jv +" or ";
       }
       if(customerName !=undefined){
        term1 += customerName +" or ";
       }
       if(layer !=undefined){
        term1 += layer +" or ";
       }
       if(targetSub !=undefined){
        term1 += targetSub +" or ";
       }
       if(substrate !=undefined){
        term1 += substrate +" or ";
       }
       if(paintType !=undefined){
        term1 += paintType +" or ";
       }
       if(custocrosslink !=undefined){
        term1 += custocrosslink +" or ";
       }
       if(exterior !=undefined){
        term1 += exterior +" or ";
       }
       if(application1 !=undefined){
        term1 += application1 +" or ";
       }
       if(application2 !=undefined){
        term1 += application2 +" or ";
       }
       if(application3 !=undefined){
        term1 += application3 +" or ";
       }
       if(dryingCondition !=undefined){
        term1 += dryingCondition + ")";
       }

    
       //filter data
       const vehicleType = "vehicleType/name eq '" +vType+"' and product/ID eq " +productId+" and category/ID eq " +CatId+" and subCategory/ID eq " +subCatId+" and mainCustomer/name eq '" +custName+"' and IsActiveEntity eq true ";
    //    qob.filter(vehicleType).or(productname).or(defectType).or(register).or(problemdesc).or(causeOfTrouble).or(countermeasureTaken).or(categoryName).or(subcategoryName).or(jv)
    //    .or(customerName).or(layer).or(targetSub).or(substrate).or(paintType).or(custocrosslink).or(exterior).or(application1).or(application2).or(application3).or(dryingCondition);
       //const productvalId = product/ID eq " +productId+";
       //const subCatvalId = subCategory/ID eq " +subCatId+";
       //const serachFilter= qob.filterTerm.or(productname).or(defectType).or(register).or(problemdesc).or(causeOfTrouble).or(countermeasureTaken).or(categoryName).or(subcategoryName).or(jv).or(customerName).or(layer).or(targetSub).or(substrate).or(paintType).or(custocrosslink).or(exterior).or(application1).or(application2).or(application3).or(dryingCondition);
       //const datafilter = &$filter=vehicleType/name eq '" +vType+"' and product/ID eq " +productId+" and subCategory/ID eq " +subCatId+"";
       qob.filter(vehicleType).and(term1);
       //var filterQuery = "Status eq 'PENDING' & "+'PONumber eq '+ "'" +searchString+"'";
       //var filterQuery =  contains(defectType/name,searchString) || contains(product/name,searchString) || contains(defectDetails/causeOfTrouble,searchString);
       //qob.filter(qob);
       return qob;
    }
}
