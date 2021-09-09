import Link from 'next/link'
import Close from '../Icons/Close';

const FormHeader = () => (
    <div className="flex justify-between p-2 md:p-4 w-full">
        <div className="flex justify-center items-center">
            <Link href="/">
                <img className="w-24 md:w-36" src="images/logo.png" alt="Mikal Howard Finance Logo"></img>
            </Link>
        </div>
        <div className="flex justify-center items-center">
            <Link href="/">
                <div className="cursor-pointer flex items-center flex-col">
                    <Close/>
                </div>
            </Link>
        </div>
    </div>
)

export default FormHeader;