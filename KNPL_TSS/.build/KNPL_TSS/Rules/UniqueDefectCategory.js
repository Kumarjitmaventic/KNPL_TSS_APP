/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function UniqueDefectCategory(context) {
    var query = "$orderby=name asc";
    return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'MstrCategories', [], query).then((result) => {
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