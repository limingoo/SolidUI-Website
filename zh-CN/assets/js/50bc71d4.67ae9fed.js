"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[6406],{2885:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2023/07/03/independent-deployment-communication-analysis","metadata":{"permalink":"/zh-CN/blog/2023/07/03/independent-deployment-communication-analysis","editUrl":"https://github.com/CloudOrc/SolidUI-Website/edit/dev/blog/2023-07-03-independent-deployment-communication-analysis.md","source":"@site/blog/2023-07-03-independent-deployment-communication-analysis.md","title":"SolidUI\u793e\u533a-\u72ec\u7acb\u90e8\u7f72\u548cDocker\u901a\u4fe1\u5206\u6790","description":"\u80cc\u666f","date":"2023-07-03T00:00:00.000Z","formattedDate":"2023\u5e747\u67083\u65e5","tags":[{"label":"SolidUI","permalink":"/zh-CN/blog/tags/solid-ui"},{"label":"AIGC","permalink":"/zh-CN/blog/tags/aigc"},{"label":"stable-diffusion","permalink":"/zh-CN/blog/tags/stable-diffusion"}],"readingTime":3.635,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"SolidUI\u793e\u533a-\u72ec\u7acb\u90e8\u7f72\u548cDocker\u901a\u4fe1\u5206\u6790","date":"2023-07-03T00:00:00.000Z","tags":["SolidUI","AIGC","stable-diffusion"]},"nextItem":{"title":"SolidUI\u793e\u533a-Snakemq\u901a\u4fe1\u6e90\u7801\u5206\u6790","permalink":"/zh-CN/blog/2023/07/02/snakemq-communication-source-code-analysis"}},"content":"## \u80cc\u666f\\n\\n\u968f\u7740\u6587\u672c\u751f\u6210\u56fe\u50cf\u7684\u8bed\u8a00\u6a21\u578b\u5174\u8d77\uff0cSolidUI\u60f3\u5e2e\u4eba\u4eec\u5feb\u901f\u6784\u5efa\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u53ef\u89c6\u5316\u5185\u5bb9\u5305\u62ec2D,3D,3D\u573a\u666f\uff0c\u4ece\u800c\u5feb\u901f\u6784\u4e09\u7ef4\u6570\u636e\u6f14\u793a\u573a\u666f\u3002SolidUI \u662f\u4e00\u4e2a\u521b\u65b0\u7684\u9879\u76ee\uff0c\u65e8\u5728\u5c06\u81ea\u7136\u8bed\u8a00\u5904\u7406\uff08NLP\uff09\u4e0e\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u76f8\u7ed3\u5408\uff0c\u5b9e\u73b0\u6587\u751f\u56fe\u529f\u80fd\u3002\u901a\u8fc7\u6784\u5efa\u81ea\u7814\u7684\u6587\u751f\u56fe\u8bed\u8a00\u6a21\u578b\uff0cSolidUI \u5229\u7528 RLHF (Reinforcement Learning Human Feedback) \u6d41\u7a0b\u5b9e\u73b0\u4ece\u6587\u672c\u63cf\u8ff0\u5230\u56fe\u5f62\u751f\u6210\u7684\u8fc7\u7a0b\u3002\\n\\n\u9879\u76ee\u5730\u5740: [https://github.com/CloudOrc/SolidUI](https://github.com/CloudOrc/SolidUI)\\n\\n\u9879\u76ee\u955c\u50cf\u5730\u5740: [https://gitee.com/CloudOrc/SolidUI](https://gitee.com/CloudOrc/SolidUI)\\n\\n\\n## \u72ec\u7acb\u90e8\u7f72\u901a\u4fe1\\n\\n\u5355\u72ec\u90e8\u7f72\uff0c\u4e0e\u5916\u7f51\u901a\u4fe1\uff0c\u8fd9\u5757\u4e0d\u96be\u53ea\u6709\u76f8\u5e94\u516c\u7f51\uff0c\u5c31\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u3002\\n\\n\u5355\u72ec\u90e8\u7f72\uff0c\u5185\u90e8\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361\uff0cip addr \u6d89\u53ca\u591a\u4e2aip \uff0c\u9700\u8981\u8bbe\u7f6e\u5185\u7f51ip \u6216\u8005\u57df\u540d \uff0c\u53bb\u4e00\u4e00\u5bf9\u5e94\u3002\\n\\n### \u4f8b\u5982\\n\\n\u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361\uff0cip addr \u6d89\u53ca\u591a\u4e2aip \uff0c\u9700\u8981\u8bbe\u7f6e\u5185\u7f51ip \u6216\u8005\u57df\u540d \uff0c\u53bb\u4e00\u4e00\u5bf9\u5e94\uff0c\u6ca1\u6709\u7684\u8bdd\u7528127.0.0.1 \u5c31\u53ef\u4ee5\u3002\\n\\n\u8bbe\u7f6e Snakemq \u901a\u4fe1\\n\\n```plain\\nsoliduimodelui/.env  SNAKEMQ_LISTENER server \u76d1\u542c\u5668 \uff0c\u8bbe\u7f6e\u5185\u7f51ip\\nsoliduimodelui/.env  SNAKEMQ_CONNECTOR  \u4e0eserver \u8fde\u63a5ip  \uff0c\u8bbe\u7f6e\u5185\u7f51ip\\n```\\n\\n## Docker \u90e8\u7f72\u901a\u4fe1\\n\\n\u5bb9\u5668\u5316\u90e8\u7f72\uff0c\u5728\u6b64\u6211\u7b80\u5316\u63cf\u8ff0\uff0c\u4e0d\u5e26\u5bb9\u5668\u7ba1\u7406\u6846\u67b6\u63cf\u8ff0\uff0c\u56e0\u4e3a\u901a\u4fe1\u6700\u6839\u672c\u7684\u660e\u767d\u540e\uff0c\u5176\u5b83\u5728\u6846\u67b6\u4e2d\u4e5f\u5c31\u660e\u767d\u4e86\uff0c\u5916\u90e8\u901a\u4fe1\uff0c\u5f00\u653e\u7aef\u53e3 \uff0c\u5185\u90e8\u901a\u4fe1\uff0c\u901a\u8fc7\u8bbe\u7f6e\u7f51\u6bb5\u540d\u79f0\uff0c\u4e0d\u540c\u5bb9\u5668\u901a\u4fe1\uff0c\u901a\u8fc7\u5bb9\u5668\u540d\u79f0\u8fdb\u884c\u3002\\n\\n### \u4f8b\u5982\\n\\n> \u6570\u636e\u5e93\u8fde\u63a5\\n\\n\u5728docker-compose.yml \u4e2d\uff0c\u8bbe\u7f6e\u4e86Mysql\u6570\u636e\u5e93\u540d\u79f0\u4e3amysql \\n\\n\u6240\u4ee5solidui-entrance application.yaml  \u4e2d  datasource.url  mysql \u66ff\u6362 localhost\\n\\nsoliduimodelui/.env  DB_HOST mysql \u66ff\u6362 localhost \\n\\n> soliduimodelui/.env Snakemq \u901a\u4fe1\\n\\n```plain\\nsoliduimodelui/.env  SNAKEMQ_LISTENER server \u76d1\u542c\u5668 \uff0c\u8bbe\u7f6e0.0.0.0\\nsoliduimodelui/.env  SNAKEMQ_CONNECTOR  \u4e0eserver \u8fde\u63a5ip  \uff0c\u8bbe\u7f6esoliduimodelui\\n```\\n\\n## \u7ed3\u8bed\\n\\n\u672c\u6587\u901a\u8fc7\u8bb2\u89e3\u72ec\u7acb\u90e8\u7f72 \u548c Docker \u901a\u4fe1\u5206\u6790 \uff0c\u544a\u8bc9\u90e8\u7f72\u8bbe\u7f6eip\u65f6\u5019\u65b9\u5f0f\uff0c\u4e0d\u662f\u76f2\u76ee\u8bbe\u7f6elocalhost\u5c31\u80fd\u89e3\u51b3\uff0c\u4e3a\u5927\u5bb6\u540e\u7eed\u66f4\u597d\u5171\u5efaSolidUI\u63d0\u4f9b\u601d\u8def\u3002\\n\\n\\n## \u5982\u679c\u6210\u4e3a\u8d21\u732e\u8005\\n\\n* \u5b98\u65b9\u6587\u6863\u8d21\u732e\u3002\u53d1\u73b0\u6587\u6863\u7684\u4e0d\u8db3\u3001\u4f18\u5316\u6587\u6863\uff0c\u6301\u7eed\u66f4\u65b0\u6587\u6863\u7b49\u65b9\u5f0f\u53c2\u4e0e\u793e\u533a\u8d21\u732e\u3002\u901a\u8fc7\u6587\u6863\u8d21\u732e\uff0c\u8ba9\u5f00\u53d1\u8005\u719f\u6089\u5982\u4f55\u63d0\u4ea4PR\u548c\u771f\u6b63\u53c2\u4e0e\u5230\u793e\u533a\u7684\u5efa\u8bbe\u3002\u53c2\u8003\u653b\u7565\uff1a[https://github.com/CloudOrc/SolidUI/discussions/54](https://github.com/CloudOrc/SolidUI/discussions/54)\\n* \u4ee3\u7801\u8d21\u732e\u3002\u6211\u4eec\u68b3\u7406\u4e86\u793e\u533a\u4e2d\u7b80\u5355\u5e76\u4e14\u5bb9\u6613\u5165\u95e8\u7684\u7684\u4efb\u52a1\uff0c\u975e\u5e38\u9002\u5408\u65b0\u4eba\u505a\u4ee3\u7801\u8d21\u732e\u3002\u8bf7\u67e5\u9605\u65b0\u624b\u4efb\u52a1\u5217\u8868\uff1a[https://github.com/CloudOrc/SolidUI/issues/12](https://github.com/CloudOrc/SolidUI/issues/12)\\n* \u5185\u5bb9\u8d21\u732e\uff1a\u53d1\u5e03SolidUI\u5f00\u6e90\u7ec4\u4ef6\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u5b89\u88c5\u90e8\u7f72\u6559\u7a0b\u3001\u4f7f\u7528\u7ecf\u9a8c\u3001\u6848\u4f8b\u5b9e\u8df5\u7b49\uff0c\u5f62\u5f0f\u4e0d\u9650\uff0c\u8bf7\u6295\u7a3f\u7ed9\u5c0f\u52a9\u624b\u3002\u4f8b\u5982\uff1a[https://github.com/CloudOrc/SolidUI/issues/10](https://github.com/CloudOrc/SolidUI/issues/10)\\n* \u793e\u533a\u7b54\u7591\uff1a\u79ef\u6781\u5728\u793e\u533a\u4e2d\u8fdb\u884c\u7b54\u7591\u3001\u5206\u4eab\u6280\u672f\u3001\u5e2e\u52a9\u5f00\u53d1\u8005\u89e3\u51b3\u95ee\u9898\u7b49\uff1b\\n\u5176\u4ed6\uff1a\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u6d3b\u52a8\u3001\u6210\u4e3a\u793e\u533a\u5fd7\u613f\u8005\u3001\u5e2e\u52a9\u793e\u533a\u5ba3\u4f20\u3001\u4e3a\u793e\u533a\u53d1\u5c55\u63d0\u4f9b\u6709\u6548\u5efa\u8bae\u7b49\uff1b"},{"id":"/2023/07/02/snakemq-communication-source-code-analysis","metadata":{"permalink":"/zh-CN/blog/2023/07/02/snakemq-communication-source-code-analysis","editUrl":"https://github.com/CloudOrc/SolidUI-Website/edit/dev/blog/2023-07-02-snakemq-communication-source-code-analysis.md","source":"@site/blog/2023-07-02-snakemq-communication-source-code-analysis.md","title":"SolidUI\u793e\u533a-Snakemq\u901a\u4fe1\u6e90\u7801\u5206\u6790","description":"\u80cc\u666f","date":"2023-07-02T00:00:00.000Z","formattedDate":"2023\u5e747\u67082\u65e5","tags":[{"label":"SolidUI","permalink":"/zh-CN/blog/tags/solid-ui"},{"label":"AIGC","permalink":"/zh-CN/blog/tags/aigc"},{"label":"stable-diffusion","permalink":"/zh-CN/blog/tags/stable-diffusion"}],"readingTime":6.275,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"SolidUI\u793e\u533a-Snakemq\u901a\u4fe1\u6e90\u7801\u5206\u6790","date":"2023-07-02T00:00:00.000Z","tags":["SolidUI","AIGC","stable-diffusion"]},"prevItem":{"title":"SolidUI\u793e\u533a-\u72ec\u7acb\u90e8\u7f72\u548cDocker\u901a\u4fe1\u5206\u6790","permalink":"/zh-CN/blog/2023/07/03/independent-deployment-communication-analysis"},"nextItem":{"title":"SolidUI AI\u751f\u6210\u53ef\u89c6\u5316\uff0c\u5f00\u521b\u6027\u5f00\u6e90\u9879\u76ee\uff0c\u7248\u672c0.1.0 \u529f\u80fd\u8bb2\u89e3","permalink":"/zh-CN/blog/2023/07/01/function-explanation-0.1.0"}},"content":"## \u80cc\u666f\\n\\n\u968f\u7740\u6587\u672c\u751f\u6210\u56fe\u50cf\u7684\u8bed\u8a00\u6a21\u578b\u5174\u8d77\uff0cSolidUI\u60f3\u5e2e\u4eba\u4eec\u5feb\u901f\u6784\u5efa\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u53ef\u89c6\u5316\u5185\u5bb9\u5305\u62ec2D,3D,3D\u573a\u666f\uff0c\u4ece\u800c\u5feb\u901f\u6784\u4e09\u7ef4\u6570\u636e\u6f14\u793a\u573a\u666f\u3002SolidUI \u662f\u4e00\u4e2a\u521b\u65b0\u7684\u9879\u76ee\uff0c\u65e8\u5728\u5c06\u81ea\u7136\u8bed\u8a00\u5904\u7406\uff08NLP\uff09\u4e0e\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u76f8\u7ed3\u5408\uff0c\u5b9e\u73b0\u6587\u751f\u56fe\u529f\u80fd\u3002\u901a\u8fc7\u6784\u5efa\u81ea\u7814\u7684\u6587\u751f\u56fe\u8bed\u8a00\u6a21\u578b\uff0cSolidUI \u5229\u7528 RLHF (Reinforcement Learning Human Feedback) \u6d41\u7a0b\u5b9e\u73b0\u4ece\u6587\u672c\u63cf\u8ff0\u5230\u56fe\u5f62\u751f\u6210\u7684\u8fc7\u7a0b\u3002\\n\\n\u9879\u76ee\u5730\u5740: [https://github.com/CloudOrc/SolidUI](https://github.com/CloudOrc/SolidUI)\\n\\n\u9879\u76ee\u955c\u50cf\u5730\u5740: [https://gitee.com/CloudOrc/SolidUI](https://gitee.com/CloudOrc/SolidUI)\\n\\n## Snakemq\u4ecb\u7ecd\\n\\nSnakeMQ\u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6d88\u606f\u961f\u5217(MQ)\u7cfb\u7edf,\u4e3b\u8981\u7528\u4e8e\u5728Python\u4e2d\u5b9e\u73b0\u5f02\u6b65\u4efb\u52a1\u961f\u5217\u548c\u6d88\u606f\u4f20\u9012\u3002\\n\\nSolidUI \u6a21\u578b\u4ee3\u7406\u6a21\u5757\uff08soliduimodelui\uff09 \u7528\u5230Snakemq , \u6d89\u53ca\u5230\u5185\u90e8\u901a\u4fe1\u65f6\u5019\uff0c\u5982\u679cclient \u548cserver \u4e0d\u4e00\u4e00\u5bf9\u5e94\uff0c\u901a\u4fe1\u5c31\u6709\u95ee\u9898\uff0c\u867d\u7136\u65e5\u5fd7\u4e0d\u62a5\u9519\uff0c\u4f46\u662f\u4e0d\u56de\u8fd4\u56de\u7ed3\u679c\uff0c\u672c\u6587\u4e3b\u8981\u8bb2\u76f8\u5173\u901a\u4fe1\u95ee\u9898\uff0c\u4e3a\u540e\u7eed\u5171\u5efa\u4f19\u4f34\u63d0\u4f9b\u89e3\u51b3\u601d\u8def\u3002\\n\\n## Snakemq\u4f5c\u7528\\n\\n## \\n* \u8f7b\u91cf\u7ea7\u548c\u6613\u4e8e\u4f7f\u7528 - SnakeMQ\u4f7f\u7528\u7eafPython\u7f16\u5199,\u65e0\u4efb\u4f55\u5916\u90e8\u4f9d\u8d56,\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5728\u4efb\u4f55Python\u9879\u76ee\u4e2d\u96c6\u6210\u4f7f\u7528\u3002\\n* \u652f\u6301\u4e3b\u6d41\u534f\u8bae - SnakeMQ\u5b9e\u73b0\u4e86STOMP\u548cAMQP\u7b49\u4e3b\u6d41\u7684MQ\u534f\u8bae\u3002\\n* \u591a\u79cd\u6d88\u606f\u6a21\u578b - \u652f\u6301\u53d1\u5e03-\u8ba2\u9605\u3001\u5de5\u4f5c\u961f\u5217\u3001\u8bf7\u6c42-\u54cd\u5e94\u7b49\u591a\u79cd\u6d88\u606f\u6a21\u578b\u3002\\n* \u6301\u4e45\u5316\u652f\u6301 - \u652f\u6301\u5c06\u6d88\u606f\u6301\u4e45\u5316\u5230\u4e0d\u540c\u7684\u540e\u7aef,\u5982Redis\u3001MongoDB\u7b49\u3002\\n* \u9ad8\u6027\u80fd - SnakeMQ\u9488\u5bf9Python\u8fdb\u884c\u4e86\u4f18\u5316,\u5355\u673a\u53ef\u4ee5\u5904\u7406\u4e0a\u4e07\u6d88\u606f\u6bcf\u79d2\u3002\\n* \u53ef\u6269\u5c55 - \u53ef\u4ee5\u6c34\u5e73\u6269\u5c55\u4ee5\u5b9e\u73b0\u96c6\u7fa4,\u63d0\u9ad8\u7cfb\u7edf\u6574\u4f53\u541e\u5410\u91cf\u3002\\n* \u591a\u8bed\u8a00\u652f\u6301 - \u9664\u4e86Python SDK,\u8fd8\u63d0\u4f9b\u4e86NodeJS\u3001Java\u7b49\u8bed\u8a00\u7684SDK\u3002\\n\\nSolidUI \u4e2d soliduimodelui\u6a21\u5757\uff0c\u662f\u6a21\u578b\u4ee3\u7406API\uff0c\u9700\u8981Web\u548c Kernel \u901a\u4fe1\u7528\u5230Snakemq \\n\\n## Snakemq \u6d4b\u8bd5\u4ee3\u7801\\n\\n\\n> Snakemq client.py\\n\\n\\n```plain\\n\\nimport snakemq.link\\nimport snakemq.packeter\\nimport snakemq.messaging\\nimport snakemq.rpc\\nimport time\\nimport json\\nimport logging\\n\\n\\nlogging.basicConfig(format=\\"[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s\\")\\n\\n\\nlogger = logging.getLogger(__name__)\\n\\n\\nlogger.setLevel(logging.INFO)\\n\\n\\nconsole_handler = logging.StreamHandler()\\n\\n\\nconsole_handler.setLevel(logging.INFO)\\n\\n\\nlogger.addHandler(console_handler)\\n\\n\\nlogger.setLevel(logging.INFO)\\n\\n\\nfh = logging.FileHandler(\'app.log\')\\n\\n\\nlogger.addHandler(fh)\\n\\n\\nlink = snakemq.link.Link()\\n\\n\\npacketer = snakemq.packeter.Packeter(link)\\n\\n\\nmessaging = snakemq.messaging.Messaging(\\"client\\", \\"\\", packeter)\\n\\n\\nconnector = (\\"server\\", 8765)\\n\\n\\nlink.add_connector(connector)\\n\\n\\ndef on_connect(connector_id):\\n\\n\\n    logger.info(f\\"Connected to: {connector_id}\\")\\n\\n\\nlink.on_connect.add(on_connect)\\n\\n\\ndef on_disconnect(connector_id):\\n\\n\\n    logger.info(f\\"\u5df2\u65ad\u5f00: {connector_id}\\")\\n\\n\\nlink.on_disconnect.add(on_disconnect)\\n\\n\\n\\ndef on_recv(conn, ident, message):\\n\\n\\n    logger.info(f\\"client\u63a5\u6536\u5230: {message.data}, \u6765\u81ea: {ident}\\")\\n\\n\\nmessaging.on_message_recv.add(on_recv)\\n\\n\\nmessage = snakemq.message.Message(json.dumps({\\"type\\": \\"status\\", \\"value\\": \\"ready\\"}).encode(\\"utf-8\\"), ttl=600)\\n\\n\\nmessaging.send_message(\\"server\\", message)\\n\\n\\nwhile True:\\n\\n\\n    link.loop()\\n\\n\\n    time.sleep(0.1)\\n\\n\\n```\\n\\n\\n> Snakemq server.py\\n\\n\\n```plain\\n\\nimport snakemq.link\\nimport snakemq.packeter\\nimport snakemq.messaging\\nimport snakemq.rpc\\nimport time\\nimport json\\nimport logging\\n\\n\\nlogging.basicConfig(format=\\"[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s\\")\\n\\n\\nlogger = logging.getLogger(__name__)\\n\\n\\nlogger.setLevel(logging.INFO)\\n\\n\\nconsole_handler = logging.StreamHandler()\\n\\n\\nconsole_handler.setLevel(logging.INFO)\\n\\n\\nlogger.addHandler(console_handler)\\n\\n\\nlogger.setLevel(logging.INFO)\\n\\n\\nfh = logging.FileHandler(\'app.log\')\\n\\n\\nlogger.addHandler(fh)\\n\\n\\nlink = snakemq.link.Link()\\n\\n\\npacketer = snakemq.packeter.Packeter(link)\\n\\n\\nmessaging = snakemq.messaging.Messaging(\\"server\\", \\"\\", packeter)\\n\\n\\nlink.add_listener((\\"0.0.0.0\\", 8765))\\n\\n\\ndef on_recv(conn, ident, message):\\n\\n\\n    logger.info(f\\"server\u63a5\u6536\u5230: {message.data}, \u6765\u81ea: {ident}\\")\\n\\n\\nmessaging.on_message_recv.add(on_recv)\\n\\n\\n\\nmessage = snakemq.message.Message(json.dumps( {\\"type\\": \\"execute\\", \\"value\\": \\"abc\\"}).encode(\\"utf-8\\"), ttl=600)\\n\\n\\nmessaging.send_message(\\"client\\", message)\\n\\n\\n# Main loop\\n\\n\\nwhile True:\\n\\n\\n    link.loop()\\n\\n\\n    time.sleep(0.1)\\n\\n\\n```\\n\\n\\n> Dockerfile\\n\\n```shell script\\nFROM python:3.8\\nWORKDIR /opt/snaketmq-test\\n\\nRUN pip install snakemq\\nRUN python -c \\"import snakemq; print(snakemq.__file__); print(dir(snakemq))\\"\\nCOPY . .\\n\\nCMD [\\"python\\", \\"server.py\\"]\\n```\\n\\n\\n> Dockerfile  build & run\\n\\n```shell script\\ndocker build -t snaketmq-test .\xa0\\n\\ndocker network create mynet\\n\\ndocker run -d --name server --network mynet\xa0 snaketmq-test\\n\\ndocker run --network mynet\xa0 snaketmq-test python client.py\\n```\\n\\n\\n\\n## Snakemq\u901a\u4fe1\\n\\n\u6ce8\u610f\uff1aSnakemq \u6d4b\u8bd5\u4ee3\u7801\uff0c\u56e0\u4e3a\u5bb9\u5668\u5185\u901a\u4fe1\uff0cip addr \u4f1a\u6d89\u53ca\u5230\u591a\u4e2aip \uff0c\u867d\u7136\u5bb9\u5668\u8bbe\u7f6e\u7f51\u6bb5mynet \uff0c\u4f46\u662f server  link.add_listener((\\"0.0.0.0\\", 8765))  \u8fd9\u884c\u4ee3\u7801 \\n\\n* server: \u8868\u793aSnakeMQ\u7684\u670d\u52a1\u5668\u5b9e\u4f8b\u3002\\n* link: server\u4e2d\u7684link\u5c5e\u6027,\u8868\u793a\u7f51\u7edc\u8fde\u63a5\u7ba1\u7406\u5668\u3002\\n* add_listener: \u5411link\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u5668\u3002\\n* (\\"0.0.0.0\\", 8765): \u76d1\u542c\u7684\u5730\u5740\u548c\u7aef\u53e3\u3002\\"0.0.0.0\\"\u8868\u793a\u76d1\u542c\u6240\u6709\u7f51\u5361\u5730\u5740,\\"8765\\"\u8868\u793a\u76d1\u542c8765\u7aef\u53e3\u3002\\nclient  connector = (\\"server\\", 8765)  link.add_connector(connector) \u8fd9\u884c\u4ee3\u7801\\n\\n* connector = (\\"server\\", 8765) : \u521b\u5efa\u4e00\u4e2a\u5143\u7ec4connector,\u91cc\u9762\u5305\u542b\u4e86SnakeMQ\u670d\u52a1\u5668\u7684\u5730\u5740\\"server\\"\u548c\u7aef\u53e38765\u3002\\n* link.add_connector(connector): \u8c03\u7528link\u5bf9\u8c61(\u8fd9\u91cc\u5e94\u8be5\u662fSnakeMQ\u7684\u8fde\u63a5\u5bf9\u8c61)\u7684add_connector\u65b9\u6cd5,\u4f20\u5165\u53c2\u6570connector,\u5c06\u4e0a\u4e00\u6b65\u521b\u5efa\u7684\u8fde\u63a5\u4fe1\u606f\u6dfb\u52a0\u5230\u8fde\u63a5\u5bf9\u8c61\u4e2d\u3002\\n* \u7efc\u5408\u6765\u770b,\u8fd9\u884c\u4ee3\u7801\u7684\u4f5c\u7528\u5c31\u662f\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\u5143\u7ec4,\u5305\u542bSnakeMQ\u670d\u52a1\u5668\u7684\u5730\u5740\u548c\u7aef\u53e3,\u7136\u540e\u5c06\u8fd9\u4e2a\u8fde\u63a5\u4fe1\u606f\u6dfb\u52a0\u5230SnakeMQ\u7684\u8fde\u63a5\u5bf9\u8c61\u4e2d,\u4ee5\u5efa\u7acbSnakeMQ\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u3002\\n\\n## \u7ed3\u8bed\\n\\n\u672c\u6587\u901a\u8fc7Snakemq \u6848\u4f8b \u6765\u89e3\u91caSolidUI \u5185\u90e8\u901a\u4fe1\uff0c\u8ba9\u5927\u5bb6\u660e\u767d\u914d\u7f6e\u5730\u5740\u65f6\u5019ip \u4e3a\u4ec0\u4e48\u8fd9\u6837\u8bbe\u7f6e\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u4e00\u4e00\u5bf9\u5e94\uff0c\u4e0d\u662f\u76f2\u76ee\u8bbe\u7f6elocalhost\u5c31\u80fd\u89e3\u51b3\uff0c\u4e3a\u5927\u5bb6\u540e\u7eed\u66f4\u597d\u5171\u5efaSolidUI\u63d0\u4f9b\u601d\u8def\u3002\\n\\n\\n\\n## \u5982\u679c\u6210\u4e3a\u8d21\u732e\u8005\\n\\n* \u5b98\u65b9\u6587\u6863\u8d21\u732e\u3002\u53d1\u73b0\u6587\u6863\u7684\u4e0d\u8db3\u3001\u4f18\u5316\u6587\u6863\uff0c\u6301\u7eed\u66f4\u65b0\u6587\u6863\u7b49\u65b9\u5f0f\u53c2\u4e0e\u793e\u533a\u8d21\u732e\u3002\u901a\u8fc7\u6587\u6863\u8d21\u732e\uff0c\u8ba9\u5f00\u53d1\u8005\u719f\u6089\u5982\u4f55\u63d0\u4ea4PR\u548c\u771f\u6b63\u53c2\u4e0e\u5230\u793e\u533a\u7684\u5efa\u8bbe\u3002\u53c2\u8003\u653b\u7565\uff1a[https://github.com/CloudOrc/SolidUI/discussions/54](https://github.com/CloudOrc/SolidUI/discussions/54)\\n* \u4ee3\u7801\u8d21\u732e\u3002\u6211\u4eec\u68b3\u7406\u4e86\u793e\u533a\u4e2d\u7b80\u5355\u5e76\u4e14\u5bb9\u6613\u5165\u95e8\u7684\u7684\u4efb\u52a1\uff0c\u975e\u5e38\u9002\u5408\u65b0\u4eba\u505a\u4ee3\u7801\u8d21\u732e\u3002\u8bf7\u67e5\u9605\u65b0\u624b\u4efb\u52a1\u5217\u8868\uff1a[https://github.com/CloudOrc/SolidUI/issues/12](https://github.com/CloudOrc/SolidUI/issues/12)\\n* \u5185\u5bb9\u8d21\u732e\uff1a\u53d1\u5e03SolidUI\u5f00\u6e90\u7ec4\u4ef6\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u5b89\u88c5\u90e8\u7f72\u6559\u7a0b\u3001\u4f7f\u7528\u7ecf\u9a8c\u3001\u6848\u4f8b\u5b9e\u8df5\u7b49\uff0c\u5f62\u5f0f\u4e0d\u9650\uff0c\u8bf7\u6295\u7a3f\u7ed9\u5c0f\u52a9\u624b\u3002\u4f8b\u5982\uff1a[https://github.com/CloudOrc/SolidUI/issues/10](https://github.com/CloudOrc/SolidUI/issues/10)\\n* \u793e\u533a\u7b54\u7591\uff1a\u79ef\u6781\u5728\u793e\u533a\u4e2d\u8fdb\u884c\u7b54\u7591\u3001\u5206\u4eab\u6280\u672f\u3001\u5e2e\u52a9\u5f00\u53d1\u8005\u89e3\u51b3\u95ee\u9898\u7b49\uff1b\\n\u5176\u4ed6\uff1a\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u6d3b\u52a8\u3001\u6210\u4e3a\u793e\u533a\u5fd7\u613f\u8005\u3001\u5e2e\u52a9\u793e\u533a\u5ba3\u4f20\u3001\u4e3a\u793e\u533a\u53d1\u5c55\u63d0\u4f9b\u6709\u6548\u5efa\u8bae\u7b49\uff1b"},{"id":"/2023/07/01/function-explanation-0.1.0","metadata":{"permalink":"/zh-CN/blog/2023/07/01/function-explanation-0.1.0","editUrl":"https://github.com/CloudOrc/SolidUI-Website/edit/dev/blog/2023-07-01-function-explanation-0.1.0.md","source":"@site/blog/2023-07-01-function-explanation-0.1.0.md","title":"SolidUI AI\u751f\u6210\u53ef\u89c6\u5316\uff0c\u5f00\u521b\u6027\u5f00\u6e90\u9879\u76ee\uff0c\u7248\u672c0.1.0 \u529f\u80fd\u8bb2\u89e3","description":"\u80cc\u666f","date":"2023-07-01T00:00:00.000Z","formattedDate":"2023\u5e747\u67081\u65e5","tags":[{"label":"SolidUI","permalink":"/zh-CN/blog/tags/solid-ui"},{"label":"AIGC","permalink":"/zh-CN/blog/tags/aigc"},{"label":"stable-diffusion","permalink":"/zh-CN/blog/tags/stable-diffusion"}],"readingTime":5.475,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"SolidUI AI\u751f\u6210\u53ef\u89c6\u5316\uff0c\u5f00\u521b\u6027\u5f00\u6e90\u9879\u76ee\uff0c\u7248\u672c0.1.0 \u529f\u80fd\u8bb2\u89e3","date":"2023-07-01T00:00:00.000Z","tags":["SolidUI","AIGC","stable-diffusion"]},"prevItem":{"title":"SolidUI\u793e\u533a-Snakemq\u901a\u4fe1\u6e90\u7801\u5206\u6790","permalink":"/zh-CN/blog/2023/07/02/snakemq-communication-source-code-analysis"}},"content":"## \u80cc\u666f\\n\u968f\u7740\u6587\u672c\u751f\u6210\u56fe\u50cf\u7684\u8bed\u8a00\u6a21\u578b\u5174\u8d77\uff0cSolidUI\u60f3\u5e2e\u4eba\u4eec\u5feb\u901f\u6784\u5efa\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u53ef\u89c6\u5316\u5185\u5bb9\u5305\u62ec2D,3D,3D\u573a\u666f\uff0c\u4ece\u800c\u5feb\u901f\u6784\u4e09\u7ef4\u6570\u636e\u6f14\u793a\u573a\u666f\u3002SolidUI \u662f\u4e00\u4e2a\u521b\u65b0\u7684\u9879\u76ee\uff0c\u65e8\u5728\u5c06\u81ea\u7136\u8bed\u8a00\u5904\u7406\uff08NLP\uff09\u4e0e\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u76f8\u7ed3\u5408\uff0c\u5b9e\u73b0\u6587\u751f\u56fe\u529f\u80fd\u3002\u901a\u8fc7\u6784\u5efa\u81ea\u7814\u7684\u6587\u751f\u56fe\u8bed\u8a00\u6a21\u578b\uff0cSolidUI \u5229\u7528 RLHF (Reinforcement Learning Human Feedback) \u6d41\u7a0b\u5b9e\u73b0\u4ece\u6587\u672c\u63cf\u8ff0\u5230\u56fe\u5f62\u751f\u6210\u7684\u8fc7\u7a0b\u3002\\n\\nhttps://github.com/CloudOrc/SolidUI\\n\\n## \u9879\u76ee\u540d\u5b57\u542b\u4e49\\nSolidUI  Solid\u8868\u793a\u7acb\u65b9\u51e0\u4f55\uff0cUI\u8868\u793a\u8bbe\u8ba1\u4ea4\u4e92\uff0c\u4ee3\u8868\u591a\u7ef4\u751f\u6210\u8bbe\u8ba1\u3002\\n\\n## \u767b\u5f55\u9875\u542b\u4e49\\n\\n\u767b\u5f55\u9875\u7684\u542b\u4e49\uff0clogo \u7528\u773c\u955c\u7684\u5f62\u72b6\uff0c\u8868\u793a\u89c2\u5bdf\u4e16\u754c \uff0c\u80cc\u666f\u90a3\u4e9b\u7ebf\u6761\u662f\u901a\u8fc7\u773c\u775b\u89c2\u770b\u5f97\u51fa\u56fe\u5f62\uff0c\u6df1\u5c42\u610f\u601d\u8868\u793a\u521b\u610f\u751f\u6210\u4e16\u754c\u3002\\n![\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0](/blog/home.png)\\n\\n\\n## \u4ea7\u54c1\u601d\u7ef4\\n\\n\u201c\u5c11\u5c31\u662f\u591a\u201d\\n\\n\u5c11\u5c31\u662f\u591a\uff0c\u610f\u601d\u662f\u4e0d\u65ad\u7cbe\u7b80\u65b9\u6848\u91cc\u7684\u5143\u7d20\uff0c\u53ea\u7559\u4e0b\u6709\u4ef7\u503c\u7684\uff1b\u5176\u4f59\u4e0d\u91cd\u8981\u7684\uff0c\u8981\u4e48\u76f4\u63a5\u5220\u6389\uff0c\u8981\u4e48\u4ece\u754c\u9762\u91cc\u9690\u85cf\u8d77\u6765\u3002\u5bf9\u4e8e\u90a3\u4e9b\u4e0d\u5e38\u7528\u7684\u64cd\u4f5c\uff0c\u9690\u85cf\u4e4b\u540e\uff0c\u5373\u4f7f\u7528\u6237\u591a\u8fdb\u884c\u51e0\u6b65\u64cd\u4f5c\u4e5f\u6ca1\u6709\u5173\u7cfb\u3002\\n## 0.1.0 \u7248\u672c\u5185\u6db5\\n\u8fd9\u4e2a\u7248\u672c\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u7248\u672c\uff0c\u8bbe\u60f3\u4f5c\u4e3a\u5e94\u7528\u6846\u67b6\uff0c\u5177\u6709\u901a\u7528\u53ef\u89c6\u5316\u6846\u67b6\u80fd\u529b\uff0c\u4e0d\u56e0\u4e00\u4e9b\u6570\u636e\u7ba1\u7406\uff0cBI\u7b49\u4e00\u4e9b\u65e7\u601d\u7ef4\u5f71\u54cd\uff0c\u53ea\u505a\u5e94\u7528\u6846\u67b6\uff0c\u6240\u4ee5\u5f88\u591a\u4e1c\u897f\u90fd\u88ab\u53bb\u9664\u4e86\uff0cAI\u751f\u6210\u4f1a\u5f7b\u5e95\u6539\u53d8\u4f7f\u7528\u4e60\u60ef\u3002\\n\\n## \u529f\u80fd\u5217\u8868\\n\\n\u4e0b\u9762\u4ecb\u7ecd\u4e0b\u6574\u4e2a\u7b2c\u4e00\u4e2a\u7248\u672c\u529f\u80fd\u5217\u8868\u3002\\n### \u6570\u636e\u6e90\u7ba1\u7406\\n\\n* \u663e\u793a\u6570\u636e\uff1a\u663e\u793a\u6240\u6709\u6570\u636e\u6e90\uff0c\u5305\u62ec\u5e8f\u53f7\uff0c\u6570\u636e\u6e90\u540d\u79f0\uff0c\u6570\u636e\u6e90\u7c7b\u578b\uff0c\u7528\u6237\uff0c\u63cf\u8ff0\u4fe1\u606f\u548c\u64cd\u4f5c\u6309\u94ae\u3002\\n* \u6dfb\u52a0MySQL\u6570\u636e\u6e90\uff1a\u8f93\u5165\u6570\u636e\u6e90\u540d\u79f0\uff0c\u6570\u636e\u6e90\u9a71\u52a8\uff0cURL\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\uff0c\u5907\u6ce8\u540e\uff0c\u53ef\u4ee5*\\n  \u6210\u529f\u6dfb\u52a0MySQL\u6570\u636e\u6e90\uff0c\u5e76\u5728\u6570\u636e\u6e90\u5217\u8868\u4e2d\u663e\u793a\u3002\\n* \u6dfb\u52a0Doris\u6570\u636e\u6e90\uff1a\u8f93\u5165\u6570\u636e\u6e90\u540d\u79f0\uff0c\u6570\u636e\u6e90\u9a71\u52a8\uff0cURL\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\uff0c\u5907\u6ce8\u540e\uff0c\u53ef\u4ee5\u6210\u529f\u6dfb\u52a0Doris\u6570\u636e\u6e90\uff0c\u5e76\u5728\u6570\u636e\u6e90\u5217\u8868\u4e2d\u663e\u793a\u3002\\n* \u7f16\u8f91\u6570\u636e\u6e90\uff1a\u53ef\u4ee5\u7f16\u8f91\u6570\u636e\u6e90\u7684\u540d\u79f0\uff0c\u6570\u636e\u6e90\u9a71\u52a8\uff0cURL\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\uff0c\u5907\u6ce8\uff0c\u5e76\u5728\u6570\u636e\u6e90\u5217\u8868\u4e2d\u67e5\u770b\u7f16\u8f91\u540e\u7684\u4fe1\u606f\u3002\\n* \u5355\u884c\u5220\u9664\u6570\u636e\u6e90\uff1a\u901a\u8fc7\u8f93\u5165\u8981\u5220\u9664\u7684\u6570\u636e\u6e90\u540d\u79f0\uff0c\u53ef\u4ee5\u6210\u529f\u5220\u9664\u8be5\u6570\u636e\u6e90\uff0c\u5e76\u4e14\u8be5\u6570\u636e\u6e90\u4e0d\u518d\u663e\u793a\u5728\u6570\u636e\u6e90\u5217\u8868\u4e2d\u3002\\n* \u6570\u636e\u6e90\u8fc7\u671f\uff1a\u53ef\u4ee5\u5c06\u9009\u4e2d\u7684\u6570\u636e\u6e90\u8bbe\u7f6e\u4e3a\u8fc7\u671f\u72b6\u6001\u3002\\n  ![\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0](/blog/datasource.png)\\n\\n### \u9879\u76ee\u7ba1\u7406\\n\\n* \u6dfb\u52a0\u9879\u76ee\uff1a\u8f93\u5165\u9879\u76ee\u540d\u79f0\uff0c\u9879\u76ee\u63cf\u8ff0\uff0c\u9879\u76eeURL\u540e\uff0c\u53ef\u4ee5\u6210\u529f\u6dfb\u52a0\u9879\u76ee\uff0c\u5e76\u5728\u9879\u76ee\u5217\u8868\u4e2d\u663e\u793a\u65b0\u589e\u7684\u9879\u76ee\u4fe1\u606f\u3002\\n* \u67e5\u8be2\u9879\u76ee\u5217\u8868\uff1a\u901a\u8fc7\u8f93\u5165\u9879\u76ee\u540d\u79f0\uff0c\u53ef\u4ee5\u67e5\u8be2\u5e76\u8f93\u51fa\u9879\u76ee\u5217\u8868\u3002\\n* \u7f16\u8f91\u9879\u76ee\u540d\uff1a\u53ef\u4ee5\u7f16\u8f91\u9879\u76ee\u540d\u79f0\uff0c\u5e76\u5728\u9879\u76ee\u5217\u8868\u4e2d\u67e5\u770b\u7f16\u8f91\u540e\u7684\u9879\u76ee\u4fe1\u606f\u3002\\n* \u5220\u9664\u9879\u76ee\uff1a\u901a\u8fc7\u8f93\u5165\u8981\u5220\u9664\u7684\u9879\u76ee\u540d\u79f0\uff0c\u53ef\u4ee5\u6210\u529f\u5220\u9664\u8be5\u9879\u76ee\uff0c\u5e76\u4e14\u8be5\u9879\u76ee\u4e0d\u518d\u663e\u793a\u5728\u9879\u76ee\u5217\u8868\u4e2d\u3002\\n* \u9879\u76ee\u9884\u89c8\\n\\n\\n### \u8bbe\u8ba1\u9875\u9762\\n\\n* \u573a\u666f,\u589e\u52a0\uff0c\u4fee\u6539\uff0c\u5220\u9664\uff0c\u91cd\u547d\u540d\u3002\\n* \u9875\uff0c\u589e\u52a0\uff0c\u4fee\u6539\uff0c\u5220\u9664\uff0c\u91cd\u547d\u540d\u3002\\n* \u6dfb\u52a0\u56fe\u4f8b\uff1a\u5728\u6307\u5b9a\u573a\u666f\u548c\u9875\u4e0b\u6dfb\u52a0\u56fe\u4f8b\uff0c\u5e76\u4e3a\u5176\u547d\u540d\u3002\u521b\u5efa\u6210\u529f\u540e\uff0c\u6240\u5728\u9875\u4e2d\u663e\u793a\u5bf9\u5e94\u7684\u56fe\u4f8b\u3002\\n* \u6253\u5f00\u6570\u636e\u9009\u62e9\u6ed1\u7a97\uff1a\u5728\u6307\u5b9a\u573a\u666f\u3001\u9875\u548c\u56fe\u4f8b\u4e0b\uff0c\u6253\u5f00\u6570\u636e\u9009\u62e9\u6ed1\u7a97\u3002\u6ed1\u7a97\u6253\u5f00\u6210\u529f\uff0c\u663e\u793a\u6570\u636e\u6e90\u7c7b\u578b\u3001\u6570\u636e\u6e90\u548cSQL\u8f93\u5165\u6846\u3002\\n* \u9009\u62e9\u6570\u636e\u6e90\u7c7b\u578b\uff1a\u9009\u62e9\u6570\u636e\u6e90\u7c7b\u578b\uff08\u5982\u6570\u636e\u5e93\uff09\uff0c\u6210\u529f\u540e\u663e\u793a\u4e0e\u6240\u9009\u6570\u636e\u6e90\u7c7b\u578b\u76f8\u5173\u7684\u6570\u636e\u6e90\u9009\u9879\u3002\\n* \u9009\u62e9\u6570\u636e\u6e90\uff1a\u9009\u62e9\u7279\u5b9a\u7684\u6570\u636e\u6e90\uff08\u5982MySQL\u6570\u636e\u5e931\uff09\uff0c\u6210\u529f\u540e\u53ef\u4ee5\u8f93\u5165SQL\u67e5\u8be2\u8bed\u53e5\u3002\\n* \u8f93\u5165SQL\u67e5\u8be2\u8bed\u53e5\uff1a\u8f93\u5165SQL\u67e5\u8be2\u8bed\u53e5\u5e76\u6267\u884c\uff0c\u67f1\u5f62\u56fe\u6839\u636e\u67e5\u8be2\u8fd4\u56de\u7684\u6570\u636e\u8fdb\u884c\u7ed8\u5236\u3002\\n* \u4fdd\u5b58\u9875\u9762\uff1a\u4fdd\u5b58\u5305\u62ec\u56fe\u4f8b\u548c\u5173\u8054\u6570\u636e\u8bbe\u7f6e\u5728\u5185\u7684\u9875\u9762\uff0c\u4ee5\u4fbf\u540e\u7eed\u67e5\u770b\u548c\u7f16\u8f91\u3002\\n* \u9884\u89c8\u573a\u666f\uff1a\u9884\u89c8\u6574\u4e2a\u573a\u666f\uff0c\u6309\u7167\u573a\u666f\u548c\u9875\u7684\u987a\u5e8f\u67e5\u770b\u5df2\u521b\u5efa\u7684\u56fe\u8868\u3002\\n\\n![\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0](/blog/desgin.png)"}]}')}}]);