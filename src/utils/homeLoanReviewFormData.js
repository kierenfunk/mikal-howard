const formFields = [
  {},
  {
    fields: {
      firstName: {
        init: '',
        label: 'Your first name:',
        type: 'text',
        required: true,
      },
      lastName: {
        init: '',
        label: 'Your last name:',
        type: 'text',
        required: true,
      },
      email: {
        init: '',
        label: 'Your email address:',
        type: 'email',
        required: true,
      },
    },
  }, {
    fields: {
      checkMedium: {
        init: '',
        label: 'Select one:',
        type: 'choice',
        options: ['Email', 'Phone', 'Zoom'],
        required: true,
      },
      phone: {
        init: '',
        label: 'Your phone number:',
        type: 'text',
        conditions: [
          { value: 'Phone', target: 'checkMedium', action: 'equals' },
        ],
        required: true,
      },
    },
    paragraphs: [
      'How would you like to do your annual check in?',
    ],
  }, {
    fields: {
      checkType: {
        init: '',
        label: 'Select one:',
        type: 'choice',
        options: ['Just review my current rates with my lender', 'Review and compare other lenders'],
        required: true,
      },
    },
    paragraphs: [
      "How would you like us to review your current home loan/s? We can just review your rates if you aren't interested in changing lenders / Or we can review your current lender and compare other lenders that might be suitable"],
  }, {
    fields: {
      debtSummary: {
        init: '',
        required: false,
        type: 'textarea',
      },
    },
    paragraphs: ['Do you have any debt outside of your home loan? Please give a brief summary (credit cards, afterpay, go cards, personal loans, car loans):'],
  }, {
    fields: {
      insuranceReview: {
        init: '',
        label: 'Select one:',
        required: true,
        type: 'choice',
        options: ['Yes Please', 'No thankyou'],
      },
    },
    paragraphs: ['Do you need a review of any personal and life insurances?'],
  }, {
    fields: {
      allianzQuote: {
        init: '',
        label: 'Select one:',
        required: true,
        type: 'choice',
        options: ['Yes Please - House', 'Yes Please - Vehicle', 'Yes Please - House & Vehicle', 'No Thankyou'],
      },
    },
    paragraphs: ['Do you want us to get a building insurance company (allianz) to provide you with a complimentary updated quote of any building or vehicle insurances?'],
  }, {
    fields: {
      futurePlans: {
        init: '',
        type: 'textarea',
      },
    },
    paragraphs: ['Do you have any future plans you want your broker to be aware of such as new vehicle or investment property purchase, potential sale of any properties, retirement etc? If yes, please detail below and provide approximate dates:'],
  }, {
    fields: {
      documents: {
        init: {},
        required: true,
        type: 'file',
      },
    },
    paragraphs: ['Please upload your screenshots/statements for your loan/s showing the interest rate, account details and any offsets'],
  }, {
    fields: {
      other: {
        init: '',
        type: 'textarea',
      },
      submit: {
        type: 'submit',
      },
    },
    paragraphs: ['Do you have any other questions regarding repayments, redraw, offset or anything else we can answer in our review:'],
  },
];

export default formFields;
