let StartFunc = async () => {

    let jVarLocalQrCodeData = await jFLocalPromiseAll();

    var $table = $('#table');
    jFLocalHideSpinner();
    $table.bootstrapTable("load", jVarLocalQrCodeData);

};


let jFLocalPromiseAll = async () => {
    let jVarLocalPromises = [jFLocalFetchQrCodes(), jFLocalFetchBillsQrCode(), jFLocalFetchPurchases()];

    let [a, b, c] = await Promise.allSettled(jVarLocalPromises);

    let jVarLocalReturnArray = a.value.filter(LoopQrCode => b.value.some(el => el.pk === LoopQrCode.pk))
        .map(element => (c.value.forEach(Vouchers => element.PurchasePk === Vouchers.pk ? element.PurchaseDate = Vouchers.Date : null), element));
    return jVarLocalReturnArray
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalFetchQrCodes = async () => {
    let jVarLocalFetchUrl = "/binV4/Generate/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchPurchases = async () => {
    let jVarLocalFetchUrl = "/binV4/Vouchers/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchBillsQrCode = async () => {
    let jVarLocalFetchUrl = "/binV4/BillsQrCode/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchSalesReturns = async () => {
    let jVarLocalFetchUrl = "/binV4/SalesReturns/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }