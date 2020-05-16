# network-traffic-statistics-pannel

网络流量统计面板

## 特性

- 实时流量和统计
- 可视化图表面板

## 原理

启动一个服务器端口，通过原生调用系统脚本获取实时流量，每3秒一次，记录进数据库。前端界面通过读取数据并通过图表展示出来。

## 涉及技术栈

- node 全栈
- 脚本调用
- 文件处理

## 记录流量

调用一次 sar 查询，会耗时 1s，得到 1 秒的总流量从而得出平均网速。解析取两列：接收速度和发送速度。

```
rxkB/s    txkB/s
```

加上时间戳就可以计算

## 查询流量

需要使用数据库

## 图表

首次加入时的样子：

![首次加入](./Snipaste_2020-05-16_09-10-59.png)

加入数据库后：

![加入数据库](./Snipaste_2020-05-16_10-50-00.png)

后台开始记录数据：

![后台开始记录数据](./Snipaste_2020-05-16_13-27-13.png)

最后调整优化：

![调整优化](./Snipaste_2020-05-16_14-41-23.png)

## References

1. [SAR 命令的解析及使用 - 简书](https://www.jianshu.com/p/0aa4f69029e9)
