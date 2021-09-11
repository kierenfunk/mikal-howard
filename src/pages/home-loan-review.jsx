import React from 'react';
import formFields from '../utils/homeLoanReviewFormData';
import FormHeader from '../components/Forms/FormHeader';
import Form from '../components/Forms/Form';
import phoneToDialable from '../utils/phoneToDialable';
import constants from '../utils/constants';

import H1 from '../components/Forms/H1';
import P from '../components/Forms/P';

const IntroStep = ({ currentStep }) => (
  <div>
    <H1>Home loan review</H1>
    <P>
      Before you begin, we recommend you take some time to gather information about your
      home loans. We will ask for screenshots or documents that show the
      following: current limit of home loan, current balance, redraw amount, any offsets
      that are linked, current interest rates.
    </P>
    <P>
      If there is any information missing, it will limit our ability to carry out a quick
      and efficient home loan review.
    </P>
    <P>
      If you have any issues you can contact us directly by email
      at
      {' '}
      <a tabIndex={`${currentStep ? '0' : '-1'}`} className="text-red-400 hover:text-red-600 underline" href={`mailto:${constants.email}`}>
        {constants.email}
      </a>
      {' '}
      or by mobile
      {' '}
      <a tabIndex={`${currentStep ? '0' : '-1'}`} className="text-red-400 hover:text-red-600 underline" href={`tel:${phoneToDialable(constants.phone)}`}>
        {constants.phone}
      </a>
      .
    </P>
    <P>To get started, click Next</P>
  </div>
);

const HomeLoanReview = () => (
  <div className="h-screen w-full flex flex-col justify-between items-center">
    <FormHeader />
    <Form formFields={formFields} Introduction={IntroStep} />
  </div>
);

export default HomeLoanReview;
