---
id: L1_led_key_tutorial
sidebar_position: 6
---

# L1-输入输出实验

<!-- 标识符 -->
:::danger
本文还未完成。
:::

Hello，大家好，在本次课程中，我们将会学习如何使用Arduino GPIO（General Purpose Input/Output，代表Arduino板子上输入输出引脚）实现对按键输入信号处理、输出我们需要的高低电平信号，并在最后我们会完成一个基于数码管的三位计时器（000~999），在本次课程中我们所需要的材料如下（可以点击直接跳转至淘宝，这里是没有任何带货的意思，只是方便大家选购），同时，我们此次课程也可使用Wokwi平台直接仿真，无需硬件。

- [Arduino Nano或UNO * 1](https://item.taobao.com/item.htm?id=677378335092)；
- [面包板 * 1](https://item.taobao.com/item.htm?id=522572405070)；
- [三位数码管 * 1](https://item.taobao.com/item.htm?id=617218844322)；
- [RGB灯模块 * 1](https://item.taobao.com/item.htm?id=585201123177)；
- [按键输入模块 * 1](https://item.taobao.com/item.htm?id=564674095028)；
- [杜邦线/面包板线若干 * 1](https://item.taobao.com/item.htm?id=522572825997)；
- [在线仿真平台Wokwi](https://wokwi.com/)

我们开始！

:::tip
可以看到，在本次课程中我们使用到的都是模块，而不是琐碎的电路原件，我们其实在平时项目或是科创比赛中，都基本上很少去从搭建一个一个的电路原件开始，而是更多的使用已经现成的模块；而在艺术与工业领域，就完全不会使用零碎的元件去搭建了，这里更加希望大家可以精力都放在如何写代码实现功能上，而不是去解决各种各样琐碎的电路问题。
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

```arduino title="led_blink.ino"
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

这里是我们第一次接触到Arduino的代码，我们可以看到其主要是可以由三个部分所组成，其中的第一个部分`const int`，第二部分是`void setup()`部分，而第三部分则是`void loop`部分。

我们先来了解一下`const int`是什么？单纯从英语单词来看，`const`是代表了“恒定的; 不变的;”，而`int`则是“integer”的缩写，代表了“整数”的意思。所以组合起来，它就代表了“不变的整数”的意思，在这里我们写：
```arduino
const int led_pin = 13; // 左边led_pin代表了别名，而右边13则是代表Arduino GPIO 13的意思。、
```
就是相当于给GPIO 13取了一个别名，叫做“led_pin”，并且因为const(不变的)的原因，led_pin这个别名不能再去指代其他GPIO（比如现在你让led_pin = 12就是不允许的！）。

:::caution
在有些代码中，常会使用`#define led_pin 13`这样的写法去取代`const int led_pin = 13`，但是这样做是不符合代码规范，是不推荐的（感性了解即可，详细原因可{参考}(https://blog.csdn.net/yangchen1122/article/details/123142536)）。
:::

:::tip
在第一次课中，我们只需要简单了解程序的组成，这里只讨论了int（整形类型），程序不仅仅只是由整形构成，对于各种变量类型，我们完全可以在后续项目中遇到了再学习，最后再汇总总结即可。
:::

而在第二部分中，`void setup`则是代表了一个Arduino中一个固定的函数。我们可以直接感性的认为在`void setup`中所有代码都是从上向下只执行一次，不用去细纠为什么只执行一次。一般都在设定只要告诉Arduino运行一次的代码时（比如GPIO IO输入/输出模式的时候），就放置在setup函数中。

:::tip
什么是函数？


:::

而第三部分`void loop()`函数，我们直接感性的认为在loop（环）中的所有代码像一个环一样，是循环往复的。

在了解了Arduino的大致程序结构后，我们来看看代码究竟在做什么？

我们在最开始的时：
```arduino
const int led_pin = 13; 
```
我们给GPIO 13取了一个别名，叫做`led_pin`，这个别名的作用只是方便我们记忆写代码调用，在后面我们可以认为led_pin是完全等价的，你可以把所有出现led_pin的地方改为13。

在只执行一次的`void setup()`中，我们写:
```arduino
void setup(){
  pinMode(led_pin, OUTPUT);
}
```
在其中，pinMode是Arduino自带的函数，意思是设定led_pin为什么样的模式？可以设定为输出（OUTPUT），或是输入模式（INPUT），这里我们控制的led，明显要设定为输出（OUTPUT）。

而在`void loop()`部分，我们写了：
```arduino
void loop(){
  digitalWrite(led_pin, HIGH);
  delay(1000);
  digitalWrite(led_pin, LOW);
  delay(1000);
}
```
我们要关注其中的digitalWrite和delay部分，digital代表的是数字量，我们知道数字量有两种模式，0和1（或是LOW和HIGH），当我们需要让led_pin这个GPIO输出高电平时，直接写入HIGH，输出低电平时则写入LOW。

:::tip
什么是数字量？

数字量代表二进制，即0和1，或是LOW和HIGH，它就只有两种状态，一般我们是用于对于比如开关是否按下的处理。与之相对应的则是模拟量，模拟量是一个连续的量，一般我们是用去代表传感器的电压值。
:::

OK，那目前我们已经了解如何点亮Arduino上的一个灯，这个时候回到我们点亮RGB灯，什么是RGB灯呢？RGB是`RED`，`GREEN`和`BLUE`的意思，也就是说，在一个RGB的LED灯里面其实有三个独立的LED，我们其实也可以从RGB灯的电路图上看到，如下图所示。

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/RGB_Pixel.jpg)

我们此时看看下我们所买到的模块，上面标有G(Ground代表地)，R(代表Red)，G(代表Green)，B（代表Blue），为什么三个灯，每个灯本来都有正负极，但是只有四个控制的引脚呢？这是因为我们在设计模块的时候，一般都会把其中的Red、Green、Blue三个灯正极，或是负极统一连接到一起，如下图所示，我们在实际使用的时候，若模块是共阴，我们只需要把（若此时是所有的负极都连接到一起，我们一般把这种状态称之为共阴）其中的GND连接到我们Arduino上的GND即可，然后把各个灯的正极分别连接到Arduino上的各个GPIO上，如下图所示：

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/RGB%E8%BF%9E%E6%8E%A5%E5%9B%BE_%E6%B0%B4%E5%8D%B0.png)

在硬件连接完成之后，我们就应该思考如何去给三个灯去写代码？我们可以参考上面的做法，可以把三个灯对应的IO都设定为输出模式（OUTPUT），然后按照每隔一秒，依次点亮各个灯即可，如下所示：
```arduino title="rgb_led_blink.ino"
const int red_led_pin = 12;
const int green_led_pin = 11;
const int blue_led_pin = 10;

void setup() {
  pinMode(red_led_pin, OUTPUT);
  pinMode(green_led_pin, OUTPUT);
  pinMode(blue_led_pin, OUTPUT);
}

void loop() {
  digitalWrite(blue_led_pin, LOW);
  digitalWrite(red_led_pin, HIGH);
  delay(1000);
  digitalWrite(red_led_pin, LOW);
  digitalWrite(green_led_pin, HIGH);
  delay(1000);
  digitalWrite(green_led_pin, LOW);
  digitalWrite(blue_led_pin, HIGH);
  delay(1000);
}
```

编译、下载之后，我们可以看到RGB灯按照红色、绿色、蓝色依次点亮，确实能够实现我们需要的效果。不过我们其实也是方向说，我们在代码里面其实做了很多重复性的工作，假如我们有100个LED灯，难道我们还需要写100个`pinMode`去依次的设定吗？有没有什么更好的方法呢？当然有！这也就是为什么我们的课程叫做Arduino With Class的原因，我们可以采用Class（类）的方法去优化这个问题。什么是Class（类）呢？其实这是一种面对对象的方法，大家千万不要被「面对对象」这个名词给吓到了，我们在Arduino里面对于Class的方法是偏模板化的，不需要很多高深的知识，我们直接从RGB灯这个例子让大家了解什么是类！

我们开始，在使用类前，我们需要先新建两个标签，一个是`xxx.cpp`，而另一个则是`xxx.h`，按照如下图的方法新建：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220721144916.png)

在wokwi中，同样也可以也是新建一个标签：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/202211071535190.png)

输入我们需要的名称，因为这里是对于LED的控制，我们称之为led，后缀一定是要为`.cpp`：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220721145014.png)

然后我们在新建一个和上述cpp文件同样名字的文件，其后缀为`.h`：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/20220721145457.png)

再Wokwi中的建立效果如下：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/202211072334413.png)

接着，我们在`led.cpp`中写如下的内容：

```arduino title="led.cpp"
#include "led.h"

LED::LED(int led_pin_input) {
  led_pin = led_pin_input;
  pinMode(led_pin, OUTPUT);
}

void LED::On() {
  digitalWrite(led_pin, HIGH);
}

void LED::Off() {
  digitalWrite(led_pin, LOW);
}
```

在`led.h`文件中写如下的内容：

```arduino title="led.h"
#ifndef LED_h
#define LED_h

#include <Arduino.h>

class LED {
  private:
    int led_pin; // 类中的私有变量

  public:
    LED(int led_in_pin); // 构造函数
    void On(); // 类中的函数，功能：点亮LED
    void Off(); // 类中的函数，功能：关闭LED
};

#endif
```

在`rgb_led_with_class.ino`中写代码如下：
```arduino title="rgb_led_with_class.ino"
#include "led.h" // 导入我们刚才写好的头文件，主要头文件是不需要分号;的

LED red_led(12); // GPIO 12控制红色LED
LED green_led(11); // GPIO 11控制绿色LED
LED blue_led(10); // GPIO 10控制蓝色LED

void setup() {
  // 空
}

void loop() {
  blue_led.Off(); // 关闭蓝色LED灯
  red_led.On(); // 点亮红色LED
  delay(1000);
  red_led.Off();
  green_led.On();
  delay(1000);
  green_led.Off();
  blue_led.On();
  delay(1000);
} 
```

在Wokwi中也是同上述一样的操作，然后我们点击运行，可以看到效果是红色-绿色-蓝色交替切换：

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/202211072354500.png)


好，那再我们学习了如何使用Arduino点亮LED后，我们会来学习一下如何使用Arduino去控制数码管，数码管我们可以理解为是由几个LED所组成的一个显示器，我们在使用时，就按照LED的控制方法来控制。

我们还是简单学习一下数码管，一般一位数码管都是由8个“灯”所构成，我们在控制的时候，就只需要把上述的3个LED变成控制8个LED，我们一般使用“a、b、c、d、e、f、g、dp”去表示各个“灯”的位置：

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/%E6%95%B0%E7%A0%81%E7%AE%A1%E7%A4%BA%E6%84%8F%E5%9B%BE.png)

我们在使用了类之后，就可以非常快速的构建程序，我们还是将电路构建起来如下：

![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/202211080039564.png)

在电路构建之后，我们开始写程序，思路开始和之前的RGB灯一样的，我们还是先尝试把所有灯点亮，我们将之前的ino代码修改如下，其他的cpp和h保持不变：
在`digital_tube.ino`中写代码如下：
```arduino title="digital_tube.ino"
#include "led.h" // 导入我们刚才写好的头文件，主要头文件是不需要分号;的

LED a(3); // GPIO 12控制红色LED
LED b(4); // GPIO 11控制绿色LED
LED c(5); // GPIO 10控制蓝色LED
LED d(6); // GPIO 12控制红色LED
LED e(7); // GPIO 11控制绿色LED
LED f(8); // GPIO 10控制蓝色LED
LED g(9); // GPIO 12控制红色LED

void setup() {
  // 空
}

void loop() {
  a.On();
  b.On();
  c.On();
  d.On();
  e.On();
  f.On();
  g.On();
  delay(1000);
  a.Off();
  b.Off();
  c.Off();
  d.Off();
  e.Off();
  f.Off();
  g.Off();
  delay(1000);
} 
```

## Arduino IDE 的安装
我们首先点击[https://www.arduino.cc](https://www.arduino.cc)，进入Arduino IDE的官网：
![](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Xnip2022-07-19_10-46-31.png)

然后点击其中的[Software](https://www.arduino.cc/en/software)，进入文件的下载页面：
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