const conditionResolver = (fields, values) => {
  if (!('conditions' in fields)) return '';
  for (let i = 0; i < fields.conditions.length; i += 1) {
    const cond = fields.conditions[i];
    if (cond.action === 'equals' && values[cond.target] !== cond.value) return 'invisible';
    if (cond.action === 'notEmpty' && values[cond.target].length < 1) return 'invisible';
  }
  return 'visible';
};

export default conditionResolver;
