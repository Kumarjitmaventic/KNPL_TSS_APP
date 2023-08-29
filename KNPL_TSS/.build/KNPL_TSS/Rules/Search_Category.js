/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Search_Category(context) {
    const searchString = context.searchString;
    if (searchString ==undefined ||searchString ===undefined || searchString.length==0){
        return "$orderby=name asc";
    }
    else{
        console.log("In else category");
        var serachval = "contains(tolower(name),'" +searchString.toLowerCase()+"')";
        //const title = "contains(title, '" +searchString.toLowerCase()+"')";
        //return "$search='"+searchString+"'";
        let qob = context.dataQueryBuilder();
        qob.top(100);
        qob.skip(0);
        qob.filter(serachval);
        
        return qob;

    //    let qob = context.dataQueryBuilder();
    //    qob.top(100);
    //    qob.skip(0);
    //    qob.$search=searchString;
    //    return qob;
    //    //$search= "+searchString+";
       
    }
  
}