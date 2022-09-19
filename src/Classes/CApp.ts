import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import CUser from './CUser';
import { Nullable } from '../Decorators';

export default class CApp extends BaseJSON {
  @Property
  bundleId!: string;
  @Property
  displayName!: string;
  @Property
  platform!: string;
  @Property
  @Nullable
  fireBaseId?: string;
  @Property
  @Nullable
  version?: string;
  @Property
  @Nullable
  storeStatus?: string;
  @Property
  @Nullable
  storePublishStatus?: string;
  @Property
  active?: boolean;
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date;
  @Property
  @Nullable
  iOSProfileId?: string;
  @Property
  @Nullable
  storeNote?: string;
  @Property
  @Nullable
  storeEvidences?: string;
  @Property
  @Nullable
  storeVersion?: string;
  @Property
  @Nullable
  storeBuildStatus?: string;
  @Property
  @FromJSON
  @Nullable
  managedBy?: CUser;

  static init(
    bundleId: string,
    displayName: string,
    platform: string,
    fireBaseId?: string,
    version?: string,
    storeStatus?: string,
    storePublishStatus?: string,
    active?: boolean,
    createdAt?: Date,
    iOSProfileId?: string,
    storeNote?: string,
    storeEvidences?: string,
    storeVersion?: string,
    storeBuildStatus?: string,
    managedBy?: CUser,
    id?: string,
    timestamp?: number
  ): CApp {
    return this.createInitObject(arguments);
  }
}

