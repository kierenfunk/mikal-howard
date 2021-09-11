import React from 'react';
import Link from 'next/link';
import H1 from './H1';
import P from './P';
import phoneToDialable from '../../utils/phoneToDialable';
import constants from '../../utils/constants';

const ContentBlock = ({ className, children }) => (
  <div className={`${className} w-10/12 md:w-1/2 flex items-center justify-center flex-col gap-8`}>
    <img width="1897" height="1085" className="w-56 md:w-96" src="images/logo.png" alt="Mikal Howard Finance Logo" />
    <div className="w-full text-center">
      <div className="flex flex-col gap-2 mb-4">
        {children}
      </div>
      <Link href="/" passHref>
        <button type="button" className="rounded px-4 py-2 bg-red-400 hover:bg-red-600 text-white">Go back home</button>
      </Link>
    </div>
  </div>
);

const SubmissionStep = ({
  isSubmitting, submitted, submissionError,
}) => (
  <div className={`flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-white ${submitted || isSubmitting ? 'block' : 'hidden'}`}>
    <div className={`${isSubmitting ? 'block' : 'hidden'} w-10/12 md:w-1/2 flex items-center justify-center flex-col gap-8`}>
      <img width="1897" height="1085" className="w-36 animate-spin-slow" src="images/logo-swirl.png" alt="Mikal Howard Finance Logo" />
      <P>Hold tight, processing your submission...</P>
    </div>
    <ContentBlock className={`${!isSubmitting && !submissionError ? 'block' : 'hidden'}`}>
      <H1>Thank you!</H1>
      <P>We have received your submission, we will be in contact with you very soon.</P>
    </ContentBlock>
    <ContentBlock className={`${!isSubmitting && submissionError ? 'block' : 'hidden'}`}>
      <H1>Uh Oh...</H1>
      <P>
        Unfortunately, your submission could not be sent at this time. Please try again another
        time or you can contact us directly by email at
        <a tabIndex="0" className="text-red-400 hover:text-red-600 underline" href={`mailto:${constants.email}`}>
          {constants.email}
        </a>
        {' '}
        or by mobile
        <a tabIndex="0" className="text-red-400 hover:text-red-600 underline" href={`tel:${phoneToDialable(constants.phone)}`}>
          {constants.phone}
        </a>
        .
      </P>
    </ContentBlock>
  </div>
);

export default SubmissionStep;
