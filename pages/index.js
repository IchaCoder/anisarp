import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Services from "../components/service/Services";
import SliderSection from "../components/slider/SliderSection";
import Gallery from "../components/gallery/Gallery";
import NewsLetter from "../components/contact/NewsLetter";
import ContactUs from "../components/contact/ContactUs";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";

export default function Home() {
	return (
		<div className="font-Poppins">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<Nav />
				<Hero />
				<SliderSection />
				<Services />
				<Gallery />
				<section className="mt-32 mb-20 bg-gradient-cc" id="contact">
					<div className="max-w-[90%] md:max-w-[80%] mx-auto flex flex-col sm:flex-row gap-8 md:gap-14 justify-between pb-8">
						<NewsLetter />
						<ContactUs />
					</div>
				</section>
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}
