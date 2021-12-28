import styled, { css } from "styled-components";

const btn = css`
  border-radius: 50px;
  padding: 14px 0;
  width: 160px;
  cursor: pointer;
  transition: 0.2s;
  border: none;

  &:active{
    transform: translateY(2px);
  }

  @media screen and (max-width: 1110px) {
    width: 120px;
    padding: 11px 0;
    z-index: 700;
  }
`;

const primaryBtn = css`
  color: ${props => props.theme.colors.white};
  border: 2px solid linen;
  font-size: 12px;
  background-color: #1f2235;

  &:hover{
    color: aliceblue;
    border: 2px solid #ff5823;
    background-color: #1f2235;
  }
`;

const highlightedBtn = css`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  background-color: #ff5823;

  @media screen and (max-width: 810px) {
    margin: 0 !important;
  }
`;

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
  width: 100%;
  min-height: fit-content;
  background: #202235;
  position: relative;

  @media screen and (max-width: 810px) {
    height: 860px;
  }
`;

export const ProfileParent = styled.div`
  display: flex;
  align-items: center;
  color: aliceblue;

  @media screen and (max-width: 810px) {
    flex-direction: column-reverse;
    margin: 40px 0 0 0;
  }
`;

export const ProfileDetails = styled.div`
  font-size: 24px;

  @media screen and (max-width: 810px) {
    margin: 25px 0 0;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }
`;

export const ProfileColz = styled.div``;

export const ProfileColzIcon = styled.div``;

export const SocialsLink = styled.a`
  color: ${props => props.theme.colors.white};
  padding: 8px;
  padding-left: 8px;

  &:hover{
    transform: scale(1.5);
    color: ${props => props.theme.colors.darkOrange}
  }
`;

export const ProfileDetailsName = styled.div`
  @media screen and (max-width: 1110px) {
    font-size: 20px;
  }
`;

export const ProfileSpan = styled.span``;

export const ProfileSpanHighlighted = styled.span`
  color: ${props => props.theme.colors.darkOrange};
`;

export const ProfileDetailsRole = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;

  @media screen and (max-width: 810px) {
    text-align: center;
  }
`;

export const ProfileSpanPrimaryText = styled.span`
  color: ${props => props.theme.colors.white};

  @media screen and (max-width: 1110px) {
    font-size: 12px;
  }
`;

export const ProfilePainelH2 = styled.h2`
  font-size: 37px;
  font-family: cursive;
`;

export const ProfileSpanRoleTagline = styled.span`
  font-size: 19px;
  margin: 5px 0 0 0;
`;

export const ProfileOptions = styled.div`
  @media screen and (max-width: 810px) {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0 10px;
  }
`;

export const ProfileButton = styled.button`
  ${btn}

  &.primary-btn{
    ${primaryBtn}
  }

  &.highlighted-btn{
    ${highlightedBtn}
    margin: 0 0 0 28px;

    &:hover{
      background-color: cornsilk;
      color: #111;
      font-weight: bold;
    }
  }
`;

export const ProfileButtonCurriculo = styled.a``;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 ${props => props.theme.colors.white};
  border-radius: 50%;
  height: 380px;
  width: 380px;
  margin: 0 0 0 100px;

  @media screen and (max-width: 1110px) {
    margin: 0 0 0 80px;
  }

  @media screen and (max-width: 910px) {
    height: 320px;
    width: 320px;
    margin: 0 0 0 4px;
  }

  @media screen and (max-width: 810px) {
    margin: 0 !important;
  }

  @media screen and (max-width: 375px) {
    height: 275px;
    width: 275px;
    margin-top: -90px;
  }
`;

export const ProfilePictureBackground = styled.img`
  height: 92%;
  width: 92%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease-out;

  &:hover{
    transform: scale(1.07);
    transition: 1s ease-out;
  }
`;

export const BackgroundShape = styled.div`
  position: absolute;
  bottom: 0;
  height: 17.8%;
  width: 100%;
  height: 130px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const BackgroundShapeImg = styled.img`
  width: 100%;
  height: 100%;
`;
