
export interface IDataSet {
    bread: string | number;
    cheese: string | number;
}

function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

const chop = (
    template: string,
    dataset: IDataSet
): string | number => {
    // check if parameters are not empty
    if (!template || isEmpty(dataset)) {
        return "template and dataset are mandatory parameters";
    }

    // check if parameters are of correct type:
    if (
        typeof template !== "string" ||
        (typeof dataset !== "object" && typeof dataset !== null)
    ) {
        return "The input arguments are of wrong type. Arguments can be only of type string and object";
    }

    // parse the template:
    const regEx = /\{{\w+\}}/gi;
    const trimWhiteSpace = /\s\s+/g;
    const dataKeys = Object.keys(dataset);
    const cleanDataset = dataset as any

    let mapObj: any = {};
    dataKeys.forEach((elem, index) => mapObj[`{{${elem}}}`] =  cleanDataset[elem]);

    //chain another regex with white space replacement replace(/\s\s+)/
    let choppedTemplate = template.replace(regEx, (item) => mapObj[item]);
    
    return choppedTemplate;
};

export default chop;
