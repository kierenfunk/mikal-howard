import Phone from '../components/Icons/Phone';
import Mail from '../components/Icons/Mail';
import Link from 'next/link'

const phoneToDialable = (number) => {
	const n = number.split('').filter(c=> '0123456789'.includes(c))
	n[0] = '+61'
	return n.join("")
}

const NavItems = ({email, phone}) => (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4 p-4 md:p-0">
		<div className="md:hidden">
            <a className="text-black hover:text-red-600" href={`tel:${phoneToDialable(phone)}`}><Phone/> {phone}</a>
        </div>
		<div className="md:hidden">
            <a className="text-black hover:text-red-600" href={`mailto:${email}`}><Mail/> {email}</a>
        </div>
        <div>
            <Link href="/home-loan-review">
		        <button className="rounded cursor-pointer block px-4 py-2 text-red-400 border border-red-400 hover:text-white hover:bg-red-600 hover:border-none">Home Loan Health Check</button>
            </Link>
        </div>
        <div>
            <Link href="/enquire">
		        <button onClick="window.location.href='/apply'" className="rounded px-4 py-2 bg-red-400 hover:bg-red-600 text-white">Enquire Now</button>
            </Link>
        </div>
    </div>
)

export default NavItems;