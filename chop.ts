function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

let chop = (
    template: string,
    data: { [key: string]: string | number }
): string | number => {
    // check if parameters are not empty
    if (!template || isEmpty(data)) {
        return "template and dataset are mandatory parameters";
    }

    // check if parameters are of correct type:
    if (
        typeof template !== "string" ||
        (typeof data !== "object" && typeof data !== null)
    ) {
        return "The input arguments are of wrong type. Arguments can be only of type string and object";
    }

    // parse the template:
    const regEx = /\{{\w+\}}/gi;
    const trimWhiteSpace = /\s\s+/g;
    const dataKeys = Object.keys(data);

    let mapObj: any = {};
    dataKeys.forEach((elem) => (mapObj[`{{${elem}}}`] = data[elem]));

    //chain another regex with white space replacement replace(/\s\s+)/
    let choppedTemplate = template.replace(regEx, (item) => mapObj[item]);

    return choppedTemplate;
};

export default chop;
