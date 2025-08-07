// import BodyKeysJson from "../../../ConfigKeys/FetchKeys/ForPostKeys.json" with {type: 'json'};
import BodyKeysJson from "./ForPostKeysAsIs.json" with {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = BodyKeysJson;

    return jVarLocalBodyData;
    
};

export { StartFunc };