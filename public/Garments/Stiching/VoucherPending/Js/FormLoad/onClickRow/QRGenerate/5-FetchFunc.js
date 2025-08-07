import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

const StartFunc = async ({ inRowData }) => {
    let LocalSalesRef = inRowData.pk;
    let jVarLocalFetchUrl = `/bin/BillsStiching/FilterData/FK/${LocalSalesRef}`;

    let response = await fetch(jVarLocalFetchUrl);
    if (response.status === 200) {
        let jVarLocalResponse = await response.json();
        StartFuncAfterFetch({ inFromFetch: jVarLocalResponse, inRowData });
    } else {
        swal.fire({ icon: "error", title: "no data" })
    };

};

export { StartFunc };
