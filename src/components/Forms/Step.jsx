const Step = ({className, children, step, index}) => (
    <div className={`bg-white absolute flex top-0 left-0 w-full h-full transition-all duration-700 transform ${className? className : ''} ${step<=index? `${step<index? 'translate-x-full':'translate-x-0' }`: '-translate-x-full'}`}>
        <div className="m-auto w-full md:w-2/3 xl:w-1/2 p-4">
            {children}
        </div>
    </div>
)

export default Step;