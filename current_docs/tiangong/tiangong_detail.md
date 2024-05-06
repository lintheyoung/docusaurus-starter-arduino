---
id: tiangong
sidebar_position: 3
---

# 2024 天宫建设资料汇总
![天宫建设2024](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE2024%E4%B8%BB%E5%9B%BE.png)

# 图文装配教程（0428更新）
- [图文装配教程下载（0428）](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE%E8%A3%85%E9%85%8D%E6%8C%87%E5%8D%97-0428-%E5%8E%8B%E7%BC%A9.pdf)

# 图文教程（0505更新）
## 地图构建与机器人启动
![地图构建节点](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%871.JPG)
![启动的方法](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%872.JPG)
- [启动机器人视频教程（0424及其之前代码）](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%90%AF%E5%8A%A8%E6%96%B9%E6%B3%95.mp4)


## 软件安装与函数解析
### 米思齐安装 
- [米思齐RC3下载（0415）](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/mixly2.0-win32-x64-0415.zip)
下载后解压双击打开**Mixly.exe**即可，请将文件放在C盘下，不要有中文路径。

### Arduino UNO R4驱动安装
如果电脑没有自动安装对应驱动，需要手动安装一下，安装方法如下：
- [Arduino UNO R4驱动下载](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/Arduino-UNO-R4-%E9%A9%B1%E5%8A%A8.zip)
安装先解压压缩包，双击其中**dpinst-amd64.zip**，后面全部确定即可。

### Arduino UNO R4在米思齐要选择正确
![米思齐要选择正确](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/ArduinoR4.png)

### 天宫建设-米思齐程序（0505更新）
- [0319程序](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/TianGongJianShe0319.mix)
- [0424程序](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/TianGongJianShe0424.mix)
- [0426程序](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/TianGongJianShe0426.mix)
- [0505程序](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/TianGongJianShe0505.mix)


- [用于装配车子测试舵机电机程序](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/TianGongJianSZhuangPei.mix)
#### 更新说明
- 0319程序-完成了天宫建设所有功能（循迹、抓取、二维码识别）实现与稳定性测试；
- 0424程序-修复个别车子启动时候陀螺仪没有初始化成功；
- 0424程序-加入手动选择二维码区域显示对应的颜色；
- 0426程序-单边转弯；
- 0426程序-不依赖陀螺仪的转弯（在当前的角度下，转动多少角度）；
- 0426程序-加入了三个按钮的输入模块；
- 0426程序-修复舵机有老师反馈有时不动的问题；
- 0505程序-增加可以选择程序的入口；
- 用于装配车子测试舵机电机程序-按下第一次初始化舵机角度，再次按下前进一段距离后退一段距离；

### 天宫建设-操作视频（点击链接可播放）
- [初始化底部灰度传感器](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/%E5%88%9D%E5%A7%8B%E5%8C%96%E7%81%B0%E5%BA%A6.mp4)
- [0424程序选择颜色与启动](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/0424%E5%90%AF%E5%8A%A8%E6%96%B9%E6%B3%95.mp4)
- [0426程序如何从非起点启动，从任意一个起点开始](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/%E6%96%AD%E7%82%B9%E5%BC%80%E5%A7%8B.mp4)
- [0505启动选择的方法](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE-%E6%96%B0%E5%90%AF%E5%8A%A8%E6%96%B9%E6%B3%95.mp4)


### 主体函数解析
![函数解析1](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%873.JPG)
![函数解析2](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%874.JPG)
![函数解析3](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%875.JPG)
![函数解析4](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%876.JPG)
![函数解析5](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%877.JPG)
![函数解析6](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%878.JPG)
![函数解析7](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%879.JPG)
![函数解析8](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/2024%E5%A4%A9%E5%AE%AB%E5%BB%BA%E8%AE%BE/%E5%B9%BB%E7%81%AF%E7%89%8710.JPG)
![函数解析9](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/new_image_1.png)
![函数解析10](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/new_image_0.png)

![函数解析11](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/%E9%80%89%E6%8B%A9%E8%BF%90%E8%A1%8C%E7%9A%84%E7%A8%8B%E5%BA%8F.png)

### 计划更新顺序
- ~~加入不含有陀螺仪的转弯模块；~~
- ~~加入非轴心转弯的模块；~~
- 提升下寻迹的抓线性，优化下轮子速度PID+寻迹PID；
- 大家有需要记得和我沟通下需求；

