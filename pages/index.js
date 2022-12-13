import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import SliderSection from "../components/slider/SliderSection";

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
			</main>
			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
