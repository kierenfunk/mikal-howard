const SubmitButton = ({currentStep, onClick}) => (
    <div className="w-full text-center">
        <button onClick={onClick} tabIndex={`${currentStep? '0' : '-1'}`} type="submit" className="rounded px-4 py-2 bg-red-400 hover:bg-red-600 text-white text-2xl">Submit Now</button>
    </div>
)

export default SubmitButton;