import formFields from '../utils/enquireFormData'
import FormHeader from '../components/Forms/FormHeader';
import Form from '../components/Forms/Form';

const HomeLoanReview = () => {
    return(
        <div className="h-screen w-full flex flex-col justify-between items-center">
            <FormHeader/>
            <Form formFields={formFields}/>
        </div>
    )
}

export default HomeLoanReview;