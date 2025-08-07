import fs  from 'fs'
import Configjson from '../../../../../../../Config.json' with { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/SalesReturns.json`;

    const db = fs.readFileSync(LocalReturnData.UserDataFilePath);
    const data = JSON.parse(db);
    return data;
};
export { StartFunc };
