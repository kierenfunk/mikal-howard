const P = ({className, children}) => (
	<p className={`text-lg lg:text-xl leading-relaxed lg:leading-8 ${className}`}>{children}</p>
)

export default P;