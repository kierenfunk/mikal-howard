import { Formik } from 'formik';
import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

import GenericStep from './GenericStep';
import SubmissionStep from './SubmissionStep';
import StepControl from './StepControl';
import conditionResolver from './ConditionResolver';
import Step from './Step';

const Form = ({formFields, Introduction}) => {
    const [step, setStep] = useState(0)
    const [submissionError, setSubmissionError] = useState(false)

    const flatFields = formFields.reduce((obj,step)=>{
        if (step.fields)
            return {...obj, ...Object.keys(step.fields).reduce((og,name)=>{
                if ('init' in step.fields[name])
                    return {...og, [name] : step.fields[name]}
                return og
            },{})}
    },{})

    return (
        <Formik
            initialValues={Object.keys(flatFields)
                .reduce((obj,f)=>{
                    return {...obj, [f]: flatFields[f].init}},{}
                )}
            validate={values => {
                return Object.keys(values).reduce((errors,key)=>{
                    const field = flatFields[key]
                    if(conditionResolver(field,values) === 'invisible')
                        return errors
                    let newErrors = {}
                    if('type' in field && field.type === 'email' && !isEmail(values[key]))
                        newErrors = {...newErrors, [key]: 'A valid email is required'}
                    if('required' in field && field.required && values[key].length < 1)
                        newErrors = {...newErrors, [key]: 'Required'}
                    return {...errors, ...newErrors}
                },{})
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                let data = new FormData();
                Object.keys(values).forEach(key=>{
                    console.log(key)
                })

                //for(let i = 0; i < values.documents.length; i++)
                //    data.append(`document${i}`, values.documents[i]);

                //fetch('',{method:'POST',body:data,header:{Accept: "application/json"}}).then(
                //    r=>r.json()
                //).then(r=>console.log(r)).catch(e=>console.error)
                //console.log(values)
                setTimeout(() => {
                    setSubmitting(false);
                }, 5000);
            }
        }>
            {props => (
                <div className="h-full w-full flex flex-col justify-between items-center">
                    <div><p className="mt-2 tracking-wide text-gray-900 uppercase font-bold">{step + 1} of {formFields.length}</p></div>
                    <div className="h-full relative w-full overflow-x-hidden">
                        <form onSubmit={props.handleSubmit}>
                            {formFields.map((fields,i)=>{
                                if (Introduction && i===0)
                                    return <Step {...{index:i,key:i, step}}><Introduction currentStep={step===i}/></Step>
                                return <GenericStep {...{index:i, key:i, step, ...fields, ...props}}/>
                            })}
                        </form>
                    </div>
                    <StepControl {...{step, setStep, formFields, ...props}}/>
                    <SubmissionStep {...{submissionError, ...props}}/>
                </div>
            )}
        </Formik>
    )
}

export default Form;