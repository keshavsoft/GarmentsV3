import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";
import { StartFunc as StartFuncDeliveryHead } from "../CreateDeliveryHeadFetch/2-ButtonClickFunc.js";

let StartFunc = async () => {
  if (StartFuncCheckBeforeFetch()) {
    let jVarLocalBodyData = await StartFuncDeliveryHead();
    let JVarLocalVoucherref = await jVarLocalBodyData.text();

    if (jVarLocalBodyData.status === 200) {
      let jVarLocalBodyData = await StartFuncPreparePostData({ inVoucherRef: JVarLocalVoucherref });

      let response = await StartFuncFetchFunc({
        inBodyData: jVarLocalBodyData,
      });

      await StartFuncAfterFetch({ inFromFetch: response, inVoucherRef: JVarLocalVoucherref });
    }
  }
};

export { StartFunc };
