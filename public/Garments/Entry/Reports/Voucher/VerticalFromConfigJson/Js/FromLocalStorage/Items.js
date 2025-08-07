import KeyNeeded from './KeyNeeded.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalKeyNeeded = KeyNeeded.Customers;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalKeyNeeded);
    let jVarLocalDataNeeded = JSON.parse(jVarLocalFromLocalStorage);

    return jVarLocalDataNeeded;
};

export { StartFunc };