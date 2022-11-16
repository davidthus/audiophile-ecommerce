import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ReactComponent as IconCashOnDelivery } from "../../assets/checkout/icon-cash-on-delivery.svg";
import { CheckoutSummary } from "../../components";
import { removeAll } from "../../features/CartSlice";
import { openModal } from "../../features/ModalSlice";
import { disableScrolling } from "../../utils/scrolling";
import Checkout from "../Checkout/Checkout";
import {
  BillingDetailsWrapper,
  Container,
  EMoneyOptionsWrapper,
  ErrorText,
  FieldsWrapper,
  FieldWrapper,
  FormWrapper,
  Heading,
  Input,
  InputLabel,
  LabelWrapper,
  OptionDescription,
  OptionDescriptionWrapper,
  PaymentDetailsWrapper,
  PaymentOption,
  PaymentOptionsWrapper,
  PaymentSelectWrapper,
  RadioFill,
  RadioText,
  RadioWrapper,
  SectionHeading,
  ShippingInfoWrapper,
} from "./CheckoutForm.style";

function CheckoutForm() {
  const { modal } = useAppSelector((state) => state);
  const [selectedRadio, setSelectedRadio] = useState("Cash on Delivery");
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(openModal({ type: "checkout" }));
    disableScrolling();
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
    reset();
  };

  const PaymentOptions = [
    {
      name: "e-Money",
    },
    {
      name: "Cash on Delivery",
    },
  ];

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {modal.modalOpen && modal.modalType === "checkout" && <Checkout />}
      <FormWrapper>
        <Heading>Checkout</Heading>
        <BillingDetailsWrapper>
          <SectionHeading>Billing Details</SectionHeading>
          <FieldsWrapper>
            <FieldWrapper margin>
              <LabelWrapper>
                <InputLabel error={errors.name && true} htmlFor="name">
                  Name
                </InputLabel>
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
              </LabelWrapper>
              <Input
                error={errors.name && true}
                placeholder="Alexei Ward"
                {...register("name", {
                  required: "Field can not be empty.",
                  pattern: { value: /^[a-zA-Z\s]*$/, message: "Wrong format" },
                })}
              />
            </FieldWrapper>
            <FieldWrapper>
              <LabelWrapper>
                <InputLabel error={errors.email && true} htmlFor="email">
                  Email Address
                </InputLabel>
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </LabelWrapper>
              <Input
                error={errors.email && true}
                placeholder="alexei@mail.com"
                {...register("email", {
                  required: "Field can not be empty.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Wrong format",
                  },
                })}
              />
            </FieldWrapper>
            <FieldWrapper>
              <LabelWrapper>
                <InputLabel error={errors.phone && true} htmlFor="phone">
                  Phone Number
                </InputLabel>
                {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
              </LabelWrapper>
              <Input
                error={errors.phone && true}
                placeholder="+1 202-555-0136"
                {...register("phone", {
                  required: "Field can not be empty.",
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                    message: "Wrong format",
                  },
                })}
              />
            </FieldWrapper>
          </FieldsWrapper>
        </BillingDetailsWrapper>
        <ShippingInfoWrapper>
          <SectionHeading>Shipping Info</SectionHeading>
          <FieldsWrapper>
            <FieldWrapper fullLength margin>
              <LabelWrapper>
                <InputLabel error={errors.address && true} htmlFor="address">
                  Address
                </InputLabel>
                {errors.address && (
                  <ErrorText>{errors.address.message}</ErrorText>
                )}
              </LabelWrapper>
              <Input
                error={errors.address && true}
                placeholder="1137 Williams Avenue"
                {...register("address", {
                  required: "Field can not be empty.",
                  pattern: {
                    value: /^[a-zA-Z0-9\s,'-]*$/,
                    message: "Wrong format",
                  },
                })}
              />
            </FieldWrapper>
            <FieldWrapper margin>
              <LabelWrapper>
                <InputLabel error={errors.zip && true} htmlFor="zip">
                  ZIP Code
                </InputLabel>
                {errors.zip && <ErrorText>{errors.zip.message}</ErrorText>}
              </LabelWrapper>
              <Input
                error={errors.zip && true}
                placeholder="10001"
                {...register("zip", {
                  required: "Field can not be empty.",
                  pattern: {
                    value: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                    message: "Wrong format",
                  },
                })}
              />
            </FieldWrapper>
            <FieldWrapper>
              <LabelWrapper>
                <InputLabel error={errors.city && true} htmlFor="city">
                  City
                </InputLabel>
                {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
              </LabelWrapper>
              <Input
                error={errors.country && true}
                placeholder="New York"
                {...register("city", {
                  required: "Field can not be empty.",
                  pattern: { value: /^[a-zA-Z\s]*$/, message: "Wrong format" },
                })}
              />
            </FieldWrapper>
            <FieldWrapper>
              <LabelWrapper>
                <InputLabel error={errors.country && true} htmlFor="country">
                  Country
                </InputLabel>
                {errors.country && (
                  <ErrorText>{errors.country.message}</ErrorText>
                )}
              </LabelWrapper>
              <Input
                error={errors.country && true}
                placeholder="United States"
                {...register("country", {
                  required: "Field can not be empty.",
                  pattern: { value: /^[a-zA-Z\s]*$/, message: "Wrong format" },
                })}
              />
            </FieldWrapper>
          </FieldsWrapper>
        </ShippingInfoWrapper>
        <PaymentDetailsWrapper>
          <SectionHeading>Billing Details</SectionHeading>
          <PaymentSelectWrapper>
            <InputLabel>Payment Method</InputLabel>
            <PaymentOptionsWrapper>
              {PaymentOptions.map((option, i) => (
                <PaymentOption
                  onClick={() => setSelectedRadio(option.name)}
                  key={i}
                  isSelected={selectedRadio === option.name ? true : false}
                >
                  <RadioWrapper
                    isSelected={selectedRadio === option.name ? true : false}
                  >
                    <RadioFill
                      isSelected={selectedRadio === option.name ? true : false}
                    />
                  </RadioWrapper>
                  <RadioText>{option.name}</RadioText>
                </PaymentOption>
              ))}
            </PaymentOptionsWrapper>
          </PaymentSelectWrapper>
          {selectedRadio === "e-Money" && (
            <EMoneyOptionsWrapper>
              <FieldWrapper>
                <LabelWrapper>
                  <InputLabel
                    error={errors.EMoneyNumber && true}
                    htmlFor="EMoneyNumber"
                  >
                    e-Money Number
                  </InputLabel>
                  {errors.EMoneyNumber && (
                    <ErrorText>{errors.EMoneyNumber.message}</ErrorText>
                  )}
                </LabelWrapper>
                <Input
                  error={errors.EMoneyNumber && true}
                  placeholder="238521993"
                  {...register("EMoneyNumber", {
                    required: "Field can not be empty.",
                    pattern: { value: /^[0-9]*$/, message: "Wrong format" },
                  })}
                />
              </FieldWrapper>
              <FieldWrapper>
                <LabelWrapper>
                  <InputLabel
                    error={errors.EMoneyPin && true}
                    htmlFor="EMoneyPIN"
                  >
                    e-Money PIN
                  </InputLabel>
                  {errors.EMoneyPin && (
                    <ErrorText>{errors.EMoneyPin.message}</ErrorText>
                  )}
                </LabelWrapper>
                <Input
                  error={errors.EMoneyPin && true}
                  placeholder="6891"
                  {...register("EMoneyPIN", {
                    required: "Field can not be empty.",
                    pattern: {
                      value: /^(\d{4}|\d{6})$/,
                      message: "Wrong format",
                    },
                  })}
                />
              </FieldWrapper>
            </EMoneyOptionsWrapper>
          )}
          {selectedRadio === "Cash on Delivery" && (
            <OptionDescriptionWrapper>
              <IconCashOnDelivery />
              <OptionDescription>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </OptionDescription>
            </OptionDescriptionWrapper>
          )}
        </PaymentDetailsWrapper>
      </FormWrapper>
      <CheckoutSummary />
    </Container>
  );
}

export default CheckoutForm;
