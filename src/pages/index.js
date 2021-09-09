import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Section from '../components/Section';
import H2 from '../components/H2';
import H3 from '../components/H3';
import P from '../components/P';
import SpeechBubble from '../components/Icons/SpeechBubble';
import DollarSign from '../components/Icons/DollarSign';
import House from '../components/Icons/House';
import Link from 'next/link'

const Hero = () => (
	<div className="flex md:flex-row flex-col-reverse">
		<div className="bg-gray-800 flex-1 flex items-center justify-center p-4 sm:p-8 text-white">
			<div>
				<h1 className="font-header font-bold text-3xl lg:text-5xl mb-4">Your Loan, Your Way</h1>
				<P>At Mikal Howard Finance, we help guide and educate people through the complexities of applying for finance to buy a home to live in or build an investment property portfolio, based on your personal situation and goals.</P> 
				<Link href="/enquire">
					<button className="rounded mt-4 px-4 py-2 bg-red-400 hover:bg-red-600 text-white">Enquire Now</button>
				</Link>
			</div>
		</div>
		<div className="flex-1 bg-gray-800">
			<div className="">
				<img className="object-contain h-full w-full" style={{maxHeight:'650px'}} src="images/Mikal17-optim.jpg" alt="picture of mikal standing proudly"></img>
			</div>
		</div>
	</div>
)

const Card = ({children}) => (
	<div className="text-center flex flex-col justify-center items-center w-10/12 sm:w-1/2 md:w-1/3">
		{children}
	</div>
)

const Testimonial = ({children}) => (
	<div className="bg-gray-800 p-2">
		{children}
	</div>
)

const ContentSection = ({className, children, image, left}) => (
	<Section className={`${className} flex flex-col md:gap-8 ${left? 'md:flex-row':'md:flex-row-reverse'}`}>
		<div className="md:w-1/2 flex justify-center items-center">
			<div className="lg:w-10/12">
				{image}
			</div>
		</div>
		<div className="md:w-1/2 flex justify-center items-center">
			<div>
				{children}
			</div>
		</div>
	</Section>
)

const Index = () => (
	<div className="relative">
		<Nav {...{email:'mikal@mikalhowardfinance.com.au', phone:'0419 820 366'}}/>
		<Hero/>
		<Section className="">
			<div className="flex flex-col md:flex-row gap-4 sm:gap-16 lg:gap-24 justify-center md:items-start items-center">
				<Card>
					<SpeechBubble/>
					<H3>Get answers fast</H3>
					<p className="text-lg leading-relaxed">Drop us a message and we will respond to you with tailored expert advice.</p>
				</Card>
				<Card>
					<DollarSign/>
					<H3>No consultation fees</H3>
					<p className="text-lg leading-relaxed">You don't pay a cent for my services and you never will.</p>
				</Card>
				<Card>
					<House/>
					<H3>The best loan for you</H3>
					<p className="text-lg leading-relaxed">We keep you up to date with the best rates for you, so you never pay more than you have to.</p>
				</Card>
			</div>
		</Section>
		<ContentSection className="" left={true}
			image={<img src="images/bg-showcase-2.jpg" alt="Couple being handed some keys to their new home"></img>}>
			<H2>Move into your dream home</H2>
			<P>
				Going through the process of securing a home loan can be daunting, let us make it easy for you. 
				Whether it's your first home or a big move, our personalised approach will ensure you receive 
				the best rate for your financial situation.
			</P>
		</ContentSection>
		<ContentSection className="" left={false}
			image={<img src="images/old-3608950_1920.jpg" alt="Older couple walking along the beach"></img>}>
			<H2>Grow your business</H2>
			<P>
				Let us take the stress out of the entire loan process, so you can spend more time and energy working 
				in your business or on your next big idea!
			</P>
		</ContentSection>
		<ContentSection className="" left={true}
			image={<img src="images/Mikal20-optim.webp" alt="Mikal Howard from Mikal Howard Finance sitting down looking at the camera"></img>}>
			<H2>Community focused, Adelaide broker</H2>
			<P>
				As a local broker and property investor in the Adelaide and
				Tea Tree Gully region, we value our community and like to see everyone on 
				the road to financial health. With our experience 
				in finance, insurance and small-business, you can 
				trust us to help you achieve financial freedom. We 
				understand the finance needs of our community and 
				will be able to help you with your personal financing 
				necessities.
			</P>
		</ContentSection>
		<Section className="bg-gray-900 text-white flex justify-center items-center">
			<div className="md:w-10/12 lg:w-2/3">
				<H2>What people are saying...</H2>
				<div className="flex flex-col gap-4 my-4 lg:gap-8 lg:my-8">
					<Testimonial>
						<p className="text-md leading-relaxed italic">"Mikal is an utmost professional and I've appreciated the services he has provided."</p>
						<p className="text-lg text-bold mt-2">- Robin D.</p>
					</Testimonial>
					<Testimonial>
						<p className="text-md leading-relaxed italic">"Found Mikal to be very professional in the way he conducted himself... Made refinancing easy to understand and more importantly, a home loan that suited my needs..."</p>
						<p className="text-lg text-bold mt-2">- Daryn W.</p>
					</Testimonial>
					<Testimonial>
						<p className="text-md leading-relaxed italic">"Exceptional professionalism and service is Mikal's standard that others can not achieve. We would not hesitate to recommend Mikal to any of our friends or family."</p>
						<p className="text-lg text-bold mt-2">- Justin F.</p>
					</Testimonial>
				</div>
				<p className="text-md leading-relaxed">See more testimonials on our <a className="underline hover:text-red-600" href="https://www.facebook.com/MikalHowardFinance/reviews/" target="_blank">facebook page</a></p>
			</div>
		</Section>
		<Section className="h-64 md:h-96 flex justify-center items-center">
			<div className="text-center">
				<H2>Get in touch with us today</H2>
				<Link href="/enquire">
					<button className="rounded mt-4 px-4 py-2 bg-red-400 hover:bg-red-600 text-white">Enquire Now</button>
				</Link>
			</div>
		</Section>
		<Footer/>
	</div>
)

export default Index;
