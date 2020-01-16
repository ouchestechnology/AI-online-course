let settings = {}

switch(process.env.APP_ENV){
    case 'local':
        settings = {
            appName: process.env.APP_NAME,

        }
        break;

    case 'staging':
        settings = {
            appName: process.env.APP_NAME,
            
        }
        break;

    case 'production':
        settings = {
            appName: process.env.APP_NAME,
            
        }
        break;

}

export default settings;