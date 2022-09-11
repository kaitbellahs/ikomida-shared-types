import BaseJSON from './BaseJSON';

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
  oldPass?: string;
  newPass?: string;
  reNewPass?: string;
  address?: string;
  signature?: string;
  phoneValidationCode?: string;
  avatar?: string;
  ikomidaID?: string;
  code?: string | number;
  referralCode?: string | number;
  hash?: string;
  timestamp?: number;
}
