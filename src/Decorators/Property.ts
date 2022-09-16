export default function Property(target: any, propertyKey: string | symbol) {
    let props: (string | symbol)[]
    if (Object.prototype.hasOwnProperty.call(target, "__properties__")) {
        props = (target as any)["__properties__"];
    } else {
        props = (target as any)["__properties__"] = [];
    }
    props.push(propertyKey);
}