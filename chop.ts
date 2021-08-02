const WRONG_ARG_TYPE_MSG =
    "The input arguments are of wrong type. Please provide the input in right format!";
const MISSING_ARGS_MSG = "template and dataset are mandatory parameters";

export interface IDataSet {
    bread: string | number;
    cheese: string | number;
}

function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

const chop = (template: string, dataset: IDataSet): string | number => {
    // check if parameters are not empty
    if (!template || isEmpty(dataset)) {
        return MISSING_ARGS_MSG;
    }

    // check if parameters are of correct type:
    if (
        typeof template !== "string" ||
        (typeof dataset !== "object" && typeof dataset !== null)
    ) {
        return WRONG_ARG_TYPE_MSG;
    }

    // parse the template:
    const regEx = /\{{\w+\}}/gi;
    const trimWhiteSpace = /\s\s+/g;
    const dataKeys = Object.keys(dataset);
    const cleanDataset = dataset as any;

    let mapObj: any = {};
    dataKeys.forEach(
        (elem, index) => (mapObj[`{{${elem}}}`] = cleanDataset[elem])
    );

    //chain another regex with white space replacement replace(/\s\s+)/
    let choppedTemplate = template.replace(regEx, (item) => mapObj[item]);

    return choppedTemplate;
};

export default chop;
