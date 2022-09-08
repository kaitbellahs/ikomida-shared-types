type IRecord<K extends keyof any, T> = {
    [P in K]: T;
};

export default IRecord