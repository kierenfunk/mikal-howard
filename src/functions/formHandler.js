exports.handler = async (event, context, callback) => {
    console.log(event.body)

    return {
		statusCode:200,
		body:JSON.stringify("Thank you for your message. We will get back to you as soon as we can."),
        headers:{
            'Access-Control-Allow-Origin': event.headers.origin
        }
	}
}