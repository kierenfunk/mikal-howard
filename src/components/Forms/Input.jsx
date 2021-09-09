const Input = ({name,type,handleChange,handleBlur,values}) => (
    <input {...{name,type,onChange:handleChange,onBlur:handleBlur,value:values[name]}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"/>
)

export default Input;