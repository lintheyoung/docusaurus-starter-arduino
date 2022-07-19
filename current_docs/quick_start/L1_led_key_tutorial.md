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

在使用Arduino点亮LED之前，我们应该先明白，一个LED应该是如何被点亮的？我们观察普通的LED灯时，可以看到其中具有大小端，其中大端代表的是LED的负极，而其中的小端则是代表其中的正极，如下图所示：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220719234843.png)

而我们平时在使用时，值需要将LED的负极接入电池的负极，LED的正极，接入电池的正极即可，一般而言，一个LED的驱动电压为3V，我们可以使用两个5号干电池就能点亮，如下图所示：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220719234740.png)


在开始使用RGB灯模块之前（RGB的意思就是Red Green Blue，即三原色），我们可以仔细观察一下我们手头上的Arduino板子，无论是Nano或是Uno，在对应13的引脚上都有连接上一个LED，如下图所示：

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220719234927.png)

我们先来点亮板子上的LED灯！在点亮GPIO 13上的LED之前，我们应该了解一下再Arduino的13号IO上如何与LED连接的，在这里我绘制了一个简单的电路图，可以看到其中LED的正极连接到了Arduino D13 IO上，而LED负极则是经过一个220欧姆的电阻，连接到了GND（也就是负极）上，由此我们其实可以非常近乎直觉般的知道，此时我们只要D13 IO上输出一个高电平（在Arduino中其输出的高电平为5V），我们就能点亮这个LED，只要输出一个低电平（0V），因为LED左右两端都是0V，故其就是为熄灭的状态。

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220720001155.png)

好了，此时我们就已经知道使用Arduino点亮LED的大致思路了，我们需要：
- 让Arduino GPIO处于输出状态；
- 当GPIO输出为高电平时，LED点亮；
- 当GPIO输出为低电平时，LED熄灭。

现在我们开始使用代码完成上述的思路，代码我已经罗列如下，我们后面通过修改代码的方式希望可以让你感性的认识Arduino的代码是如何运行起来的。

```c++
const int led_pin = 13; // 这里使用"led_pin"这一个别名去代指GPIO 13

void setup(){
  pinMode(led_pin, OUTPUT); // 设定led_pin(GPIO 13)为输出模式
}

void loop(){
  digitalWrite(led_pin, HIGH); // 让led_pin为高电平
  delay(1000); // 延时1000ms(毫秒, 1000ms = 1s)
  digitalWrite(led_pin, LOW); // 让led_pin为低电平
  delay(1000); // 延时1000ms
}
```

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