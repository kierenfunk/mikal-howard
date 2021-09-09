import RadioButton from './RadioButton'

const RadioGroup = ({name, values, options, handleChange, handleBlur, ...props}) => (
    <div className="w-2/3">
        {options.map((option,i)=>(
            <RadioButton {...{option,key:i,selected:values[name]===option}} onClick={()=>{
                handleBlur({target:{name}})
                handleChange({target:{value:options[i],name}})
            }}/>
        ))}
    </div>
)

export default RadioGroup;