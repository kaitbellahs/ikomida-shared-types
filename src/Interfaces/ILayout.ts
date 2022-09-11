import BaseJSON from "./BaseJSON"

export default class ILayout extends BaseJSON {
    link?: string;
    background?: string;
    color?: string;
    header?: {
        background?: string;
        color?: string;
        menuHamburger?: string;
    };
    tabs?: {
        background?: string;
        color?: string;
    };
    button?: {
        background?: string;
        color?: string;
    };
}