import React from 'react';
import Link from 'next/link';
import Close from '../Icons/Close';

const FormHeader = () => (
  <div className="flex justify-between p-2 md:p-4 w-full">
    <div className="flex justify-center items-center">
      <Link href="/" passHref>
        <button type="button">
          <img width="1897" height="1085" className="w-24 md:w-36" src="images/logo.png" alt="Mikal Howard Finance Logo" />
        </button>
      </Link>
    </div>
    <div className="flex justify-center items-center">
      <Link href="/" passHref>
        <button type="button">
          <div className="flex items-center flex-col px-4">
            <Close />
          </div>
        </button>
      </Link>
    </div>
  </div>
);

export default FormHeader;
