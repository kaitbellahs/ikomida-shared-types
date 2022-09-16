import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class ILoginOptions extends BaseJSON {
  @Property
  ip: string;
  @Property
  forwardedIp: string;
  @Property
  platform: string;
  @Property
  deviceId: string;
  @Property
  region: string;
  @Property
  subRegion: string;
  @Property
  citylatlong: string;
  @Property
  city: string;
  @Property
  app: string;

  constructor(
    ip: string,
    forwardedIp: string,
    platform: string,
    deviceId: string,
    region: string,
    subRegion: string,
    citylatlong: string,
    city: string,
    app: string,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.ip = ip
    this.forwardedIp = forwardedIp
    this.platform = platform
    this.deviceId = deviceId
    this.region = region
    this.subRegion = subRegion
    this.citylatlong = citylatlong
    this.city = city
    this.app = app
  }

}
