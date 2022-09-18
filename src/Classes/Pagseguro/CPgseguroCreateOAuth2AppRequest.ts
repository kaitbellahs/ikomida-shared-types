import { Property } from '../../Decorators/Property';
import CPagSeguroErrorResponse from './CPagSeguroErrorResponse';

export default class CPgseguroCreateOAuth2AppRequest extends CPagSeguroErrorResponse {
  @Property
  name!: string;
  @Property
  description!: string;
  @Property
  site!: string;
  @Property
  redirect_uri!: string;
  @Property
  logo!: string;

  static init(
    name: string,
    description: string,
    site: string,
    redirect_uri: string,
    logo: string,
  ): CPgseguroCreateOAuth2AppRequest {
    return this.createInitObject(arguments);
  }
}
