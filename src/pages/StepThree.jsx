import React, { useState } from "react";
import { AppIndicator } from "../components/UI/AppIndicator";
import { Heading } from "../components/UI/Heading";
import { ListImgItem } from "../components/UI/ListImgItem";
import { AppButton } from "../components/UI/AppButton";

const mockData = [
  {
    variantId: 'variant-1',
    variantText: 'Ответ 1',
  },
  {
    variantId: 'variant-2',
    variantText: 'Ответ 2',
  },
  {
    variantId: 'variant-3',
    variantText: 'Ответ 3',
  },
  {
    variantId: 'variant-4',
    variantText: 'Ответ 4',
  },
]

const StepThree = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <AppIndicator />
          <div className="question">
            <Heading headingTag="h2" headingText="3. Занимательный вопрос"/>
            <ul className="emoji-variants">
            {mockData.map((variant) => (
                <ListImgItem 
                key={variant.variantId} 
                itemId={variant.variantId}
                itemText={variant.variantText}
                isSelected={selectedItem === variant.variantId}
                onClick={() => setSelectedItem(variant.variantId)}/>
              ))}
            </ul>
            <AppButton
            isDisabled={false}
            buttonType="submit"
            buttonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
