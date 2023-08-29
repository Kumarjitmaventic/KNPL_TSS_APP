/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function UniqueTwoWheelProductCode(context) {
    var query="$expand=defectDetails&$orderby=code asc"
    return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'ProductsFor2Wheeler', [], query).then((result) => {
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