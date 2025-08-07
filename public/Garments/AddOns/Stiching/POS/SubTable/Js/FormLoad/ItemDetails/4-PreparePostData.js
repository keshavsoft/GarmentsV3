// import BodyKeysJson from "../../../ConfigKeys/FetchKeys/ForPostKeys.json" with {type: 'json'};
import BodyKeysJson from "./ForPostKeysAsIs.json" with {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = BodyKeysJson;

    // jVarLocalBodyData.FolderName = BodyKeysJson.inFolderName;
    // jVarLocalBodyData.FileNameOnly = BodyKeysJson.inFileNameOnly;
    // jVarLocalBodyData.ItemName = "QrCodeDetails";
    // jVarLocalBodyData.MapString = "VoucherRef";

    return jVarLocalBodyData;
    
};

export { StartFunc };