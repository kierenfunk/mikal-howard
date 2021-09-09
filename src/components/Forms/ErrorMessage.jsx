const ErrorMessage = ({errors,touched,name}) => {
    if(errors[name] && touched[name])
        return <p className="text-red-600 visible text-sm">{errors[name]}</p>
    return <p className="text-red-600 invisible text-sm">undefined</p>
}

export default ErrorMessage;