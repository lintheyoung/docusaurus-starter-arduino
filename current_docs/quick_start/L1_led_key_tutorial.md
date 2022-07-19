---
id: L1_led_key_tutorial
sidebar_position: 6
---

# L1-输入输出实验

<!-- 标识符 -->
:::danger
本文还未完成。
:::

Hello，大家好，在本次课程中，我们将会学习如何使用Arduino GPIO（General Purpose Input/Output，代表Arduino板子上输入输出引脚）实现对按键输入信号处理、输出我们需要的高低电平信号，并在最后我们会完成一个基于数码管的三位计时器（000~999），在本次课程中我们所需要的材料如下（可以点击直接跳转至淘宝，这里是没有任何带货的意思，只是方便大家选购）：

- [Arduino Nano或UNO * 1](https://item.taobao.com/item.htm?id=677378335092)；
- [面包板 * 1](https://item.taobao.com/item.htm?id=522572405070)；
- [三位数码管 * 1](https://item.taobao.com/item.htm?id=617218844322)；
- [RGB灯模块 * 1](https://item.taobao.com/item.htm?id=585201123177)；
- [按键输入模块 * 1](https://item.taobao.com/item.htm?id=564674095028)；
- [杜邦线/面包板线若干 * 1](https://item.taobao.com/item.htm?id=522572825997)；

我们开始！

:::tip
可以看到，在本次课程中我们使用到的都是模块，而不是琐碎的电路原件，我们其实在平时项目或是科创比赛中，都基本上很少去从搭建一个一个的电路原件开始，而是更多的使用已经现成的模块。这里更加希望大家可以精力都放在如何写代码实现功能上，而不是去解决各种各样琐碎的电路问题。
:::

## RGB灯模块的使用

RGB灯模块是我们接触到的第一个模块，我们将会从这个模块出发，学习如何使用Arduino控制输出电平。

:::tip
**什么是电平？**

在这里，大家可以认为电平就是电压的意思。在一般嵌入式系统中供电电压为5v/3.3v，一般我们会说高电平，指代5v/3.3v；低电平，则是指代0v/接地。我们可以感性的认为高电平就是有输出的意思，低电平就是没有输出的意思。不过这里要注意一下，一般Arduino GPIO输出的电平没有很强的负载能力，其输出的最大电流一般在20mA左右（即0.02A，差不多为一个手电筒的LED电流大小；四驱车马达的电流一般在0.2A左右，对于Arduino GPIO来说就已经是“超载”。）。
:::

## Arduino IDE 的安装
我们首先点击[https://www.arduino.cc](https://www.arduino.cc)进入Arduino IDE的官网：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Xnip2022-07-19_10-46-31.png)

然后点击其中的[Software](https://www.arduino.cc/en/software)进入文件的下载页面：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Xnip2022-07-19_10-48-03.png)

而后根据我们所使用的系统选择对应的软件。对于**Windows**系统，有两个可选项，其中1）选项代表了它是一个安装包，2）则是代表了是一个免安装版本（即下即用），一般我们下载1）安装包即刻。对于**MacOS**系统，只要点击其中的**Mac OS X**即可。

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220719113533.png)

在接下来的页面中，我们选择**Just Download**即可：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Xnip2022-07-19_10-48-47.png)

:::info
由于国内网络的关系，有些时候Arduino的官网可能无法访问，在这里我提供了目前最新版本Arduino IDE(1.18.19)下载地址，直接点击对应的系统即可下载：
- [Windows](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Arduino-1.8.19-Mac.zip)
- [MacOS](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Arduino-1.8.19-Mac.zip)
:::