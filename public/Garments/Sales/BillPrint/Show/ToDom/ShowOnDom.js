import { FromNode } from "../PullData/FetchFuncs.js";
import { ReturnRowPK } from "../urlSearchParams.js";
import { StartFunc as TableFootSuccessStartFunc } from "../FetchFuncs/HtmlPull/TableFootSuccess.js";
import { StartFunc as StartFuncInventoryGrid } from "./InventoryGrid/PrepareData.js";

let StartFunc = async () => {
    let jVarLocalRowPk = ReturnRowPK();
    let jVarLocalData = await FromNode();

    let LocalBillsCollectionData = jVarLocalData;
    localStorage.setItem("BillData", JSON.stringify(LocalBillsCollectionData));

    if (jVarLocalData) {
        let localindataJson = jVarLocalData
        ShowOnDom({ inData: localindataJson });

        await StartFuncInventoryGrid({
            inRowPk: jVarLocalRowPk.RowPK
        })
    };
};

let ShowOnDom = ({ inData }) => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalCustomerNameId = document.getElementById("CustomerNameId");

    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");
    let jVarLocalCustomerNumber = document.getElementById("ContactNumberId");

    if (jVarLocalCustomerNameId !== null) {
        jVarLocalCustomerNameId.innerHTML = inData.CustomerName;
    };

    if (jVarLocalVoucherNameId !== null) {
        jVarLocalVoucherNameId.innerHTML = inData.Date;
    };


    if (jVarLocalBillNumberId !== null) {
        jVarLocalBillNumberId.innerHTML = inData.BillNumber;
    };

    if (jVarLocalDateId !== null) {
        jVarLocalDateId.innerHTML = inData.Date;
    };
    if (jVarLocalCustomerNumber !== null) {
        jVarLocalCustomerNumber.innerHTML = inData.CustomerNumber;
    };

    // ShowSuccessFunc({ inShowSuccess });
};

let ShowSuccessFunc = ({ inShowSuccess }) => {
    if (inShowSuccess) {
        let LocalFromHtml = TableFootSuccessStartFunc();
        let LocalTableFooterSuccessId = document.getElementById("TableFooterSuccessId");

        if (LocalFromHtml.KTF) {
            LocalTableFooterSuccessId.innerHTML = LocalFromHtml.HtmlString;
        };
    };
};

export { StartFunc };