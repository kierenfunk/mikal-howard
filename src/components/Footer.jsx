import React from 'react';
import Link from 'next/link';
import Section from './Section';

const Footer = () => (
  <footer>
    <Section className="bg-gray-300 flex flex-col-reverse md:flex-row md:gap-16">
      <div className="md:w-10/12">
        <ul className="mb-4">
          <li className="md:inline mr-2 mb-4 md:mb-0">
            <Link href="/compliments-concerns" passHref>
              <button type="button" className="text-red-600 underline">Compliments & Concerns</button>
            </Link>
          </li>
          <li className="hidden md:inline mr-2">⋅</li>
          <li className="md:inline mr-2 mb-4 md:mb-0">
            <Link href="/privacy-policy" passHref>
              <button type="button" className="text-red-600 underline">Privacy Policy</button>
            </Link>
          </li>
        </ul>
        <p className="text-sm">Credit Representative 452798 is authorised under Australian Credit Licence 389328</p>
        <p className="text-sm">
          This page provides general information only and has been prepared without taking into
          account your objectives, financial situation or needs. We recommend that you consider
          whether it is appropriate for your circumstances and your full financial situation will
          need to be reviewed prior to acceptance of any offer or product. It does not constitute
          legal, tax or financial advice and you should always seek professional advice in relation
          to your individual circumstances. Subject to lenders terms and conditions, fees and
          charges and eligibility criteria apply.
        </p>
        <p className="text-sm">
          © Mikal Howard Finance
          {' '}
          {`${(new Date()).getFullYear()}`}
          . All Rights Reserved.
        </p>
        <p className="text-sm mt-4">
          Website by
          {' '}
          <a className="text-red-600 underline" href="https://www.kierenfunk.com" target="_blank" rel="noreferrer">Kieren Funk</a>
        </p>
      </div>
      <div className="mb-4 md:w-2/12">
        <ul>
          <li className="mb-4 md:mb-1"><a className="text-red-600 underline" href="https://www.facebook.com/MikalHowardFinance" target="_blank" rel="noreferrer">Facebook</a></li>
          <li className="mb-4 md:mb-1"><a className="text-red-600 underline" href="https://twitter.com/mikalhoward" target="_blank" rel="noreferrer">Twitter</a></li>
          <li className="mb-4 md:mb-1"><a className="text-red-600 underline" href="https://au.linkedin.com/in/mikalhoward" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li className="mb-4 md:mb-1"><a className="text-red-600 underline" href="https://www.youtube.com/user/CyberWolf1314/videos" target="_blank" rel="noreferrer">Youtube</a></li>
        </ul>
      </div>
    </Section>
  </footer>
);

export default Footer;
