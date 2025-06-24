let config = {};
if (process.env.NODE_ENV === 'development') {
    // 开发环境
    // config.baseUrl = 'http://192.168.1.110:8082';
    // config.baseUrl = 'http://192.168.1.245:8082';
    config.baseUrl = 'http://192.168.1.111:27540/prod-api';
    config.imgBaseUrl = 'http://192.168.1.111:27540';
} else {
    // 生产环境
    config.baseUrl = '/api';
    config.imgBaseUrl = 'http://192.168.1.111:27540';
}

export default config;
