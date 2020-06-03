import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function getSteps() {
  return [
    'Multi-sensory instruction in decoding skills',
    'Repetition and review of skills',
    'Small group or individual instruction',
    'Teaching decoding skills',
    'Drilling sight words',
    'Teaching comprehension strategies'      
];
}

const steps = getSteps();

export default class Steps extends React.Component {
  render () {
    return (
      <div >
        <Stepper >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
           
            return (
              <Step key={label} {...stepProps} style={{ fontSize: "16px"}}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }
}
