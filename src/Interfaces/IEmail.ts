export default interface IEmail {
    from: {
        email: string;
        name: string;
    };
    to: {
        email: string;
        name: string;
    };
    message: {
        subject: string;
        body: string;
    };
}
