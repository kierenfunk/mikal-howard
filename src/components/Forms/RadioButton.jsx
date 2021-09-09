const RadioButton = ({option, onClick, selected}) => (
    <div className={`rounded border  m-2 p-2  ${selected? 'bg-black text-white border-white' : 'bg-gray-100 border-black text-black'}`} onClick={onClick}>{option}</div>
)

export default RadioButton;