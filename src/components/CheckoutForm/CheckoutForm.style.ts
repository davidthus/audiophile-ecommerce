import styled from "styled-components";
import {
  HeadingFour,
  HeadingThree,
  Overline,
  Subtitle,
} from "../../shared/typography";

export const Container = styled.form`
  width: 100%;
  display: flex;
  gap: 30px;
  @media (max-width: 1240px) {
    gap: 32px;
    flex-direction: column;
  }
`;

export const FormWrapper = styled.section`
  border-radius: 8px;
  background-color: #fff;
  flex: 1;
  padding: 54px 48px 48px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1240px) {
    padding: 30px 27px;
  }
`;

export const Heading = styled.h3`
  ${HeadingThree}
  color: #000;
  text-align: left;
  margin-bottom: 41px;
  @media (max-width: 690px) {
    margin-bottom: 32px;
    ${HeadingFour}
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BillingDetailsWrapper = styled(Section)`
  margin-bottom: 53px;
  @media (max-width: 690px) {
    margin-bottom: 32px;
  }
`;

export const ShippingInfoWrapper = styled(Section)`
  margin-bottom: 61px;
  @media (max-width: 690px) {
    margin-bottom: 32px;
  }
`;

export const PaymentDetailsWrapper = styled(Section)`
  display: flex;
  flex-direction: column;
`;

export const PaymentSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 690px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const PaymentOptionsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 48%;
  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const PaymentOption = styled.li`
  width: 100%;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid
    ${({ isSelected }: { isSelected: boolean }) =>
      isSelected ? "#D87D4A" : "#CFCFCF"};
  transition: 0.4s;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid #d87d4a;
  }
  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const RadioText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  color: #000000;
`;

export const RadioWrapper = styled.div`
  border: 1px solid
    ${({ isSelected }: { isSelected: boolean }) =>
      isSelected ? "#D87D4A" : "#CFCFCF"};
  border-radius: 99rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioFill = styled.div`
  background: #d87d4a;
  width: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? "10px" : 0};
  height: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? "10px" : 0};
  transition: 0.4s;
  border-radius: 99rem;
`;

export const SectionHeading = styled.h6`
  color: #d87d4a;
  ${Overline}
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 690px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: ${({ fullLength }: { fullLength?: boolean }) =>
    fullLength ? "100%" : "48%"};
  margin-bottom: ${({ margin }: { margin?: boolean }) => (margin ? "24px" : 0)};
  @media (max-width: 690px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.214286px;
  color: #cd2c2c;
`;

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: ${({ error }: { error: boolean }) => (error ? "#CD2C2C" : "#000")};
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  background: #ffffff;
  border: ${({ error }: { error: boolean }) =>
    error ? "2px solid #CD2C2C" : "1px solid #cfcfcf"};
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  outline: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  color: #000000;
  caret-color: #d87d4a;

  &:focus {
    border: ${({ error }: { error: boolean }) =>
      error ? "2px solid #CD2C2C" : "1px solid #d87d4a"};
  }

  &::placeholder {
    mix-blend-mode: normal;
    opacity: 0.4;
  }
`;

export const EMoneyOptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: 690px) {
    margin-top: 16px;
    flex-direction: column;
    gap: 24px;
  }
`;

export const OptionDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 690px) {
    margin-top: 14px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const OptionDescription = styled.p`
  ${Subtitle}
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  width: 100%;
  max-width: 87%;
  @media (max-width: 690px) {
    max-width: unset;
  }
`;
