const conditionResolver = (fields,values) => {
    if(!('conditions' in fields))
        return ''
    for(let i = 0; i < fields.conditions.length; i++){
        let cond = fields.conditions[i]
        if(cond.action === 'equals' && values[cond.target] !== cond.value)
            return 'invisible'
    }
    return 'visible'
}

export default conditionResolver;