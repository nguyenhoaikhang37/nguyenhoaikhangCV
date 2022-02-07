import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0964297642">096 429 7642</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            nguyenhoaikhang37@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIcons
        onClick={() =>
          window.open("https://github.com/nguyenhoaikhang37", "_blank")
        }
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
