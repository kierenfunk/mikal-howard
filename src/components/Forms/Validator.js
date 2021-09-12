import isEmail from 'validator/lib/isEmail';
import conditionResolver from './ConditionResolver';

const Validator = (values, flatFields) => Object.keys(values).reduce((errors, key) => {
  if (!(key in flatFields)) return errors;
  const field = flatFields[key];
  if (conditionResolver(field, values) === 'invisible') return errors;
  if (field.type === 'file') {
    let fileErrors = {};
    const filesUploaded = Object.values(values[key]).reduce(
      (resolved, file) => resolved && !file.url.isPending(), true,
    );
    const filesAdded = Object.values(values[key]).filter(
      (file) => !file.url.isRejected(),
    );
    if (field.required && filesAdded.length < 1) fileErrors = { ...fileErrors, [key]: 'Required' };
    if (!filesUploaded) fileErrors = { ...fileErrors, [key]: 'File uploads are still in progress' };
    return { ...errors, ...fileErrors };
  }
  let newErrors = {};
  if (field.type === 'email' && !isEmail(values[key])) newErrors = { ...newErrors, [key]: 'A valid email is required' };
  if (field.required && values[key].length < 1) newErrors = { ...newErrors, [key]: 'Required' };
  return { ...errors, ...newErrors };
}, {});

export default Validator;
