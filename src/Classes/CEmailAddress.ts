import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CEmailAddres extends BaseJSON {
    @Property
    email?: string;
    @Property
    name?: string;
}
