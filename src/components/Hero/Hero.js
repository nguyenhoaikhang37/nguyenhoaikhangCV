import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My CV
        </SectionTitle>
        <SectionText>
          My name is Nguyen Hoai Khang (21 year olds), I have over 1 year
          experience as a ReactJS Front-end developer. I am passionate about
          learning new technologies to increase the quality of my work.
        </SectionText>
        <Button
          onClick={() =>
            window.open("https://github.com/nguyenhoaikhang37", "_blank")
          }
        >
          Hire me
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
