import ModalDataAsJson from './Data.json' with { type: 'json' };

let ColumnsPullFunc = () => {
    let LocalColumns = Object.keys(ModalDataAsJson);
    let ReturnFuncAsString = `({ ${LocalColumns.toString()} }) => ({ ${LocalColumns.toString()} })`;

    return eval(ReturnFuncAsString);
};

export {
    ColumnsPullFunc
};