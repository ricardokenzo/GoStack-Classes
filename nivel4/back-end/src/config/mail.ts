interface IMailConfig {
    driver: 'ethereal' | 'ses';

    defaults: {
        from: {
            email: string;
            name: string;
        };
    };
}

export default {
    driver: process.env.MAIL_DRIVER || 'ethereal',

    defaults: {
        from: {
            email: 'ricardo.kenzo@hotmail.com', // not actual, change this later
            name: 'Ricardo Ota',
        },
    },
} as IMailConfig;
