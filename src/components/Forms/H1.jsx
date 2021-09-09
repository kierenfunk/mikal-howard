const H1 = ({className, children}) => (
	<h1 className={`font-header font-bold text-2xl lg:text-5xl ${className? className : ''}`}>
        {children}
    </h1>
)

export default H1;