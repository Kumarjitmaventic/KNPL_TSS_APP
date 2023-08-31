(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/KNPL_TSS/i18n/i18n.properties":
/*!*********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/i18n/i18n.properties ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "label_no_data_found=No data found\nlabel_search=Search\n"

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/DataResponse.js":
/*!**********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/DataResponse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataResponse)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function DataResponse(context) {
  let actionResult = context.getActionResult("GetDefectResponse");
  if (actionResult && actionResult.data) {
    if (actionResult.data.d.Code == 200) {
      alert(actionResult.data.d.Message);
    } else if (actionResult.data.d.Code == 400) {
      alert(actionResult.error.message);
    }
  } else {
    alert(actionResult.error.message);
  }
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/OnWillUpdate.js":
/*!**********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/OnWillUpdate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  let dialogs = clientAPI.nativescript.uiDialogsModule;
  return dialogs.confirm("Update now?").then(result => {
    console.log("Update now? " + result);
    if (result === true) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/ProductInfo.js":
/*!*********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/ProductInfo.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductInfo)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function ProductInfo(context) {
  let userId = context.evaluateTargetPath('#Application/#ClientData/UserId');
  console.log(userId);
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/ProductList.js":
/*!*********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/ProductList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductList)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function ProductList(context) {
  var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
  var vType = vehicleType.Type;
  const searchString = context.searchString;
  if (searchString == undefined || searchString === undefined || searchString.length == 0) {
    //return "$expand=defectDetails($expand=mainCustomer),vehicleType($filter=name eq '" +vType+"'),subCategory($filter=name eq '" +context.binding.name+"')";
    //new chnages
    //return "$filter=vehicleType/name eq '" +vType+"' and subCategory/ID eq '" +context.binding.ID+"'&$expand=vehicleType,subCategory,product,mainCustomer";
    return "$filter=vehicleType_name eq '" + vType + "' and category_ID eq " + context.binding.category_ID + " and subCategory_ID eq " + context.binding.ID + "";
    //return "$expand=category&$filter=category/name eq '" +vType+"'";
  } else {
    let qob = context.dataQueryBuilder();
    //qob.expand('category');

    var custName = "contains(tolower(cust_name),'" + searchString.toLowerCase() + "')";
    var productName = "contains(tolower(name),'" + searchString.toLowerCase() + "')";
    var productCode = "contains(tolower(code),'" + searchString.toLowerCase() + "')";
    var jvName = "contains(tolower(JV_name),'" + searchString.toLowerCase() + "')";
    var ProblemDesc = "contains(tolower(problemDescription),'" + searchString.toLowerCase() + "')";
    var targetSubstrate = "contains(tolower(targetSubstrate),'" + searchString.toLowerCase() + "')";
    var substrateMaterial = "contains(tolower(substrateMaterial),'" + searchString.toLowerCase() + "')";
    var term1 = '(' + " ";
    if (custName != undefined) {
      term1 += custName + " or ";
    }
    if (productName != undefined) {
      term1 += productName + " or ";
    }
    if (jvName != undefined) {
      term1 += jvName + " or ";
    }
    if (ProblemDesc != undefined) {
      term1 += ProblemDesc + " or ";
    }
    if (targetSubstrate != undefined) {
      term1 += targetSubstrate + " or ";
    }
    if (substrateMaterial != undefined) {
      term1 += substrateMaterial + " or ";
    }
    if (productCode != undefined) {
      term1 += productCode + ")";
    }
    var filterval = "vehicleType_name eq '" + vType + "' and category_ID eq " + context.binding.category_ID + " and subCategory_ID eq " + context.binding.ID + "";
    qob.top(100);
    qob.skip(0);
    qob.filter(filterval).and(term1);
    return qob;
  }
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/Query_Search_Defect_Category.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/Query_Search_Defect_Category.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Query_Search_Defect_Category)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function Query_Search_Defect_Category(context) {
  const searchString = context.searchString;
  if (searchString == undefined || searchString === undefined || searchString.length == 0) {
    return "$filter=category_name eq '" + context.binding.name + "'";
  } else {
    // let qob = context.dataQueryBuilder();
    // qob.expand('category');
    // var serachval = "contains(tolower(name),'" +searchString.toLowerCase()+"')";
    // var catval= "category/name eq '" +context.binding.name+"'";
    // qob.top(100);
    // qob.skip(0);
    // qob.filter(serachval).and(catval);
    // return qob;

    let qob = context.dataQueryBuilder();
    var subCatName = "contains(tolower(name),'" + searchString.toLowerCase() + "')";
    var custName = "contains(tolower(customer_name),'" + searchString.toLowerCase() + "')";
    var productName = "contains(tolower(product_name),'" + searchString.toLowerCase() + "')";
    var jvName = "contains(tolower(jv),'" + searchString.toLowerCase() + "')";
    var ProblemDesc = "contains(tolower(problemDescription),'" + searchString.toLowerCase() + "')";
    var targetSubstrate = "contains(tolower(targetSubstrate),'" + searchString.toLowerCase() + "')";
    var substrateMaterial = "contains(tolower(substrateMaterial),'" + searchString.toLowerCase() + "')";
    var term1 = '(' + " ";
    if (custName != undefined) {
      term1 += custName + " or ";
    }
    if (productName != undefined) {
      term1 += productName + " or ";
    }
    if (subCatName != undefined) {
      term1 += subCatName + " or ";
    }
    if (jvName != undefined) {
      term1 += jvName + " or ";
    }
    if (ProblemDesc != undefined) {
      term1 += ProblemDesc + " or ";
    }
    if (targetSubstrate != undefined) {
      term1 += targetSubstrate + " or ";
    }
    if (substrateMaterial != undefined) {
      term1 += substrateMaterial + ")";
    }
    var filterval = "category_name eq '" + context.binding.name + "'";
    qob.top(100);
    qob.skip(0);
    qob.filter(filterval).and(term1);
    return qob;
  }
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/Query_Search_Result.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/Query_Search_Result.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Query_Search_Result)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/

function Query_Search_Result(context) {
  const searchString = context.searchString;
  var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
  var vType = vehicleType.Type;
  var productId = context.binding.ID;
  var subCatId = context.binding.subCategory_ID;
  var CatId = context.binding.category_ID;
  var custName = context.binding.cust_name;
  //alert(searchString);
  if (searchString == undefined || searchString === undefined || searchString.length == 0) {
    return "$expand=mainCustomer,vehicleType,product,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" + vType + "' and product/ID eq " + productId + " and category/ID eq " + CatId + " and subCategory/ID eq " + subCatId + " and mainCustomer/name eq '" + custName + "' and IsActiveEntity eq true ";
    //return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory";
    //return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=mainCustomer/name eq '" +context.binding.defectDetails[0].mainCustomer.name+"'";

    //return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory";
  } else {
    let qob = context.dataQueryBuilder();
    qob.expand('dryingCondition', 'vehicleType', 'composition', 'electrostatic', 'atomization', 'exteriorInterior', 'crossLinkType', 'paintType', 'substrateMaterial', 'targetSubstrate', 'layer', 'JV', 'subCategory', 'category', 'mainCustomer', 'product', 'layer', 'targetSubstrate', 'substrateMaterial', 'paintType', 'crossLinkType', 'exteriorInterior', 'dryingCondition', 'atomization', 'electrostatic', 'composition', 'JV', 'category', 'subCategory');
    qob.top(100);
    qob.skip(0);
    const title = "contains(tolower(title), '" + searchString.toLowerCase() + "')";
    const productname = "contains(tolower(product/name), '" + searchString.toLowerCase() + "')";
    //const defectType = "contains(tolower(defectType/name), '" +searchString.toLowerCase()+"')";
    const register = "contains(tolower(createdBy), '" + searchString.toLowerCase() + "')";
    const problemdesc = "contains(tolower(problemDescription), '" + searchString.toLowerCase() + "')";
    const causeOfProblem = "contains(tolower(causeOfProblem), '" + searchString.toLowerCase() + "')";
    const countermeasureTaken = "contains(tolower(countermeasureTaken), '" + searchString.toLowerCase() + "')";
    const categoryName = "contains(tolower(category/name), '" + searchString.toLowerCase() + "')";
    const subcategoryName = "contains(tolower(subCategory/name), '" + searchString.toLowerCase() + "')";
    const jv = "contains(tolower(JV/name), '" + searchString.toLowerCase() + "')";
    const customerName = "contains(tolower(mainCustomer/name), '" + searchString.toLowerCase() + "')";
    const layer = "contains(tolower(layer/name), '" + searchString.toLowerCase() + "')";
    const targetSub = "contains(tolower(targetSubstrate/name), '" + searchString.toLowerCase() + "')";
    const substrate = "contains(tolower(substrateMaterial/name), '" + searchString.toLowerCase() + "')";
    const paintType = "contains(tolower(paintType/name), '" + searchString.toLowerCase() + "')";
    const custocrosslink = "contains(tolower(crossLinkType/name), '" + searchString.toLowerCase() + "')";
    const exterior = "contains(tolower(exteriorInterior/name), '" + searchString.toLowerCase() + "')";
    const application1 = "contains(tolower(atomization/name), '" + searchString.toLowerCase() + "')";
    const application2 = "contains(tolower(electrostatic/name), '" + searchString.toLowerCase() + "')";
    const application3 = "contains(tolower(composition/name), '" + searchString.toLowerCase() + "')";
    const dryingCondition = "contains(tolower(dryingCondition/name), '" + searchString.toLowerCase() + "')";
    var term1 = '(' + " ";
    if (title != undefined) {
      term1 += title + " or ";
    }
    if (productname != undefined) {
      term1 += productname + " or ";
    }
    //    if(defectType !=undefined){
    //     term1 += defectType +" or ";
    //    }
    //    if(defectType !=undefined){
    //     term1 += defectType +" or ";
    //    }
    if (register != undefined) {
      term1 += register + " or ";
    }
    if (problemdesc != undefined) {
      term1 += problemdesc + " or ";
    }
    if (causeOfProblem != undefined) {
      term1 += causeOfProblem + " or ";
    }
    if (countermeasureTaken != undefined) {
      term1 += countermeasureTaken + " or ";
    }
    if (categoryName != undefined) {
      term1 += categoryName + " or ";
    }
    if (subcategoryName != undefined) {
      term1 += subcategoryName + " or ";
    }
    if (jv != undefined) {
      term1 += jv + " or ";
    }
    if (customerName != undefined) {
      term1 += customerName + " or ";
    }
    if (layer != undefined) {
      term1 += layer + " or ";
    }
    if (targetSub != undefined) {
      term1 += targetSub + " or ";
    }
    if (substrate != undefined) {
      term1 += substrate + " or ";
    }
    if (paintType != undefined) {
      term1 += paintType + " or ";
    }
    if (custocrosslink != undefined) {
      term1 += custocrosslink + " or ";
    }
    if (exterior != undefined) {
      term1 += exterior + " or ";
    }
    if (application1 != undefined) {
      term1 += application1 + " or ";
    }
    if (application2 != undefined) {
      term1 += application2 + " or ";
    }
    if (application3 != undefined) {
      term1 += application3 + " or ";
    }
    if (dryingCondition != undefined) {
      term1 += dryingCondition + ")";
    }

    //filter data
    const vehicleType = "vehicleType/name eq '" + vType + "' and product/ID eq " + productId + " and category/ID eq " + CatId + " and subCategory/ID eq " + subCatId + " and mainCustomer/name eq '" + custName + "' and IsActiveEntity eq true ";
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

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/Search_Category.js":
/*!*************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/Search_Category.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search_Category)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function Search_Category(context) {
  const searchString = context.searchString;
  if (searchString == undefined || searchString === undefined || searchString.length == 0) {
    return "$orderby=name asc";
  } else {
    console.log("In else category");
    var serachval = "contains(tolower(name),'" + searchString.toLowerCase() + "')";
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

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/Search_Sub_Category_.js":
/*!******************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/Search_Sub_Category_.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search_Sub_Category)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function Search_Sub_Category(context) {
  const searchString = context.searchString;
  if (searchString == undefined || searchString === undefined || searchString.length == 0) {
    return "$orderby=name asc";
  } else {
    console.log("In else category");
    var serachval = "contains(tolower(name),'" + searchString.toLowerCase() + "')";
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

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueDefectCategory.js":
/*!******************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueDefectCategory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueDefectCategory)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueDefectCategory(context) {
  var query = "$orderby=name asc";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'MstrCategories', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueDefectSubCategory.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueDefectSubCategory.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueDefectSubCategory)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueDefectSubCategory(context) {
  var query = "$expand=category&$filter=category/name eq '" + context.binding.name + "'";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'MstrSubCategories', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueDefectType.js":
/*!**************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueDefectType.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueDefectType)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueDefectType(context) {
  var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
  var vType = vehicleType.Type;
  var productId = context.binding.ID;
  var subCatId = context.binding.subCategory_ID;
  var query = "$expand=mainCustomer,vehicleType,product,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" + vType + "' and product/ID eq " + productId + " and subCategory/ID eq " + subCatId + "";
  // return "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" +vType+"'";
  //var query="$expand=defectDetails&$orderby=code asc"
  //var query = "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=vehicleType/name eq '" +vType+"'";
  //var query= "$expand=mainCustomer,vehicleType,product,defectType,layer,targetSubstrate,substrateMaterial,paintType,crossLinkType,exteriorInterior,dryingCondition,atomization,electrostatic,composition,JV,category,subCategory&$filter=mainCustomer/name eq '" +context.binding.mainCustomer+"'";
  //var readLink = context.getPageProxy().binding['@odata.readLink'];
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'DefectDetails', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueFourWheelProductCode.js":
/*!************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueFourWheelProductCode.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueFourWheelProductCode)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueFourWheelProductCode(context) {
  var query = "$expand=defectDetails&$orderby=code asc";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'ProductsFor4Wheeler', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueFourWheelProductName.js":
/*!************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueFourWheelProductName.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueFourWheelProductName)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueFourWheelProductName(context) {
  var query = "$expand=defectDetails&$orderby=code asc";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'ProductsFor4Wheeler', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueProductCode.js":
/*!***************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueProductCode.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueProductCode)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueProductCode(context) {
  var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
  var vType = vehicleType.Type;
  //var query="$expand=defectDetails&$orderby=code asc"
  //var query="$filter=vehicleType/name eq '" +vType+"' and subCategory/name eq '" +context.binding.name+"'&$expand=vehicleType,subCategory";
  //var query = "$filter=vehicleType/name eq '" +vType+"' and subCategory/name eq '" +context.binding.name+"'&$expand=vehicleType,subCategory,product,mainCustomer";

  var query = "$filter=vehicleType_name eq '" + vType + "' and category_ID eq " + context.binding.category.ID + " and subCategory_ID eq " + context.binding.ID + "";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'GetProductsBySubCategoryAndVehicleType', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueProductName.js":
/*!***************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueProductName.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueProductName)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueProductName(context) {
  var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
  var vType = vehicleType.Type;
  //new chnages
  var query = "$filter=vehicleType_name eq '" + vType + "' and category_ID eq " + context.binding.category.ID + " and subCategory_ID eq " + context.binding.ID + "";
  //var query = "$filter=vehicleType/name eq '" +vType+"' and subCategory/name eq '" +context.binding.name+"'&$expand=vehicleType,subCategory,product,mainCustomer";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'GetProductsBySubCategoryAndVehicleType', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueTwoWheelProductCode.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueTwoWheelProductCode.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueTwoWheelProductCode)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueTwoWheelProductCode(context) {
  var query = "$expand=defectDetails&$orderby=code asc";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'ProductsFor2Wheeler', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniqueTwoWheelProductName.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniqueTwoWheelProductName.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniqueTwoWheelProductName)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniqueTwoWheelProductName(context) {
  var query = "$expand=defectDetails&$orderby=code asc";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'ProductsFor2Wheeler', [], query).then(result => {
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
    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UniquecustomerName.js":
/*!****************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UniquecustomerName.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniquecustomerName)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UniquecustomerName(context) {
  //return context.binding.defectDetails[0].mainCustomer.name;
  var query = "$expand=defectDetails($expand=mainCustomer)";
  return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'Products', [], query).then(result => {
    var returnArray = [];
    for (var i = 0; i < result.length; i++) {
      var item = result.getItem(i);
      if (item.defectDetails[0].mainCustomer.name) {
        returnArray.push({
          "ReturnValue": item.defectDetails[0].mainCustomer.name,
          "DisplayValue": item.defectDetails[0].mainCustomer.name
        });
      }
      //return item.defectDetails[i].mainCustomer.name
    }

    let ids = returnArray.map(o => o.ReturnValue);
    let filtered = returnArray.filter(({
      ReturnValue
    }, index) => !ids.includes(ReturnValue, index + 1));
    return filtered;
  });
  //return '$top=50&$skip=0&$expand=defectDetails($expand=mainCustomer/name)'
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/UserInfo.js":
/*!******************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/UserInfo.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function UserInfo(context) {
  let userId = context.evaluateTargetPath('#Application/#ClientData/UserId');
  console.log(userId);
  return '$expand=userType&$filter=email eq ' + "'" + userId + "'";
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/VehicleType.js":
/*!*********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/VehicleType.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleType)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function vehicleType(context) {
  var vehicleType = context.evaluateTargetPath("#Page:Main/#ClientData");
  var vType = vehicleType.Type;
  return vType;
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/VehicleType_FourWheel.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/VehicleType_FourWheel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleType_FourWheel)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function vehicleType_FourWheel(context) {
  let pageProxy = context.getPageProxy();
  let pageClientData = pageProxy.getClientData();
  pageClientData.Type = "4 Wheeler";
  return context.executeAction("/KNPL_TSS/Actions/ProductDefectCategoryNavigation.action");
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/VehicleType_TwoWheel.js":
/*!******************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/VehicleType_TwoWheel.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleType_TwoWheel)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function vehicleType_TwoWheel(context) {
  let pageProxy = context.getPageProxy();
  let pageClientData = pageProxy.getClientData();
  pageClientData.Type = "2 Wheeler";
  return context.executeAction("/KNPL_TSS/Actions/ProductDefectCategoryNavigation.action");
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Rules/customerName.js":
/*!**********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Rules/customerName.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ customerName)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function customerName(context) {
  return context.binding.defectDetails[0].mainCustomer.name;
  // var query="$expand=defectDetails($expand=mainCustomer)"
  // return context.read('/KNPL_TSS/Services/com_knpl_tss.service', 'Products',[],query).then((result) => {
  //     var returnArray = [];
  //     for (var i = 0; i < result.length; i++){
  //         var item = result.getItem(i);
  //         // if(item.defectDetails[0].mainCustomer.name){
  //         //     returnArray.push({
  //         //         "ReturnValue" : item.defectDetails[0].mainCustomer.name,
  //         //         "DisplayValue"  : item.defectDetails[0].mainCustomer.name
  //         //     });
  //         // }
  //         return item.defectDetails[i].mainCustomer.name
  //      }

  //     // let ids = returnArray.map(o => o.ReturnValue)
  //     // let filtered = returnArray.filter(({ReturnValue}, index) => !ids.includes(ReturnValue, index + 1))
  //     // return filtered;
  // }); 
  //return '$top=50&$skip=0&$expand=defectDetails($expand=mainCustomer/name)'
}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Styles/Styles.css":
/*!******************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Styles/Styles.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.themeColor {
  background-color: #e7194f;
}
/* This style applies to all the ActionBars in the application*/
ui5-mdk-bar.actionbar {
  color: white;
  background-color: #e7194f;
}
/* This style applies to all the ToolBars in the application */
/*ui5-mdk-overflow-toolbar.toolbar {
    color: white;
    background-color:  #e7194f;
}*/
/* LogoutToolbarItem is Logout ui5-mdk-overflow-toolbar.toolbar item in Main.div.MDKPage */
#LogoutToolbarItem {
  color: #e7194f;
}
/* UploadToolbarItem is  Sync ui5-mdk-overflow-toolbar.toolbar item in Main.div.MDKPage */
#UploadToolbarItem {
  color: #e7194f;
}
/* Styling of the ui5-mdk-overflow-toolbar.toolbar on the FilterPage.div.MDKPage */
#FilterPage_ToolBar {
  color: #e7194f;
  font-family: "system";
  font-size: 16;
  /* bartintcolor is non-translucent */
  bartintcolor: #e7194f;
  border-top-color: #e7194f;
}
a,
.link {
  color: #e7194f;
}
/* Object Header - Background */
.objectHeaderBackground {
  background-color: #e7194f;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/KNPL_TSS/Styles/Styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;AACA,+DAA+D;AAC/D;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA,8DAA8D;AAC9D;;;EAGE;AACF,0FAA0F;AAC1F;EACE,cAAc;AAChB;AACA,yFAAyF;AACzF;EACE,cAAc;AAChB;AACA,kFAAkF;AAClF;EACE,cAAc;EACd,qBAAqB;EACrB,aAAa;EACb,oCAAoC;EACpC,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;;EAEE,cAAc;AAChB;AACA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B","sourcesContent":[".themeColor {\n  background-color: #e7194f;\n}\n/* This style applies to all the ActionBars in the application*/\nui5-mdk-bar.actionbar {\n  color: white;\n  background-color: #e7194f;\n}\n/* This style applies to all the ToolBars in the application */\n/*ui5-mdk-overflow-toolbar.toolbar {\n    color: white;\n    background-color:  #e7194f;\n}*/\n/* LogoutToolbarItem is Logout ui5-mdk-overflow-toolbar.toolbar item in Main.div.MDKPage */\n#LogoutToolbarItem {\n  color: #e7194f;\n}\n/* UploadToolbarItem is  Sync ui5-mdk-overflow-toolbar.toolbar item in Main.div.MDKPage */\n#UploadToolbarItem {\n  color: #e7194f;\n}\n/* Styling of the ui5-mdk-overflow-toolbar.toolbar on the FilterPage.div.MDKPage */\n#FilterPage_ToolBar {\n  color: #e7194f;\n  font-family: \"system\";\n  font-size: 16;\n  /* bartintcolor is non-translucent */\n  bartintcolor: #e7194f;\n  border-top-color: #e7194f;\n}\na,\n.link {\n  color: #e7194f;\n}\n/* Object Header - Background */\n.objectHeaderBackground {\n  background-color: #e7194f;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/KNPL_TSS/Styles/Styles.less":
/*!*******************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Styles/Styles.less ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkTheme:                   #e7194f;
.themeColor {
    background-color: @mdkTheme;
  }
/* This style applies to all the ActionBars in the application*/
ActionBar {
    color: white;
    background-color: #e7194f;
}

/* This style applies to all the ToolBars in the application */
/*ToolBar {
    color: white;
    background-color:  #e7194f;
}*/

/* LogoutToolbarItem is Logout toolbar item in Main.page */
#LogoutToolbarItem  {
    color: #e7194f;
}

/* UploadToolbarItem is  Sync toolbar item in Main.page */
#UploadToolbarItem  {
    color: #e7194f;
}

/* Styling of the toolbar on the FilterPage.page */
#FilterPage_ToolBar  {
   color: #e7194f;
   font-family: "system";
   font-size: 16;

/* bartintcolor is non-translucent */
   bartintcolor: #e7194f;
   border-top-color: #e7194f;
}
a,
.link {
  color: #e7194f;
}
/* Object Header - Background */

.objectHeaderBackground {

    background-color:#e7194f;
    
    }`, "",{"version":3,"sources":["webpack://./build.definitions/KNPL_TSS/Styles/Styles.less"],"names":[],"mappings":"AAAA,oCAAoC;AACpC;IACI,2BAA2B;EAC7B;AACF,+DAA+D;AAC/D;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA,8DAA8D;AAC9D;;;EAGE;;AAEF,0DAA0D;AAC1D;IACI,cAAc;AAClB;;AAEA,yDAAyD;AACzD;IACI,cAAc;AAClB;;AAEA,kDAAkD;AAClD;GACG,cAAc;GACd,qBAAqB;GACrB,aAAa;;AAEhB,oCAAoC;GACjC,qBAAqB;GACrB,yBAAyB;AAC5B;AACA;;EAEE,cAAc;AAChB;AACA,+BAA+B;;AAE/B;;IAEI,wBAAwB;;IAExB","sourcesContent":["@mdkTheme:                   #e7194f;\n.themeColor {\n    background-color: @mdkTheme;\n  }\n/* This style applies to all the ActionBars in the application*/\nActionBar {\n    color: white;\n    background-color: #e7194f;\n}\n\n/* This style applies to all the ToolBars in the application */\n/*ToolBar {\n    color: white;\n    background-color:  #e7194f;\n}*/\n\n/* LogoutToolbarItem is Logout toolbar item in Main.page */\n#LogoutToolbarItem  {\n    color: #e7194f;\n}\n\n/* UploadToolbarItem is  Sync toolbar item in Main.page */\n#UploadToolbarItem  {\n    color: #e7194f;\n}\n\n/* Styling of the toolbar on the FilterPage.page */\n#FilterPage_ToolBar  {\n   color: #e7194f;\n   font-family: \"system\";\n   font-size: 16;\n\n/* bartintcolor is non-translucent */\n   bartintcolor: #e7194f;\n   border-top-color: #e7194f;\n}\na,\n.link {\n  color: #e7194f;\n}\n/* Object Header - Background */\n\n.objectHeaderBackground {\n\n    background-color:#e7194f;\n    \n    }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/KNPL_TSS/Styles/Styles.nss":
/*!******************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Styles/Styles.nss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkTheme: #e7194f;
themeColor {
	background-color: #e7194f;
}
ActionBar {
	font-color: white;
	background-color: #e7194f;
}
objectHeaderBackground {
	background-color: #e7194f;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/KNPL_TSS/Styles/Styles.nss"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;CACC,yBAAyB;AAC1B;AACA;CACC,iBAAiB;CACjB,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B","sourcesContent":["@mdkTheme: #e7194f;\nthemeColor {\n\tbackground-color: #e7194f;\n}\nActionBar {\n\tfont-color: white;\n\tbackground-color: #e7194f;\n}\nobjectHeaderBackground {\n\tbackground-color: #e7194f;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!******************************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/FourWheelProductListFilter.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/FourWheelProductListFilter.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"name","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Product Name","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"name","Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"PickerItems":"/KNPL_TSS/Rules/UniqueFourWheelProductName.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"code","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Product Code","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"code","Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"PickerItems":"/KNPL_TSS/Rules/UniqueFourWheelProductCode.js"}],"Caption":"Filter By","Visible":true}]}],"_Type":"Page","_Name":"FourWheelProductListFilter","Caption":"Filter","ActionBar":{"Items":[{"Text":"Cancel","_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Cancel.action"},{"Text":"Done","_Name":"ActionBarItem1","Caption":"","SystemItem":"Done","Position":"right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"},"Result":["#Page:FourWheelProductListFilter/#Control:name/#FilterValue","#Page:FourWheelProductListFilter/#Control:code/#FilterValue"]}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/Main.page":
/*!****************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/Main.page ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Header":{"_Name":"SectionHeader1","UseTopPadding":true,"Caption":"Vehicle Type"},"Visible":true,"EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"Styles":{"Value":"homeval"},"Value":">","_Name":"SectionSimplePropertyCell4","KeyName":"4 Wheeler","AccessoryType":"none","Visible":true,"OnPress":"/KNPL_TSS/Rules/VehicleType_FourWheel.js"}},{"SimplePropertyCell":{"Styles":{"Value":"homeval"},"Value":">","_Name":"SectionSimplePropertyCell5","KeyName":"2 Wheeler","AccessoryType":"none","Visible":true,"OnPress":"/KNPL_TSS/Rules/VehicleType_TwoWheel.js"}}],"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"Main","Caption":"Home","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/User_Profile.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductBasicDetails.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductBasicDetails.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"Value":"{title}","_Name":"KeyValue7","KeyName":"Title:","Visible":true},{"Value":"{product/name}","_Name":"KeyValue0","KeyName":"Product Name:","Visible":true},{"Value":"{vehicleType/name}","_Name":"KeyValue6","KeyName":"Vehicle Type:","Visible":true},{"Value":"{createdBy}","_Name":"KeyValue1","KeyName":"Registerer:","Visible":true},{"Value":"{problemDescription}","_Name":"KeyValue3","KeyName":"Problem Description:","Visible":true},{"Value":"{causeOfProblem}","_Name":"KeyValue4","KeyName":"Cause Of Trouble:","Visible":true},{"Value":"{countermeasureTaken}","_Name":"KeyValue5","KeyName":"Counter Measures Taken:","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Header":{"_Name":"SectionHeader1","UseTopPadding":true,"Caption":"Basic Details"},"Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"},"Layout":{"NumberOfColumns":1}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductBasicDetails","Caption":"ProductBasicDetails"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectCategory.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectCategory.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":true,"Caption":"Defect Category"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss.service","EntitySet":"MstrCategories","QueryOptions":"/KNPL_TSS/Rules/Search_Category.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{name}","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"none","OnPress":"/KNPL_TSS/Actions/ProductDefectSubCategoryNavigation.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductDefectCategory","Caption":"/KNPL_TSS/Rules/VehicleType.js","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","Icon":"sap-icon://filter","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/ProductDefectCategoryFilterNavigation.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectCategoryFilter.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectCategoryFilter.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"name","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Defect Category","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"name","Search":{"Enabled":false},"PickerItems":"/KNPL_TSS/Rules/UniqueDefectCategory.js"}],"Caption":"Filter By","Visible":true}]}],"_Type":"Page","_Name":"ProductDefectCategoryFilter","Caption":"Filter","ActionBar":{"Items":[{"Text":"Cancel","_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Cancel.action"},{"Text":"Done","_Name":"ActionBarItem1","Caption":"","SystemItem":"Done","Position":"right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"},"Result":["#Page:ProductDefectCategoryFilter/#Control:name/#FilterValue"]}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectDetails.page":
/*!********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectDetails.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"Value":"{defectdetails/category/name}","_Name":"KeyValue1","KeyName":"Category:","Visible":true},{"Value":"{defectdetails/subCategory/name}","_Name":"KeyValue2","KeyName":"Sub Category:","Visible":true},{"Value":"{defectdetails/JV/name}","_Name":"KeyValue3","KeyName":"JV:","Visible":true},{"Value":"{defectdetails/mainCustomer/name}","_Name":"KeyValue4","KeyName":"Customer:","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Header":{"_Name":"SectionHeader1","UseTopPadding":true,"Caption":"Defect Details"},"Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"},"Layout":{"NumberOfColumns":1}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductDefectDetails","Caption":"ProductDefectDetails"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectDetailsTab.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectDetailsTab.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","ObjectHeader":{"HeadlineText":"{title}","Styles":{"ObjectHeader":"objectHeaderBackground"}},"Visible":true}]},{"_Type":"Control.Type.Tabs","_Name":"Tabs0","Items":[{"_Type":"Control.Type.TabItem","Caption":"Basic Details","PageToOpen":"/KNPL_TSS/Pages/ProductBasicDetails.page","_Name":"TabItem0"},{"_Type":"Control.Type.TabItem","Caption":"Defect Details","PageToOpen":"/KNPL_TSS/Pages/ProductDefectDetails.page","_Name":"TabItem1"},{"_Type":"Control.Type.TabItem","Caption":"Paint Details","PageToOpen":"/KNPL_TSS/Pages/ProductDefectPaintDetails.page","_Name":"TabItem2"}],"Position":"Top"}],"_Type":"Page","_Name":"ProductDefectDetails","Caption":"{product/name}"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectHistory.page":
/*!********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectHistory.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"Value":"{name}","_Name":"KeyValue0","KeyName":"Main Customer:","Visible":true},{"Value":"{name}","_Name":"KeyValue1","KeyName":"Product:","Visible":true},{"Value":"{name}","_Name":"KeyValue2","KeyName":"Issued By:","Visible":true},{"Value":"{name}","_Name":"KeyValue3","KeyName":"Occurance Date","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss.service","EntitySet":"Products"},"_Name":"SectionKeyValue0","Header":{"_Name":"SectionHeader1","UseTopPadding":true,"Caption":"Defect History"},"Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"},"Layout":{"NumberOfColumns":1}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductDefectHistory","Caption":"ProductDefectHistory"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectPaintDetails.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectPaintDetails.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"Value":"{paintDetail/layer/name}","_Name":"KeyValue0","KeyName":"Layer:","Visible":true},{"Value":"{paintDetail/targetSubstrate/name}","_Name":"KeyValue1","KeyName":"Target Substrate:","Visible":true},{"Value":"{paintDetail/substrateMaterial/name}","_Name":"KeyValue2","KeyName":"Substrate Material:","Visible":true},{"Value":"{paintDetail/paintType/name}","_Name":"KeyValue3","KeyName":"Paint Type:","Visible":true},{"Value":"{paintDetail/crossLinkType/name}","_Name":"KeyValue4","KeyName":"Crosslink Type:","Visible":true},{"Value":"{paintDetail/exteriorInterior/name}","_Name":"KeyValue5","KeyName":"Exterior/Interior:","Visible":true},{"Value":"{paintDetail/atomization/name}","_Name":"KeyValue6","KeyName":"Application 1:","Visible":true},{"Value":"{paintDetail/electrostatic/name}","_Name":"KeyValue7","KeyName":"Application 2:","Visible":true},{"Value":"{paintDetail/composition/name}","_Name":"KeyValue8","KeyName":"Application 3:","Visible":true},{"Value":"{paintDetail/dryingCondition/name}","_Name":"KeyValue9","KeyName":"Drying Condition:","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Header":{"_Name":"SectionHeader1","UseTopPadding":true,"Caption":"Paint Details"},"Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"},"Layout":{"NumberOfColumns":1}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductDefectPaintDetails","Caption":"ProductDefectPaintDetails"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectSubCategory.page":
/*!************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectSubCategory.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"none","UseTopPadding":true,"Caption":"Defect Sub Category"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss.service","EntitySet":"DefectDetailsListUnderSubCategory","QueryOptions":"/KNPL_TSS/Rules/Query_Search_Defect_Category.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"$(L,'label_no_data_found')","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{name}","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"none","OnPress":"/KNPL_TSS/Actions/ProductListNavigation.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductDefectSubCategory","Caption":"{name}","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","Icon":"sap-icon://filter","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/ProductDefectSubCategoryFilterNavigation.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectSubCategoryFilter.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectSubCategoryFilter.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"name","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Defect Sub Category","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"name","Search":{"Enabled":false},"PickerItems":"/KNPL_TSS/Rules/UniqueDefectSubCategory.js"}],"Caption":"Filter By","Visible":true}]}],"_Type":"Page","_Name":"ProductDefectSubCategoryFilter","Caption":"Filter","ActionBar":{"Items":[{"Text":"Cancel","_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Cancel.action"},{"Text":"Done","_Name":"ActionBarItem1","Caption":"","SystemItem":"Done","Position":"right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"},"Result":["#Page:ProductDefectSubCategoryFilter/#Control:name/#FilterValue"]}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductDefectTypes.page":
/*!******************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductDefectTypes.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":true,"Caption":"Defect Title"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss.service","EntitySet":"DefectDetails","QueryOptions":"/KNPL_TSS/Rules/Query_Search_Result.js"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{title}","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"none","OnPress":"/KNPL_TSS/Actions/ProductDefectDetails_Nav.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductDefectTypes","Caption":"{product/name}","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","Icon":"sap-icon://filter","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/ProductListMasterFilterPage.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductList.page":
/*!***********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductList.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"none","UseTopPadding":true,"Caption":"Product List"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss.service","EntitySet":"GetProductsBySubCategoryAndVehicleTypeCopy","QueryOptions":"/KNPL_TSS/Rules/ProductList.js","ServerSidePaging":true},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"$(L,'label_no_data_found')","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{cust_name}","Subhead":"{name}","Footnote":"{code}","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"none","OnPress":"/KNPL_TSS/Actions/ProductDefectTypes.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":150},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"ProductList","Caption":"{name}","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","Icon":"sap-icon://filter","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/ProductListFilterNavigation.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductListFilter.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductListFilter.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"name","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Product Name","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"name","Search":{"Enabled":false,"Placeholder":"$(L,'label_search')"},"PickerItems":"/KNPL_TSS/Rules/UniqueProductName.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"code","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Product Code","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"code","Search":{"Enabled":false,"Placeholder":"$(L,'label_search')"},"PickerItems":"/KNPL_TSS/Rules/UniqueProductCode.js"}],"Caption":"Filter By","Visible":true}]}],"_Type":"Page","_Name":"ProductListFilter","Caption":"Filter","ActionBar":{"Items":[{"Text":"Cancel","_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Cancel.action"},{"Text":"Done","_Name":"ActionBarItem1","Caption":"","SystemItem":"Done","Position":"right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"},"Result":["#Page:ProductListFilter/#Control:name/#FilterValue","#Page:ProductListFilter/#Control:code/#FilterValue"]}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/ProductListMasterFilter.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/ProductListMasterFilter.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"name","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Defect Title","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"title","Search":{"Enabled":false},"PickerItems":"/KNPL_TSS/Rules/UniqueDefectType.js"}],"Caption":"Filter By","Visible":true}]}],"_Type":"Page","_Name":"ProductListMasterFilter","Caption":"Filter","ActionBar":{"Items":[{"Text":"Cancel","_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Cancel.action"},{"Text":"Done","_Name":"ActionBarItem1","Caption":"","SystemItem":"Done","Position":"right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"},"Result":["#Page:ProductListMasterFilter/#Control:name/#FilterValue"]}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/TwoWheelProductListFilter.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/TwoWheelProductListFilter.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"name","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Product Name","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"name","Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"PickerItems":"/KNPL_TSS/Rules/UniqueTwoWheelProductName.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"code","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Product Code","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":true,"FilterProperty":"code","Search":{"Enabled":true,"Placeholder":"$(L,'label_search')"},"PickerItems":"/KNPL_TSS/Rules/UniqueTwoWheelProductCode.js"}],"Caption":"Filter By","Visible":true}]}],"_Type":"Page","_Name":"TwoWheelProductListFilter","Caption":"Filter","ActionBar":{"Items":[{"Text":"Cancel","_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Cancel.action"},{"Text":"Done","_Name":"ActionBarItem1","Caption":"","SystemItem":"Done","Position":"right","IsIconCircular":false,"Visible":true,"OnPress":"/KNPL_TSS/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"},"Result":["#Page:TwoWheelProductListFilter/#Control:name/#FilterValue","#Page:TwoWheelProductListFilter/#Control:code/#FilterValue"]}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Pages/User_Profile.page":
/*!************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Pages/User_Profile.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss_User.service","EntitySet":"Users"},"_Name":"SectionedTable0","Sections":[{"ProfileHeader":{"DetailImageIsCircular":true,"Headline":"{name}","Subheadline":"{userType/name}","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss_User.service","EntitySet":"Users","QueryOptions":"/KNPL_TSS/Rules/UserInfo.js"},"Styles":{"BackgroundColor":"objectHeaderBackground"}},"_Type":"Section.Type.ProfileHeader","_Name":"SectionProfileHeader0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"}},{"KeyAndValues":[{"Value":"{email}","DataSubscriptions":["Customers"],"_Name":"KeyValue1","KeyName":"Email ID:","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":{"Service":"/KNPL_TSS/Services/com_knpl_tss_User.service","EntitySet":"Users","QueryOptions":"/KNPL_TSS/Rules/UserInfo.js"},"_Name":"SectionKeyValue0","Header":{"_Name":"SectionHeader0","UseTopPadding":true,"Caption":"Basic Details"},"Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"$(L,'label_no_data_found')"},"Layout":{"NumberOfColumns":1}}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"User_Profile","Caption":"My Profile","ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"LogoutToolbarItem","Caption":"Logout","Enabled":true,"Visible":true,"Clickable":true,"OnPress":"/KNPL_TSS/Actions/Logout.action"}]}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"KNPL_TSS","Version":"/KNPL_TSS/Globals/AppDefinition_Version.global","MainPage":"/KNPL_TSS/Pages/Main.page","OnLaunch":["/KNPL_TSS/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/KNPL_TSS/Rules/OnWillUpdate.js","OnDidUpdate":"/KNPL_TSS/Actions/Service/InitializeOnline.action","Styles":"/KNPL_TSS/Styles/Styles.less","Localization":"/KNPL_TSS/i18n/i18n.properties","_SchemaVersion":"6.1","StyleSheets":{"Styles":{"css":"/KNPL_TSS/Styles/Styles.css","ios":"/KNPL_TSS/Styles/Styles.nss","android":"/KNPL_TSS/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ClosePage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ClosePage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/CreateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/CreateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/KNPL_TSS/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/DeleteEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/DeleteEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/KNPL_TSS/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/Logout.action":
/*!**********************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/Logout.action ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductDefectCategoryFilterNavigation.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductDefectCategoryFilterNavigation.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Filter","Filterable":"#Page:ProductDefectCategory/#Control:SectionedTable0","PageToOpen":"/KNPL_TSS/Pages/ProductDefectCategoryFilter.page","ModalPageFullscreen":false}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductDefectCategoryNavigation.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductDefectCategoryNavigation.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KNPL_TSS/Pages/ProductDefectCategory.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductDefectDetails_Nav.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductDefectDetails_Nav.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KNPL_TSS/Pages/ProductDefectDetailsTab.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductDefectSubCategoryFilterNavigation.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductDefectSubCategoryFilterNavigation.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Filter","Filterable":"#Page:ProductDefectSubCategory/#Control:SectionedTable0","PageToOpen":"/KNPL_TSS/Pages/ProductDefectSubCategoryFilter.page","ModalPageFullscreen":false}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductDefectSubCategoryNavigation.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductDefectSubCategoryNavigation.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KNPL_TSS/Pages/ProductDefectSubCategory.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductDefectTypes.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductDefectTypes.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KNPL_TSS/Pages/ProductDefectTypes.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductListFilterNav.action":
/*!************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductListFilterNav.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KNPL_TSS/Pages/ProductListFilter.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductListFilterNavigation.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductListFilterNavigation.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Filter","Filterable":"#Page:ProductList/#Control:SectionedTable0","PageToOpen":"/KNPL_TSS/Pages/ProductListFilter.page","ModalPageFullscreen":false}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductListMasterFilterPage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductListMasterFilterPage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Filter","Filterable":"#Page:ProductDefectTypes/#Control:SectionedTable0","PageToOpen":"/KNPL_TSS/Pages/ProductListMasterFilter.page","ModalPageFullscreen":false}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/ProductListNavigation.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/ProductListNavigation.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KNPL_TSS/Pages/ProductList.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnline.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/Service/InitializeOnline.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/KNPL_TSS/Services/com_knpl_tss.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/KNPL_TSS/Actions/Service/InitializeOnlineUser.action","OnFailure":"/KNPL_TSS/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineUser.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineUser.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/KNPL_TSS/Services/com_knpl_tss_User.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/KNPL_TSS/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/KNPL_TSS/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/UpdateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/UpdateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/KNPL_TSS/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Actions/User_Profile.action":
/*!****************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Actions/User_Profile.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KNPL_TSS/Pages/User_Profile.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Globals/AppDefinition_Version.global":
/*!*************************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Globals/AppDefinition_Version.global ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Services/com_knpl_tss.service":
/*!******************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Services/com_knpl_tss.service ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"KNPL_TSS_Destination","OfflineEnabled":false,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Services/com_knpl_tss_User.service":
/*!***********************************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Services/com_knpl_tss_User.service ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"KNPL_TSS_UserService","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let knpl_tss_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./KNPL_TSS/Actions/CloseModalPage_Cancel.action */ "./build.definitions/KNPL_TSS/Actions/CloseModalPage_Cancel.action")
let knpl_tss_actions_closemodalpage_complete_action = __webpack_require__(/*! ./KNPL_TSS/Actions/CloseModalPage_Complete.action */ "./build.definitions/KNPL_TSS/Actions/CloseModalPage_Complete.action")
let knpl_tss_actions_closepage_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ClosePage.action */ "./build.definitions/KNPL_TSS/Actions/ClosePage.action")
let knpl_tss_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./KNPL_TSS/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/KNPL_TSS/Actions/CreateEntitySuccessMessage.action")
let knpl_tss_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./KNPL_TSS/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/KNPL_TSS/Actions/DeleteEntitySuccessMessage.action")
let knpl_tss_actions_logout_action = __webpack_require__(/*! ./KNPL_TSS/Actions/Logout.action */ "./build.definitions/KNPL_TSS/Actions/Logout.action")
let knpl_tss_actions_productdefectcategoryfilternavigation_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductDefectCategoryFilterNavigation.action */ "./build.definitions/KNPL_TSS/Actions/ProductDefectCategoryFilterNavigation.action")
let knpl_tss_actions_productdefectcategorynavigation_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductDefectCategoryNavigation.action */ "./build.definitions/KNPL_TSS/Actions/ProductDefectCategoryNavigation.action")
let knpl_tss_actions_productdefectdetails_nav_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductDefectDetails_Nav.action */ "./build.definitions/KNPL_TSS/Actions/ProductDefectDetails_Nav.action")
let knpl_tss_actions_productdefectsubcategoryfilternavigation_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductDefectSubCategoryFilterNavigation.action */ "./build.definitions/KNPL_TSS/Actions/ProductDefectSubCategoryFilterNavigation.action")
let knpl_tss_actions_productdefectsubcategorynavigation_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductDefectSubCategoryNavigation.action */ "./build.definitions/KNPL_TSS/Actions/ProductDefectSubCategoryNavigation.action")
let knpl_tss_actions_productdefecttypes_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductDefectTypes.action */ "./build.definitions/KNPL_TSS/Actions/ProductDefectTypes.action")
let knpl_tss_actions_productlistfilternav_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductListFilterNav.action */ "./build.definitions/KNPL_TSS/Actions/ProductListFilterNav.action")
let knpl_tss_actions_productlistfilternavigation_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductListFilterNavigation.action */ "./build.definitions/KNPL_TSS/Actions/ProductListFilterNavigation.action")
let knpl_tss_actions_productlistmasterfilterpage_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductListMasterFilterPage.action */ "./build.definitions/KNPL_TSS/Actions/ProductListMasterFilterPage.action")
let knpl_tss_actions_productlistnavigation_action = __webpack_require__(/*! ./KNPL_TSS/Actions/ProductListNavigation.action */ "./build.definitions/KNPL_TSS/Actions/ProductListNavigation.action")
let knpl_tss_actions_service_initializeonline_action = __webpack_require__(/*! ./KNPL_TSS/Actions/Service/InitializeOnline.action */ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnline.action")
let knpl_tss_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./KNPL_TSS/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineFailureMessage.action")
let knpl_tss_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./KNPL_TSS/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineSuccessMessage.action")
let knpl_tss_actions_service_initializeonlineuser_action = __webpack_require__(/*! ./KNPL_TSS/Actions/Service/InitializeOnlineUser.action */ "./build.definitions/KNPL_TSS/Actions/Service/InitializeOnlineUser.action")
let knpl_tss_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./KNPL_TSS/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/KNPL_TSS/Actions/UpdateEntitySuccessMessage.action")
let knpl_tss_actions_user_profile_action = __webpack_require__(/*! ./KNPL_TSS/Actions/User_Profile.action */ "./build.definitions/KNPL_TSS/Actions/User_Profile.action")
let knpl_tss_globals_appdefinition_version_global = __webpack_require__(/*! ./KNPL_TSS/Globals/AppDefinition_Version.global */ "./build.definitions/KNPL_TSS/Globals/AppDefinition_Version.global")
let knpl_tss_i18n_i18n_properties = __webpack_require__(/*! ./KNPL_TSS/i18n/i18n.properties */ "./build.definitions/KNPL_TSS/i18n/i18n.properties")
let knpl_tss_jsconfig_json = __webpack_require__(/*! ./KNPL_TSS/jsconfig.json */ "./build.definitions/KNPL_TSS/jsconfig.json")
let knpl_tss_pages_fourwheelproductlistfilter_page = __webpack_require__(/*! ./KNPL_TSS/Pages/FourWheelProductListFilter.page */ "./build.definitions/KNPL_TSS/Pages/FourWheelProductListFilter.page")
let knpl_tss_pages_main_page = __webpack_require__(/*! ./KNPL_TSS/Pages/Main.page */ "./build.definitions/KNPL_TSS/Pages/Main.page")
let knpl_tss_pages_productbasicdetails_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductBasicDetails.page */ "./build.definitions/KNPL_TSS/Pages/ProductBasicDetails.page")
let knpl_tss_pages_productdefectcategory_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectCategory.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectCategory.page")
let knpl_tss_pages_productdefectcategoryfilter_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectCategoryFilter.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectCategoryFilter.page")
let knpl_tss_pages_productdefectdetails_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectDetails.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectDetails.page")
let knpl_tss_pages_productdefectdetailstab_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectDetailsTab.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectDetailsTab.page")
let knpl_tss_pages_productdefecthistory_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectHistory.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectHistory.page")
let knpl_tss_pages_productdefectpaintdetails_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectPaintDetails.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectPaintDetails.page")
let knpl_tss_pages_productdefectsubcategory_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectSubCategory.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectSubCategory.page")
let knpl_tss_pages_productdefectsubcategoryfilter_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectSubCategoryFilter.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectSubCategoryFilter.page")
let knpl_tss_pages_productdefecttypes_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductDefectTypes.page */ "./build.definitions/KNPL_TSS/Pages/ProductDefectTypes.page")
let knpl_tss_pages_productlist_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductList.page */ "./build.definitions/KNPL_TSS/Pages/ProductList.page")
let knpl_tss_pages_productlistfilter_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductListFilter.page */ "./build.definitions/KNPL_TSS/Pages/ProductListFilter.page")
let knpl_tss_pages_productlistmasterfilter_page = __webpack_require__(/*! ./KNPL_TSS/Pages/ProductListMasterFilter.page */ "./build.definitions/KNPL_TSS/Pages/ProductListMasterFilter.page")
let knpl_tss_pages_twowheelproductlistfilter_page = __webpack_require__(/*! ./KNPL_TSS/Pages/TwoWheelProductListFilter.page */ "./build.definitions/KNPL_TSS/Pages/TwoWheelProductListFilter.page")
let knpl_tss_pages_user_profile_page = __webpack_require__(/*! ./KNPL_TSS/Pages/User_Profile.page */ "./build.definitions/KNPL_TSS/Pages/User_Profile.page")
let knpl_tss_rules_customername_js = __webpack_require__(/*! ./KNPL_TSS/Rules/customerName.js */ "./build.definitions/KNPL_TSS/Rules/customerName.js")
let knpl_tss_rules_dataresponse_js = __webpack_require__(/*! ./KNPL_TSS/Rules/DataResponse.js */ "./build.definitions/KNPL_TSS/Rules/DataResponse.js")
let knpl_tss_rules_onwillupdate_js = __webpack_require__(/*! ./KNPL_TSS/Rules/OnWillUpdate.js */ "./build.definitions/KNPL_TSS/Rules/OnWillUpdate.js")
let knpl_tss_rules_productinfo_js = __webpack_require__(/*! ./KNPL_TSS/Rules/ProductInfo.js */ "./build.definitions/KNPL_TSS/Rules/ProductInfo.js")
let knpl_tss_rules_productlist_js = __webpack_require__(/*! ./KNPL_TSS/Rules/ProductList.js */ "./build.definitions/KNPL_TSS/Rules/ProductList.js")
let knpl_tss_rules_query_search_defect_category_js = __webpack_require__(/*! ./KNPL_TSS/Rules/Query_Search_Defect_Category.js */ "./build.definitions/KNPL_TSS/Rules/Query_Search_Defect_Category.js")
let knpl_tss_rules_query_search_result_js = __webpack_require__(/*! ./KNPL_TSS/Rules/Query_Search_Result.js */ "./build.definitions/KNPL_TSS/Rules/Query_Search_Result.js")
let knpl_tss_rules_search_category_js = __webpack_require__(/*! ./KNPL_TSS/Rules/Search_Category.js */ "./build.definitions/KNPL_TSS/Rules/Search_Category.js")
let knpl_tss_rules_search_sub_category__js = __webpack_require__(/*! ./KNPL_TSS/Rules/Search_Sub_Category_.js */ "./build.definitions/KNPL_TSS/Rules/Search_Sub_Category_.js")
let knpl_tss_rules_uniquecustomername_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniquecustomerName.js */ "./build.definitions/KNPL_TSS/Rules/UniquecustomerName.js")
let knpl_tss_rules_uniquedefectcategory_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueDefectCategory.js */ "./build.definitions/KNPL_TSS/Rules/UniqueDefectCategory.js")
let knpl_tss_rules_uniquedefectsubcategory_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueDefectSubCategory.js */ "./build.definitions/KNPL_TSS/Rules/UniqueDefectSubCategory.js")
let knpl_tss_rules_uniquedefecttype_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueDefectType.js */ "./build.definitions/KNPL_TSS/Rules/UniqueDefectType.js")
let knpl_tss_rules_uniquefourwheelproductcode_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueFourWheelProductCode.js */ "./build.definitions/KNPL_TSS/Rules/UniqueFourWheelProductCode.js")
let knpl_tss_rules_uniquefourwheelproductname_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueFourWheelProductName.js */ "./build.definitions/KNPL_TSS/Rules/UniqueFourWheelProductName.js")
let knpl_tss_rules_uniqueproductcode_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueProductCode.js */ "./build.definitions/KNPL_TSS/Rules/UniqueProductCode.js")
let knpl_tss_rules_uniqueproductname_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueProductName.js */ "./build.definitions/KNPL_TSS/Rules/UniqueProductName.js")
let knpl_tss_rules_uniquetwowheelproductcode_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueTwoWheelProductCode.js */ "./build.definitions/KNPL_TSS/Rules/UniqueTwoWheelProductCode.js")
let knpl_tss_rules_uniquetwowheelproductname_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UniqueTwoWheelProductName.js */ "./build.definitions/KNPL_TSS/Rules/UniqueTwoWheelProductName.js")
let knpl_tss_rules_userinfo_js = __webpack_require__(/*! ./KNPL_TSS/Rules/UserInfo.js */ "./build.definitions/KNPL_TSS/Rules/UserInfo.js")
let knpl_tss_rules_vehicletype_fourwheel_js = __webpack_require__(/*! ./KNPL_TSS/Rules/VehicleType_FourWheel.js */ "./build.definitions/KNPL_TSS/Rules/VehicleType_FourWheel.js")
let knpl_tss_rules_vehicletype_js = __webpack_require__(/*! ./KNPL_TSS/Rules/VehicleType.js */ "./build.definitions/KNPL_TSS/Rules/VehicleType.js")
let knpl_tss_rules_vehicletype_twowheel_js = __webpack_require__(/*! ./KNPL_TSS/Rules/VehicleType_TwoWheel.js */ "./build.definitions/KNPL_TSS/Rules/VehicleType_TwoWheel.js")
let knpl_tss_services_com_knpl_tss_service = __webpack_require__(/*! ./KNPL_TSS/Services/com_knpl_tss.service */ "./build.definitions/KNPL_TSS/Services/com_knpl_tss.service")
let knpl_tss_services_com_knpl_tss_user_service = __webpack_require__(/*! ./KNPL_TSS/Services/com_knpl_tss_User.service */ "./build.definitions/KNPL_TSS/Services/com_knpl_tss_User.service")
let knpl_tss_styles_styles_css = __webpack_require__(/*! ./KNPL_TSS/Styles/Styles.css */ "./build.definitions/KNPL_TSS/Styles/Styles.css")
let knpl_tss_styles_styles_json = __webpack_require__(/*! ./KNPL_TSS/Styles/Styles.json */ "./build.definitions/KNPL_TSS/Styles/Styles.json")
let knpl_tss_styles_styles_less = __webpack_require__(/*! ./KNPL_TSS/Styles/Styles.less */ "./build.definitions/KNPL_TSS/Styles/Styles.less")
let knpl_tss_styles_styles_nss = __webpack_require__(/*! ./KNPL_TSS/Styles/Styles.nss */ "./build.definitions/KNPL_TSS/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	knpl_tss_actions_closemodalpage_cancel_action : knpl_tss_actions_closemodalpage_cancel_action,
	knpl_tss_actions_closemodalpage_complete_action : knpl_tss_actions_closemodalpage_complete_action,
	knpl_tss_actions_closepage_action : knpl_tss_actions_closepage_action,
	knpl_tss_actions_createentitysuccessmessage_action : knpl_tss_actions_createentitysuccessmessage_action,
	knpl_tss_actions_deleteentitysuccessmessage_action : knpl_tss_actions_deleteentitysuccessmessage_action,
	knpl_tss_actions_logout_action : knpl_tss_actions_logout_action,
	knpl_tss_actions_productdefectcategoryfilternavigation_action : knpl_tss_actions_productdefectcategoryfilternavigation_action,
	knpl_tss_actions_productdefectcategorynavigation_action : knpl_tss_actions_productdefectcategorynavigation_action,
	knpl_tss_actions_productdefectdetails_nav_action : knpl_tss_actions_productdefectdetails_nav_action,
	knpl_tss_actions_productdefectsubcategoryfilternavigation_action : knpl_tss_actions_productdefectsubcategoryfilternavigation_action,
	knpl_tss_actions_productdefectsubcategorynavigation_action : knpl_tss_actions_productdefectsubcategorynavigation_action,
	knpl_tss_actions_productdefecttypes_action : knpl_tss_actions_productdefecttypes_action,
	knpl_tss_actions_productlistfilternav_action : knpl_tss_actions_productlistfilternav_action,
	knpl_tss_actions_productlistfilternavigation_action : knpl_tss_actions_productlistfilternavigation_action,
	knpl_tss_actions_productlistmasterfilterpage_action : knpl_tss_actions_productlistmasterfilterpage_action,
	knpl_tss_actions_productlistnavigation_action : knpl_tss_actions_productlistnavigation_action,
	knpl_tss_actions_service_initializeonline_action : knpl_tss_actions_service_initializeonline_action,
	knpl_tss_actions_service_initializeonlinefailuremessage_action : knpl_tss_actions_service_initializeonlinefailuremessage_action,
	knpl_tss_actions_service_initializeonlinesuccessmessage_action : knpl_tss_actions_service_initializeonlinesuccessmessage_action,
	knpl_tss_actions_service_initializeonlineuser_action : knpl_tss_actions_service_initializeonlineuser_action,
	knpl_tss_actions_updateentitysuccessmessage_action : knpl_tss_actions_updateentitysuccessmessage_action,
	knpl_tss_actions_user_profile_action : knpl_tss_actions_user_profile_action,
	knpl_tss_globals_appdefinition_version_global : knpl_tss_globals_appdefinition_version_global,
	knpl_tss_i18n_i18n_properties : knpl_tss_i18n_i18n_properties,
	knpl_tss_jsconfig_json : knpl_tss_jsconfig_json,
	knpl_tss_pages_fourwheelproductlistfilter_page : knpl_tss_pages_fourwheelproductlistfilter_page,
	knpl_tss_pages_main_page : knpl_tss_pages_main_page,
	knpl_tss_pages_productbasicdetails_page : knpl_tss_pages_productbasicdetails_page,
	knpl_tss_pages_productdefectcategory_page : knpl_tss_pages_productdefectcategory_page,
	knpl_tss_pages_productdefectcategoryfilter_page : knpl_tss_pages_productdefectcategoryfilter_page,
	knpl_tss_pages_productdefectdetails_page : knpl_tss_pages_productdefectdetails_page,
	knpl_tss_pages_productdefectdetailstab_page : knpl_tss_pages_productdefectdetailstab_page,
	knpl_tss_pages_productdefecthistory_page : knpl_tss_pages_productdefecthistory_page,
	knpl_tss_pages_productdefectpaintdetails_page : knpl_tss_pages_productdefectpaintdetails_page,
	knpl_tss_pages_productdefectsubcategory_page : knpl_tss_pages_productdefectsubcategory_page,
	knpl_tss_pages_productdefectsubcategoryfilter_page : knpl_tss_pages_productdefectsubcategoryfilter_page,
	knpl_tss_pages_productdefecttypes_page : knpl_tss_pages_productdefecttypes_page,
	knpl_tss_pages_productlist_page : knpl_tss_pages_productlist_page,
	knpl_tss_pages_productlistfilter_page : knpl_tss_pages_productlistfilter_page,
	knpl_tss_pages_productlistmasterfilter_page : knpl_tss_pages_productlistmasterfilter_page,
	knpl_tss_pages_twowheelproductlistfilter_page : knpl_tss_pages_twowheelproductlistfilter_page,
	knpl_tss_pages_user_profile_page : knpl_tss_pages_user_profile_page,
	knpl_tss_rules_customername_js : knpl_tss_rules_customername_js,
	knpl_tss_rules_dataresponse_js : knpl_tss_rules_dataresponse_js,
	knpl_tss_rules_onwillupdate_js : knpl_tss_rules_onwillupdate_js,
	knpl_tss_rules_productinfo_js : knpl_tss_rules_productinfo_js,
	knpl_tss_rules_productlist_js : knpl_tss_rules_productlist_js,
	knpl_tss_rules_query_search_defect_category_js : knpl_tss_rules_query_search_defect_category_js,
	knpl_tss_rules_query_search_result_js : knpl_tss_rules_query_search_result_js,
	knpl_tss_rules_search_category_js : knpl_tss_rules_search_category_js,
	knpl_tss_rules_search_sub_category__js : knpl_tss_rules_search_sub_category__js,
	knpl_tss_rules_uniquecustomername_js : knpl_tss_rules_uniquecustomername_js,
	knpl_tss_rules_uniquedefectcategory_js : knpl_tss_rules_uniquedefectcategory_js,
	knpl_tss_rules_uniquedefectsubcategory_js : knpl_tss_rules_uniquedefectsubcategory_js,
	knpl_tss_rules_uniquedefecttype_js : knpl_tss_rules_uniquedefecttype_js,
	knpl_tss_rules_uniquefourwheelproductcode_js : knpl_tss_rules_uniquefourwheelproductcode_js,
	knpl_tss_rules_uniquefourwheelproductname_js : knpl_tss_rules_uniquefourwheelproductname_js,
	knpl_tss_rules_uniqueproductcode_js : knpl_tss_rules_uniqueproductcode_js,
	knpl_tss_rules_uniqueproductname_js : knpl_tss_rules_uniqueproductname_js,
	knpl_tss_rules_uniquetwowheelproductcode_js : knpl_tss_rules_uniquetwowheelproductcode_js,
	knpl_tss_rules_uniquetwowheelproductname_js : knpl_tss_rules_uniquetwowheelproductname_js,
	knpl_tss_rules_userinfo_js : knpl_tss_rules_userinfo_js,
	knpl_tss_rules_vehicletype_fourwheel_js : knpl_tss_rules_vehicletype_fourwheel_js,
	knpl_tss_rules_vehicletype_js : knpl_tss_rules_vehicletype_js,
	knpl_tss_rules_vehicletype_twowheel_js : knpl_tss_rules_vehicletype_twowheel_js,
	knpl_tss_services_com_knpl_tss_service : knpl_tss_services_com_knpl_tss_service,
	knpl_tss_services_com_knpl_tss_user_service : knpl_tss_services_com_knpl_tss_user_service,
	knpl_tss_styles_styles_css : knpl_tss_styles_styles_css,
	knpl_tss_styles_styles_json : knpl_tss_styles_styles_json,
	knpl_tss_styles_styles_less : knpl_tss_styles_styles_less,
	knpl_tss_styles_styles_nss : knpl_tss_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/KNPL_TSS/Styles/Styles.json":
/*!*******************************************************!*\
  !*** ./build.definitions/KNPL_TSS/Styles/Styles.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"themeColor":{"background-color":"#e7194f"},"ActionBar":{"font-color":"white","background-color":"#e7194f"},"objectHeaderBackground":{"background-color":"#e7194f"}}');

/***/ }),

/***/ "./build.definitions/KNPL_TSS/jsconfig.json":
/*!**************************************************!*\
  !*** ./build.definitions/KNPL_TSS/jsconfig.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map