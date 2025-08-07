import KeysJson from './Keys.json' with {type: 'json'};
import BodyKeysJson from '../../../../../../ConfigKeys/FetchKeys/ForPostKeysAsIs.json' with {type: 'json'};
import BranchNameJson from '../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys = BodyKeysJson;

    let jVarLocalFileValue = BodyKeysJson.FileNameOnly;

    let jVarLocalBodyKeysJson = jVarLocalBodyKeys;

    jVarLocalBodyKeysJson.FileNameOnly = jVarLocalFileValue.search(".") === -1 ? jVarLocalFileValue : jVarLocalFileValue.split(".")[0]
    jVarLocalBodyKeysJson.FilterString = `value.BranchName === '${BranchNameJson.inFileName}'`

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

export { StartFunc }