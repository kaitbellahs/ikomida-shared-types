import BaseJSON from './BaseJSON';

export default class CEmail extends BaseJSON {
  from!: {
    email?: string;
    name?: string;
  };
  to!: {
    email?: string;
    name?: string;
  };
  message!: {
    subject?: string;
    body?: string;
  };
}
