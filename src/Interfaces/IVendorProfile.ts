import BaseJSON from "./BaseJSON";
import IAddress from "./IAddress";


export default class IVendorProfile extends BaseJSON {
    areaCode?: number;
    mainPicture?: string;
    contractName?: string;
    cnpj?: string;
    identity?: string;
    phone?: string;
    email?: string;
    address?: IAddress;
}
