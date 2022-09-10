import BaseJSON from "./BaseJSON";

export default class IApp extends BaseJSON {
  id?: string;
  bundleId?: string;
  fireBaseId?: string;
  displayName?: string;
  platform?: string;
  version?: string;
  storeStatus?: string;
  storePublishStatus?: string;
  active?: boolean;
  createdAt?: Date;
  timestamp?: number;
  iOSProfileId?: string;
  storeNote?: string;
  storeEvidences?: string;
  storeVersion?: string;
  storeBuildStatus?: string;
  managedBy?: {
    id?: string;
    name?: string;
  };
}
