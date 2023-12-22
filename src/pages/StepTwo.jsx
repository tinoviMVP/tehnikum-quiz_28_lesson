import React, { useState } from "react";
import { AppIndicator } from "../components/UI/AppIndicator";
import { Heading } from "../components/UI/Heading";
import { AppButton } from "../components/UI/AppButton";
import { ListTextItem } from "../components/UI/ListTextItem";

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

const StepTwo = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <AppIndicator />
          <div className="question">
            <Heading headingText="2. Занимательный вопрос" headingTag="h2" />
            <ul className="variants">
              {mockData.map((variant) => (
                <ListTextItem 
                key={variant.variantId} 
                itemId={variant.variantId}
                itemText={variant.variantText}
                isSelected={selectedItem === variant.variantId}
                onClick={() => setSelectedItem(variant.variantId)}/>
              ))}
            </ul>
            <AppButton buttonText="Далее" buttonType="submit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
