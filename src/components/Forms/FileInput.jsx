import React from 'react';

const FileInput = ({
  name, handleChange, currentStep,
}) => (
  <input
    tabIndex={`${currentStep ? '0' : '-1'}`}
    name={name}
    type="file"
    onChange={async (e) => {
      try {
        const response = await fetch(
          'https://a6ksd5mt56.execute-api.us-east-1.amazonaws.com/dev/',
        );
        const responseJson = await response.json();

        const blob = e.target.files[0];
        const newFile = new File([blob], `${responseJson.key}`, { type: blob.type });
        // console.log(newFile)
        // e.target.files[0].name = responseJson.key
        // let form = new FormData();
        // form.append('test', newFile);

        await fetch(responseJson.url, {
          method: 'PUT',
          body: newFile,
          headers: {
            'Content-Type': blob.type,
          },
        });
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }

      handleChange({ target: { value: Array.from(e.target.files), name } });
    }}
  />
  // multiple
);

export default FileInput;
