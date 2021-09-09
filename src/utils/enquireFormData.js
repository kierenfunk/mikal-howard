const formFields = [
    {
        header:'How can we help you?',
        fields:{
            enquiryType:{
                init:'',
                type:'choice',
                required:true,
                options:['I want to refinance',"I want to buy my first home","I want to purchase an investment property",'Just a chat please']
            }
        }
    },
    {
        fields:{
            details:{
                init:'',
                required: false,
                type:'textarea'
            }
        },
        paragraphs: ["Please give us some more information about your situation or what you're goals are"]
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
        },
        paragraphs:['We need to know a little bit about you']
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
        },
        paragraphs:['And we also need to be able to contact you']
    },
    {
        fields:{
            other:{
                init:'',
                required: false,
                type:'textarea'
            },
            submit:{
                type:'submit',
            }
        },
        paragraphs: ['Was there anything else we can help you with or anything else we should know about?']
    }
]

export default formFields;