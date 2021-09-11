const phoneToDialable = (number) => {
  const n = number.split('').filter((c) => '0123456789'.includes(c));
  n[0] = '+61';
  return n.join('');
};

export default phoneToDialable;
