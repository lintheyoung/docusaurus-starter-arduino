import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "./../../components/heading/heading";
import Container from "./../../components/container/container";
import Arrow from "./../../components/arrow/arrow";

import Translate, { translate } from "@docusaurus/Translate";

export default function GetStarted() {
  const component = "shift-get-started";

  const itemsData = [
    {
      bg: useBaseUrl("img/ic-theme-bg.svg"),
      icon: useBaseUrl("img/homepage/DeDeIMU-Small.png"),
      type: "plugin",
      label: (
        <Translate
          id="homepage.getStarted.rmControls101"
          values={{
            highlighted: (
              <span className={"${component}__label-highlight"}>低漂抗扰陀螺仪</span>
            ),
          }}
        >
          {"Arduino 科创教程 {highlighted}"}
        </Translate>
      ),
      link: useBaseUrl("imu/IMU"),
    },
    {
      bg: useBaseUrl("img/ic-plugin-bg.svg"),
      icon: useBaseUrl("img/homepage/ESP32-4W-WO-BG-Big.png"),
      type: "plugin",
      label: (
        <Translate
          id="homepage.getStarted.gazeboChassis"
          values={{
            highlighted: (
              <span className={`${component}__label-highlight`}>轮式机器人控制器</span>
            ),
          }}
        >
          {"ESP32教程{highlighted}"}
        </Translate>
      ),
      link: useBaseUrl("pcb/quar"),
    },
  ];

  const items = itemsData.map((item, index) => {
    const { bg, icon, type, label, link } = item;

    return (
      <div
        className={`${component}__item ${component}__item--${type}`}
        key={index}
      >
        <a className={`${component}__link`} href={link}>
          <div className={`${component}__icon`}>
            <img className={`${component}__icon-bg`} src={bg} />
            <img className={`${component}__icon-img`} src={icon} />
          </div>
          <div className={`${component}__label`}>{label}</div>
          <Arrow componentClass={component} />
        </a>
      </div>
    );
  });

  return (
    <div className={component}>
      <Container componentClass={component} size={"small"}>
        <Heading
          componentClass={component}
          title={translate({
            id:"homepage.getStarted.headingTitle",
            message: "选择一种入门的方式",
            description: "The Heading title",
          })}
          subtitle={translate({
            id:"homepage.getStarted.headingSubtitle",
            message:
              "你可以通过手上常用的 RM3508 电机学习如何在仿真和现实中使用 rm-controls；如果你觉得单个电机过于简单，可以尝试在仿真中操控麦克纳姆轮和舵轮底盘",
            description: "The Heading subtitle",
          })}
        />
        <div className={`${component}__content`}>{items}</div>
      </Container>
    </div>
  );
}
