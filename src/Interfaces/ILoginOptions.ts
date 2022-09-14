import BaseJSON from './BaseJSON';

export default class ILoginOptions extends BaseJSON {
  ip?: string;
  forwardedIp?: string;
  platform?: string;
  deviceId?: string;
  region?: string;
  subRegion?: string;
  citylatlong?: string;
  city?: string;
  app?: string;
}
