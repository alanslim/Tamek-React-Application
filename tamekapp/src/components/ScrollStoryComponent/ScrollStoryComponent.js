import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import Step1 from "../StepComponents/StepComponent1";
import Step2 from "../StepComponents/StepComponent2";
import Step3 from "../StepComponents/StepComponent3";
import Step4 from "../StepComponents/StepComponent4";
import { Card } from "react-bootstrap";

const ScrollStory = () => {
  const [currentStepIndex, setCurrentStep] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <div className="scrollama-container">
      <Scrollama offset={0.5} onStepEnter={onStepEnter}>
        {[Step1, Step2, Step3, Step4].map((StepComponent, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              className="scroll"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: currentStepIndex === stepIndex ? 0.95 : 0.2,
                transition: "opacity 1s ease-in-out",
                backgroundColor: "#f0efe4",
              }}
            >
              <Card
                className={`my-5 ${
                  stepIndex === 2 ? "" : "text-center"
                } inf shadow-lg`}
              >
                <StepComponent />
              </Card>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollStory;
