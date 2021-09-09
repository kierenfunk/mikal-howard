const formFields = [
    {
        header:'How can we help you?',
        fields:{
            enquiry:{
                init:'',
                type:'choice',
                required:true,
                options:['I want to refinance',"I want to buy my first home","I want to purchase an investment property",'Just a chat please']
            }
        }
    },
    {
        fields:{
            firstName:{
                init:'',
                required:true,
                label:'Your first name:',
                type:'text'
            },
            lastName:{
                init:'',
                required:true,
                label:'Your last name:',
                type:'text'
            }
        }
    },
    {
        fields:{
            email:{
                init:'',
                required:true,
                label:'Your email address:',
                type:'email'
            },
            phone:{
                init:'',
                required:true,
                label:'Your contact number:',
                type:'text'
            },
            postcode:{
                init:'',
                required:true,
                label:'Your postcode:',
                type:'text'
            },
        }
    },
    {
        fields:{
            other:{
                init:'',
                required: false,
                type:'textarea'
            },
            submit:{
                type:'submit'
            }
        },
        paragraphs: ['Was there anything else we can help you with or anything else we should know about?']
    }
]

export default formFields;