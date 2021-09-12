import React, { useState, useEffect } from 'react';
import Close from '../Icons/Close';
import LoadingCircle from '../Icons/LoadingCircle';

const FileHandler = ({
  fileName, setFieldValue, name, values, currentStep,
}) => {
  const { url } = values[name][fileName];
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState('');

  const removeFile = () => {
    const temp = { ...values[name] };
    delete temp[fileName];
    setFieldValue(name, temp);
  };

  useEffect(() => {
    url.then((response) => {
      setUploaded(true);
      if ('error' in response) {
        setError(`Uh oh! There was a problem: ${response.error}`);
      }
    });
  }, [uploaded]);

  return (
    <li className={`${error.length > 0 ? 'text-red-700' : ''}`}>
      {uploaded
        ? (
          <button
            type="button"
            tabIndex={`${currentStep ? '0' : '-1'}`}
            onClick={removeFile}
          >
            {' '}
            <Close size={3} />
          </button>
        ) : <LoadingCircle size={4} />}
      {'  '}
      {fileName}
      <p className="text-xs ml-4">{error}</p>
    </li>
  );
};

export default FileHandler;
