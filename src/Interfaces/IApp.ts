import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IUser from './IUser';

export default class IApp extends BaseJSON {
  @Property
  id?: string;
  @Property
  bundleId!: string;
  @Property
  fireBaseId?: string;
  @Property
  displayName!: string;
  @Property
  platform!: string;
  @Property
  version?: string;
  @Property
  storeStatus?: string;
  @Property
  storePublishStatus?: string;
  @Property
  active?: boolean;
  @Property
  @FromJSON
  createdAt?: Date;
  @Property
  timestamp?: number;
  @Property
  iOSProfileId?: string;
  @Property
  storeNote?: string;
  @Property
  storeEvidences?: string;
  @Property
  storeVersion?: string;
  @Property
  storeBuildStatus?: string;
  @Property
  @FromJSON
  managedBy?: IUser
}
