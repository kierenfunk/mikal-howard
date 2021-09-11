import React from 'react';
import conditionResolver from './ConditionResolver';
import ErrorMessage from './ErrorMessage';

import RadioGroup from './RadioGroup';
import Label from './Label';
import FileInput from './FileInput';
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';
import Input from './Input';

import Step from './Step';
import H1 from './H1';
import P from './P';

const GenericStep = ({
  index, step, fields, ...props
}) => (
  <Step {...{ index, step }}>
    {'header' in props ? <H1>{props.header}</H1> : null }
    {'paragraphs' in props ? props.paragraphs.map((paragraph) => (<P key={paragraph}>{paragraph}</P>)) : null }
    {Object.keys(fields).map((name) => (
      <div key={name} className={`${conditionResolver(fields[name], props.values)} py-1`}>
        {'label' in fields[name] ? <Label htmlFor={name}>{fields[name].label}</Label> : null}
        {(() => {
          if (fields[name].type === 'choice') return <RadioGroup {...props} name={name} options={fields[name].options} currentStep={index === step} />;
          if (fields[name].type === 'textarea') return <TextArea {...props} name={name} currentStep={index === step} />;
          if (['text', 'email'].includes(fields[name].type)) return <Input {...props} name={name} currentStep={index === step} />;
          if (fields[name].type === 'file') return <FileInput {...props} name={name} currentStep={index === step} />;
          if (fields[name].type === 'submit') return <SubmitButton {...props} name={name} currentStep={index === step} />;
          return null;
        })()}
        <ErrorMessage errors={props.errors} touched={props.touched} name={name} />
      </div>
    ))}
  </Step>
);

export default GenericStep;
