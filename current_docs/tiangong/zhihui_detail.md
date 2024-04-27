---
id: zhihui
sidebar_position: 5
---

# 2024 智慧城市资料汇总

# 图文教程（0417更新）
## 地图构建与机器人启动
地图构建：

![地图构建](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%871.JPG)

参考视频：

<iframe src="//player.bilibili.com/player.html?aid=1603134576&bvid=BV1Gm421j7PJ&cid=1506263938&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


## 软件安装与函数解析
### 米思齐安装 
- [米思齐RC3下载（0415）](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/mixly2.0-win32-x64-0415.zip)

下载后解压双击打开**Mixly.exe**即可，请将文件放在C盘下，不要有中文路径。

- ![ESP32C3选择](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/WechatIMG73.jpg)

- 选择ESP32C3后打开下面的程序。

### 智慧城市-米思齐程序

目前暂时不做识别，先做路线的直接行走：

- [0411程序-小车程序-无摄像头检测](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/zhihuichengshi_0411.mix)
- [0417程序-小车程序-无摄像头检测-提高路线的稳定性](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhihuichengshi_0417.mix)
- [0427程序-小车程序-加入摄像头检测-加入侧移](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/zhihuichengshi_0427.mix)

### 智慧城市-K210摄像头程序
#### 这两个软件是用于下载程序：
MaixpyIDE下载：[MaixpyIDE下载](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/MaixPyIDE.zip)
KFlashGUI下载：[KFlashGUI下载](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/kflash.zip)
#### 程序和模型下载（0427）：
K210程序（使用MaixPyIDE打开）：[K210-0427程序](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/smart_city_k210_0427.py)
红绿灯识别模型（使用KFlashGUI打开）：[HongLv-0427模型](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/hong_lv_yolo.kmodel)
数字识别模型（使用KFlashGUI打开）：[ShuZi-0427模型](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/num_yolo.kmodel)

#### K210程序下载方法
打开K210程序：
![下载1](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/a62d8e67ef6842098b675e58e2675fa.png)
选择板子：
![下载2](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/b9c8e70f6fd4d8048b50cf79861602d.jpg)
连接到K210：
![下载3](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/51b125c5eafdd7a706f4d88d0a9df98.png)
![下载4](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/70915f97d4678e4c819afc9c36c0d7d.png)
![下载5](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/8e3af738f5eae0d5ba70e42ed058612.png)
![下载6](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/e9ec3dfd8d6cb228e13f55603fce1de.png)
![下载7](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/7aa1e89bc7ac4c57baf69109f876fff.png)
![下载8](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/d6af4379175e5311ecfdd2a4231e09f.png)

#### 模型的下载方法
打开KFlashGUI：
![下载1](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/74240da7aef45fb2dd19924ac3e6f5c.png）
下载红绿灯模型：
![下载2](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/b83400f7c1284f48614793362883509.jpg）
![下载3](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/966eb46bd36e5c89b9eefe3bddb4bb6.png）
![下载4](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/00d53ad93c8b77959119f768e0ea2ad.png）
下载识别数字模型：
![下载5](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/c2bdb9887bea54318c503fcbf81fb76.png）
![下载6](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/966eb46bd36e5c89b9eefe3bddb4bb6.png）
![下载7](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/00d53ad93c8b77959119f768e0ea2ad.png）


### 主体函数解析
![函数解析1](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%872.JPG)
![函数解析2](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%873.JPG)
![函数解析3](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%874.JPG)
![函数解析4](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%875.JPG)
![函数解析5](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%876.JPG)
![函数解析6](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%877.JPG)
![函数解析7](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%878.JPG)
![函数解析8](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%879.JPG)
![函数解析9](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8710.JPG)
![函数解析10](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8711.JPG)
![函数解析11](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8712.JPG)
![函数解析12](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8713.JPG)
![函数解析13](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8714.JPG)
![函数解析14](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8715.JPG)
![函数解析15](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8716.JPG)
![函数解析16](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8717.JPG)
![函数解析17](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93/zhcs/%E5%B9%BB%E7%81%AF%E7%89%8718.JPG)

![函数解析18](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/3927a6b0a6c06100b10d73c4304cd94.png)
![函数解析19](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/ce860964ceff6386302577f11694dce.png)

#### 更新说明(0411)
- 支持路线的行走和抓取（0411）；
- 进一步提高路线行走的稳定性（0417）；
- 加入摄像头检测（0427）；