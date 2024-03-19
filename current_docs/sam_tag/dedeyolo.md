---
id: dedeyolo_train
sidebar_position: 6
---

# DeDeYOLO训练

:::danger
本文还未完成。
:::

## 项目思路
DeDeYOLO是基于YOLOV3修改的模型，与市面大家都使用的YOLOV2在K210部署不同，YOLOV3通过多尺度训练与三个不同尺度的特征图，同时加入提升SPP与FPN模块提升对于小目标检测效果，同时支持不同尺度的BackBone模型（MobileNet25、MobileNet50、MobileNet75），实现在检测效果与帧率可根据实际需求进行平衡。实际测试效果在K210平台上，在保持几乎与YOLOV2的检测帧率一致的情况下，极大的提升了实际的检测效果。

## DeDeYOLO训练平台使用方法

打开DeDeYOLO训练平台网页，将VOC数据集上传至平台，并输入接受结果的邮箱地址：
![DeDeYOLO流程图](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/dedemaker_pic/%E6%82%9F%E9%81%93%E6%BC%94%E7%A4%BA.png)