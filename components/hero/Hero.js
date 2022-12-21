import Link from "next/link";

const Hero = () => (
	<section className="max-w-[90%] md:max-w-[80%] flex lg:flex-row flex-col-reverse justify-between gap-16 mx-auto mt-10  base:mt-20">
		<div>
			<h1 className="text-4xl base:text-5xl font-bold">
				Architecture that recognizes all your sensibilities
			</h1>
			<h3 className="pt-7">
				Welcome to Anisarp, a reliable business partner on your path to building
				a better looking future for all.
			</h3>
			<Link href={"#contact"}>
				<button className="bg-primary hover:text-primary hover:bg-white button hover:border border-solid border-primary text-white font-semibold rounded-sm p-4 mt-8">
					Make an Enquiry
				</button>
			</Link>
		</div>
		<img
			src="/hero_img.jpeg"
			alt="building"
			className="-mr-20 w-full lg:w-[600px] h-max"
		/>
	</section>
);

export default Hero;
