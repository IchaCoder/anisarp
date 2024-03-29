import Head from "next/head";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Gallery from "../components/gallery/Gallery";
import NewsLetter from "../components/contact/NewsLetter";
import ContactUs from "../components/contact/ContactUs";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";
import WhatWeDo from "../components/what-we-do";
import Portfolio from "../components/portfolio/portfolio";
import Services from "../components/services";

export default function Home() {
	return (
		// <div className="font-Poppins overflow-hidden">
		<>
			<Head>
				<title>Anisarp Architectural & Construction</title>
				<meta
					name="description"
					content="Anisarp is an architectural enterprise specializing in creating innovative and functional designs for a wide range of clients. With a team of experienced and talented architects, we offer comprehensive services including design, planning, and project management. Our projects range from residential and commercial buildings to public spaces and more. We are committed to delivering high-quality work and strive to exceed our clients' expectations. Contact us today to learn more about our services and how we can help bring your architectural vision to life."
				/>
				<meta
					name="keywords"
					content="Consultancy Services, Architectural Design, Estate Development, Renovation and Repair Works, Structural Design, Land Surveying, Building Construction, Contract Administration"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />
			<Hero />
			<Services />
			<Portfolio />
			<WhatWeDo />
			{/* <Gallery /> */}
			{/* <section className="mt-32 mb-20 bg-gradient-cc" id="contact">
				<div className="max-w-[90%] md:max-w-[80%] mx-auto flex flex-col sm:flex-row gap-8 md:gap-14 justify-between pb-8">
					<NewsLetter />
					<ContactUs />
				</div>
			</section> */}
			<Footer />
			<ScrollToTop />
		</>
		// </div>
	);
}
