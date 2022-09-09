import EnumType from "../Decorators/EnumType";
import { TTerm } from "../Types";
import BaseJSON from "./BaseJSON";

export default abstract class ITerm extends BaseJSON {
    id?: string;
    name?: string;
    text?: string;
    @EnumType
    type?: TTerm;
    active?: boolean;
} 