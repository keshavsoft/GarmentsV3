import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
// import { StartFunc as FormLoadStartFunc } from "./ToDom/FormLoad.js";
import { ReturnRowPK as ReturnRowPKurlSearchParams } from "./urlSearchParams.js";
import { StartFunc as FormLoadStartFunc } from "./FormLoad/StartFuncs.js";

let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let LocalShowTabFuncFromurlSearchParams = () => {
    let jVarLocalFromurlSearchParams = ReturnRowPKurlSearchParams();

    if ("ForUpload" in jVarLocalFromurlSearchParams) {
        if (jVarLocalFromurlSearchParams.ForUpload) {
            let jVarLocalSecondTabNextButtonId = document.getElementById("SecondTabNextButtonId");
            let jVarLocalSowDataID = document.getElementById("SowDataID");
            let jVarLocalPrintQrCodesShowButtonId = document.getElementById("PrintQrCodesShowButtonId");

            jVarLocalSecondTabNextButtonId.click();
            jVarLocalSowDataID.click();
            jVarLocalPrintQrCodesShowButtonId.click();
        };
    };
};

let jFStartFunc = async () => {
    await FormLoadStartFunc({ inProjectName: jVarCommonProjectName });

    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

jFStartFunc().then(() => {
    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
    LocalShowTabFuncFromurlSearchParams();
});