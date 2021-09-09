const H2 = ({className, children}) => (
	<h2 className={`font-header text-2xl sm:text-3xl lg:text-4xl font-bold mt-8 md:mt-0 mb-4 ${className}`}>
		{children}
	</h2>
)

export default H2;