const fileUploader = async (file) => new Promise((resolve, reject) => {
  fetch(
    'https://a6ksd5mt56.execute-api.us-east-1.amazonaws.com/dev/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: file.name,
        type: file.type,
      }),
    },
  ).then(
    (r) => r.json(),
  ).then(
    (r) => {
      fetch(r.url, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      }).then(
        (resp) => {
          if (resp.status !== 200) resolve({ error: `Could not upload ${file.name}` });
          else resolve(r);
        },
      ).catch((e) => reject(e));
    },
  ).catch((e) => reject(e));
});

export default fileUploader;
