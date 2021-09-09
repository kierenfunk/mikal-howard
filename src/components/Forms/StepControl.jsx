import conditionResolver from './ConditionResolver';

const StepControl = ({step, setStep, formFields, values, errors, touched, handleBlur, ...props}) => {
    const moveForward = () => {
        let progress = true
        if('fields' in formFields[step]){
            const invalidFields = Object.keys(formFields[step].fields).filter(key=>{
                if (conditionResolver(formFields[step].fields[key], values) === 'invisible' || !formFields[step].fields[key].required)
                    return false
                handleBlur({target: {name: key}})
                return errors[key] || !touched[key]
            })
            progress = invalidFields.length > 0 ? false : progress
        }
        if(progress)
            setStep(Math.min(step+1, formFields.length-1))
    }
    return(
        <div className="flex justify-between w-2/3 xl:w-1/2 p-2 md:p-4">
            <button type="button" onClick={()=>setStep(Math.max(step-1,0))} className={`rounded px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white ${step<1 ? 'invisible': 'visible'}`}>Back</button>
            <button type="button" onClick={()=>moveForward()} className={`rounded px-4 py-2 bg-red-400 hover:bg-red-600 text-white ${step>=(formFields.length-1) ? 'invisible': 'visible'}`}>Next</button>
        </div>
    )
}

export default StepControl