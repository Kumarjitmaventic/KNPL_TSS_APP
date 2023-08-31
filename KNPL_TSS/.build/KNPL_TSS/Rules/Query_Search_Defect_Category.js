/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Query_Search_Defect_Category(context) {
    const searchString = context.searchString;
    if (searchString ==undefined ||searchString ===undefined || searchString.length==0){
        return "$filter=category_name eq '" +context.binding.name+"'";
    }
    else{
      
        // let qob = context.dataQueryBuilder();
        // qob.expand('category');
        // var serachval = "contains(tolower(name),'" +searchString.toLowerCase()+"')";
        // var catval= "category/name eq '" +context.binding.name+"'";
        // qob.top(100);
        // qob.skip(0);
        // qob.filter(serachval).and(catval);
        // return qob;

        let qob = context.dataQueryBuilder();

        var subCatName = "contains(tolower(name),'" +searchString.toLowerCase()+"')"
        var custName = "contains(tolower(customer_name),'" +searchString.toLowerCase()+"')";
        var productName = "contains(tolower(product_name),'" +searchString.toLowerCase()+"')";
        var jvName = "contains(tolower(jv),'" +searchString.toLowerCase()+"')";
        var ProblemDesc = "contains(tolower(problemDescription),'" +searchString.toLowerCase()+"')";
        var targetSubstrate = "contains(tolower(targetSubstrate),'" +searchString.toLowerCase()+"')";
        var substrateMaterial = "contains(tolower(substrateMaterial),'" +searchString.toLowerCase()+"')";

        var term1 = '('+" ";
       if(custName !=undefined){
        term1 += custName +" or ";
       }
       if(productName !=undefined){
        term1 += productName +" or ";
       }
       if(subCatName !=undefined){
        term1 += subCatName +" or ";
       }
       if(jvName !=undefined){
        term1 += jvName +" or ";
       }
       if(ProblemDesc !=undefined){
        term1 += ProblemDesc +" or ";
       }
       if(targetSubstrate !=undefined){
        term1 += targetSubstrate +" or ";
       }
       if(substrateMaterial !=undefined){
        term1 += substrateMaterial +")";
       }
        var filterval= "category_name eq '" +context.binding.name+"'";
        qob.top(100);
        qob.skip(0);
        qob.filter(filterval).and(term1);
        return qob;
    }
    
}