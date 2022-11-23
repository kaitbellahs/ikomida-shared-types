import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CUser from './CUser.js'
import { Nullable } from '../Decorators/index.js'

export default class CApp extends BaseJSON {
  @Property
  bundleId!: string
  @Property
  displayName!: string
  @Property
  platform!: string
  @Property
  @Nullable
  fireBaseId?: string
  @Property
  @Nullable
  version?: string
  @Property
  @Nullable
  storeStatus?: string
  @Property
  @Nullable
  storePublishStatus?: string
  @Property
  active?: boolean
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date
  @Property
  @Nullable
  iOSProfileId?: string
  @Property
  @Nullable
  storeNote?: string
  @Property
  @Nullable
  storeEvidences?: string
  @Property
  @Nullable
  storeVersion?: string
  @Property
  @Nullable
  storeBuildStatus?: string
  @Property
  @FromJSON
  @Nullable
  managedBy?: CUser
  @Property
  @Nullable
  icon?: string
  @Property
  @Nullable
  description?: string
  @Property
  @Nullable
  androidLink?: string
  @Property
  @Nullable
  iosLink?: string

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
    icon?: string,
    description?: string,
    androidLink?: string,
    iosLink?: string,
    id?: string,
    timestamp?: number
  ): CApp {
    return this.createInitObject(arguments, [
      'bundleId',
      'displayName',
      'platform',
      'fireBaseId',
      'version',
      'storeStatus',
      'storePublishStatus',
      'active',
      'createdAt',
      'iOSProfileId',
      'storeNote',
      'storeEvidences',
      'storeVersion',
      'storeBuildStatus',
      'managedBy',
      'icon',
      'description',
      'androidLink',
      'iosLink',
      'id',
      'timestamp'
    ])
  }
}
