import BaseJSON from "./BaseJSON";

export default class IUser extends BaseJSON {
  id?: string;
  role?: string;
  contractName?: string;
  name?: string;
  termId?: string;
  lastName?: string;
  cnpj?: string;
  identity?: string;
  email?: string;
  phone?: string;
  areaCode?: string;
  referredBy?: string;
  password?: string;
  address?: string;
  ikomidaID?: string;
  code?: string | number;
}
