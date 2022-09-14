import { IAMQPPayloadObject, IEmail } from '../Interfaces';

type TAMQPPayload = IAMQPPayloadObject | number | string | IEmail;
export default TAMQPPayload;
