export const envConstant = {
    isProduction : process.env.NODE_ENV === 'production',
    PORT : process.env.PORT,
    STATIC_FILE_PATH : process.env.STATIC_FILE_PATH,
    TEMPORAL_IMAGES_FILE_PATH: `${process.env.STATIC_FILE_PATH}/temp/images`,
    CORS_ORIGIN : process.env.CORS_ORIGIN,
    CORS_METHODS : process.env.CORS_METHODS,
    MONGODB_URI : process.env.MONGODB_URI,
    isApiMock : process.env.API_MOCK ,
    SECRET : process.env.SECRET,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_SECRET: process.env.CLOUD_SECRET,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
}