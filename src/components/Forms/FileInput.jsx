import React from 'react';
import Dropzone from 'react-dropzone';
import FileHandler from './FileHandler';
import fileUploader from './fileUploader';
import promiseWrapper from './promiseWrapper';

const FileInput = ({
  name, currentStep, values, setFieldValue, handleBlur,
}) => (
  <Dropzone
    onDrop={(acceptedFiles) => {
      const filePromises = acceptedFiles.map(
        (file) => ({ url: promiseWrapper(fileUploader(file)), file }),
      );

      setFieldValue(name, {
        ...values[name],
        ...filePromises.reduce((obj, file) => ({
          ...obj,
          [file.file.name]: file,
        }), {}),
      });

      Promise.all(filePromises.map((f) => f.url)).then(() => handleBlur({ target: { name } }));
    }}
    accept={['image/*', '.pdf']}
  >
    {({ getRootProps, getInputProps }) => (
      <section className="border rounded p-2 border-gray-500 border-4 bg-gray-200">
        <div {...getRootProps()} tabIndex={`${currentStep ? '0' : '-1'}`} className="cursor-pointer border-dashed border-2 border-gray-500 text-center px-4 py-8 rounded focus:border-blue-500">
          {/* eslint-disable-next-line */}
          <label htmlFor={name} className="cursor-pointer text-gray-500">Drag &apos;n&apos; drop files here, or click to select files</label>
          <p className="text-gray-500 text-xs">Only image and pdf files are accepted</p>
          <input name={name} {...getInputProps()} />
        </div>
        <ul className="p-2 text-gray-700">
          {Object.entries(values[name]).map((file) => (
            <FileHandler
              key={file[0]}
              {...{
                file: file[1], setFieldValue, name, values, currentStep,
              }}
              fileName={file[0]}
            />
          ))}
        </ul>
      </section>
    )}
  </Dropzone>
);

export default FileInput;
