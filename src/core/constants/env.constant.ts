export const envConstant = {
    isProduction : process.env.NODE_ENV === 'production',
    PORT : process.env.PORT,
    STATIC_FILE_PATH : process.env.STATIC_FILE_PATH,
    CORS_ORIGIN : process.env.CORS_ORIGIN,
    CORS_METHODS : process.env.CORS_METHODS,
    MONGODB_URI : process.env.MONGODB_URI,
    isApiMock : process.env.API_MOCK === 'true',
}