const Hapi = require('hapi');
const config = require('./config');
//const routesHelloHapi = require('./routes/xmind-hello');
const routesLoadBill = require('./routes/xmind-loadBill');
// 引入自定义的 hapi-swagger 插件配置
// const pluginHapiSwagger = require('./plugins/xmind-swagger');

const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
  host: config.host,
  port: config.port,
});

const init = async () => {
  /*
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
  ]);
  */
  server.route([
    // 创建一个简单的hello hapi接口
    ...routesLoadBill
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();