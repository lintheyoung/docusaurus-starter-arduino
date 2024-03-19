---
id: quar
sidebar_position: 5
---

# 四路底盘控制板

:::danger
本文还未完成。
:::

## 四路电机驱动

基于ESP32S3，通过I2C，可实现轮式机器人底盘高精度的运动控制，支持两轮轮式底盘、双输出轴轮式底盘、三轮全向轮底盘、四轮全向轮底盘、麦克纳姆轮底盘。

![四路电机驱动](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/dedemaker_pic/%E6%89%80%E6%9C%89%E7%9A%84%E6%9D%BF%E5%AD%90_web.webp)

![支持各类底盘](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/dedemaker_pic/%E5%90%84%E7%A7%8D%E5%BA%95%E7%9B%98_web.webp)

支持远程OTA，可远程实时查看板载传感器信息（IMU、电池、电流等），支持C++/MicroPython/Python/积木式编程（Mixly），实现各个年龄段高性能运动底盘的控制。

![OTA](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/dedemaker_pic/OTA.webp)

![传感器可视化](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/dedemaker_pic/WebUI%E7%8A%B6%E6%80%81%E5%8F%AF%E8%A7%86%E5%8C%96_web.webp)

### Arduino/ESP32

板子接口如下：

![控制板接口](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/dedemaker_pic/%E6%9D%BF%E5%AD%90%E6%89%8B%E5%86%8C_web.webp)

需要连接的接口为其中的电源XT30接口、I2C控制接口、和IMU陀螺仪接口（可选）：

![板子连接方法](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/dedemaker_pic/%E6%9D%BF%E5%AD%90%E6%89%8B%E5%86%8C_1.webp)

导入Arduino库：点击这里下载[DeDeEncCar_V1_0.zip](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Dedemaker_%E7%A7%91%E5%88%9B%E9%A1%B9%E7%9B%AE/MoFangPro/%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8%E5%88%B0%E7%9A%84%E5%BA%93/%E9%A1%B9%E7%9B%AE%E5%BA%93/DeDeEncCar_V1_0.zip)

可使用的接口如下：

#### 0、应用层
##### 1、用多少的速度循迹多少距离

### K210/MicroPython

### STM32

### 树莓派/Jetson/Python

![HephaUni](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/HereLinkPic_0_1_11zon.webp)

## 对应拓展板（UNO）

![HermLink](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/DedeMakerFiles/HLink_Pic_2_11zon.webp)

## 相关资料下载
### 四路电机驱动三维模型

### 四路电机驱动孔位DXF