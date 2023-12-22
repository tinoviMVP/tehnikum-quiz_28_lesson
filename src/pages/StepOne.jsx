import React, { useState } from "react";
import { AppIndicator } from "../components/UI/AppIndicator";
import { Heading } from "../components/UI/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/AppInput";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");
  const [answerErr, setAnswerErr] = useState(false);

  const clickHandler = () => {
    if (!answerValue) {
      setAnswerErr(true);
    } else {
      setAnswerErr(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <AppIndicator />
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Heading headingText="1. Занимательный вопрос" headingTag="h2" />
            <AppInput
              hasErr={answerErr}
              value={answerValue}
              inputPlaceholder="Ваш ответ"
              inputType="text"
              isRequired={true}
              id="userAnswer"
              onChange={setAnswerValue}
              inputErr="Введите ваш ответ"
            />
            {/* <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label> */}
            <AppButton buttonType="submit" onClick={clickHandler} isDisabled={false} />
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
