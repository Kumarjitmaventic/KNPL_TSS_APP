/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Query_Search_Defect_Category(context) {
    const searchString = context.searchString;
    if (searchString ==undefined ||searchString ===undefined || searchString.length==0){
        return "$expand=category&$filter=category/name eq '" +context.binding.name+"'";
    }
    else{
      
        let qob = context.dataQueryBuilder();
        qob.expand('category');
        var serachval = "contains(tolower(name),'" +searchString.toLowerCase()+"')";
        var catval= "category/name eq '" +context.binding.name+"'";
        qob.top(100);
        qob.skip(0);
        qob.filter(serachval).and(catval);
        return qob;
    }
    
}