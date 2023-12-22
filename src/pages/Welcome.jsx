import React, { useEffect, useState } from "react";
import { Heading } from "../components/UI/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/AppInput";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const clickHandler = () => {
    if (!nameValue) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }

    if (!phoneValue) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
  };

  // useEffect(() => {

  // },[nameValue, phoneValue])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            Headingtype="h1"
            headingText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppInput
              hasErr={nameErr}
              value={nameValue}
              inputType="text"
              inputLabel="Ваше имя"
              id="username"
              inputPlaceholder="Ваш ответ"
              isRequired={true}
              inputErr="Введите ваше имя"
              onChange={setNameValue}
            />
            <AppInput
              hasErr={phoneErr}
              value={phoneValue}
              inputLabel="Ваш номер"
              inputType="tel"
              id="usernumber"
              inputPlaceholder="+998 9- --- -- --"
              inputErr="Введите свой номер"
              onChange={setPhoneValue}
            />
            {/* <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
            <AppButton
              buttonType="submit"
              onClick={clickHandler}
              isDisabled={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
