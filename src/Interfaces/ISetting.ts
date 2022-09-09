import EnumType from "../Decorators/EnumType";
import { TSetting } from "../Types";
import BaseJSON from "./BaseJSON";

export default abstract class ISetting extends BaseJSON {
    id?: string;
    name?: string;
    value?: string;
    @EnumType
    type?: TSetting;
    active?: boolean;
} 