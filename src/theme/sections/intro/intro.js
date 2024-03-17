import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "./../../components/container/container";
import Button from "./../../components/button/button";
import Translate from "@docusaurus/Translate";

export default function Intro() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const component = "shift-intro";

  return (
    <div className={component}>
      <Container componentClass={component} size={"medium"}>
        <div className={`${component}__title`}>
          DeDeMaker
          <br />
          <Translate id="homepage.intro1">{"嵌入式教程"}</Translate>
        </div>
        <div className={`${component}__image`}>
          <img
            className={`${component}__image-bg`}
            src={useBaseUrl("img/ic-intro.svg")}
          />
          <img
            className={`${component}__image-img`}
            src={useBaseUrl("img/homepage/home_bg_4WController.png")}
          />
        </div>
        <div className={`${component}__content`}>
          {siteConfig.tagline}
          <Translate id="homepage.intro">
            {
              "面向项目的嵌入式入门学习方法"
            }
          </Translate>
        </div>
        <Button
          componentClass={component}
          label={"Get Started"}
          href={useBaseUrl("/get-started")}
        />
      </Container>
    </div>
  );
}
