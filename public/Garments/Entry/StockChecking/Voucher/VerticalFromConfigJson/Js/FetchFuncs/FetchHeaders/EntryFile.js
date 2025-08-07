import KeysJson from './Keys.json' with {type: 'json'};
import BodyKeysJson from './BodyKeys.json' with {type: 'json'};
import ConfigKeys from '../../../ConfigKeys/FetchKeys/ForPostKeys.json' with {type: 'json'};


let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys = {
        ...ConfigKeys,
        ...BodyKeysJson

    };
    
    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }