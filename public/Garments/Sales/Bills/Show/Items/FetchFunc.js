let StartFunc = async ({ inProjectName }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let jVarLocalFetchUrl = `/binV4/Items/Show/DataOnly`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        
        if (data) {
            LocalReturnObject.JsonData = data;
        };

        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error:", error);
    };

    return await LocalReturnObject;
};

export { StartFunc };