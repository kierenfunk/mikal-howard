const TextArea = ({name,handleChange,handleBlur,values}) => (
    <textarea rows="4" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...{name,onChange:handleChange,onBlur:handleBlur,value:values[name]}}></textarea>
)

export default TextArea;