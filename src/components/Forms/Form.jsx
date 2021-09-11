import { Formik } from 'formik';
import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

import GenericStep from './GenericStep';
import SubmissionStep from './SubmissionStep';
import StepControl from './StepControl';
import conditionResolver from './ConditionResolver';
import Step from './Step';

const Form = ({ formFields, Introduction }) => {
  const [step, setStep] = useState(0);
  const [submissionError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const flatFields = formFields.reduce((obj, formStep) => {
    if (formStep.fields) {
      return {
        ...obj,
        ...Object.keys(formStep.fields).reduce((og, name) => {
          if ('init' in formStep.fields[name]) return { ...og, [name]: formStep.fields[name] };
          return og;
        }, {}),
      };
    }
    return obj;
  }, {});

  return (
    <Formik
      initialValues={Object.keys(flatFields)
        .reduce((obj, f) => ({ ...obj, [f]: flatFields[f].init }), {})}
      validate={(values) => Object.keys(values).reduce((errors, key) => {
        const field = flatFields[key];
        if (conditionResolver(field, values) === 'invisible') return errors;
        let newErrors = {};
        if ('type' in field && field.type === 'email' && !isEmail(values[key])) newErrors = { ...newErrors, [key]: 'A valid email is required' };
        if ('required' in field && field.required && values[key].length < 1) newErrors = { ...newErrors, [key]: 'Required' };
        return { ...errors, ...newErrors };
      }, {})}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        /* Object.keys(values).forEach((key) => {
          console.log(key);
        }); */
        /* if (false) {
          setSubmissionError('There is an error');
        } */

        // for(let i = 0; i < values.documents.length; i++)
        //    data.append(`document${i}`, values.documents[i]);

        // fetch('',{method:'POST',body:data,header:{Accept: "application/json"}}).then(
        //    r=>r.json()
        // ).then(r=>console.log(r)).catch(e=>console.error)
        // console.log(values)
        setTimeout(() => {
          setSubmitted(true);
          setSubmitting(false);
        }, 5000);
      }}
    >
      {(props) => (
        <div className="h-full w-full flex flex-col justify-between items-center">
          <div>
            <p className="mt-2 tracking-wide text-gray-900 uppercase font-bold">
              {step + 1}
              {' '}
              of
              {' '}
              {formFields.length}
            </p>
          </div>
          <div className="h-full relative w-full overflow-x-hidden">
            <form onSubmit={props.handleSubmit}>
              {(props.isSubmitting || submitted) ? null : formFields.map((fields, i) => {
                if (Introduction && i === 0) {
                  return (
                    <Step {...{ index: i, key: i, step }}>
                      <Introduction currentStep={step === i} />
                    </Step>
                  );
                }
                return (
                  <GenericStep {...{
                    index: i, key: i, step, ...fields, ...props,
                  }}
                  />
                );
              })}
            </form>
          </div>
          <StepControl {...{
            step, setStep, formFields, ...props,
          }}
          />
          <SubmissionStep {...{ submissionError, submitted, ...props }} />
        </div>
      )}
    </Formik>
  );
};

export default Form;
