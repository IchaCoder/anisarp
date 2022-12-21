import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="p-8 bg-[rgb(49,49,49)] flex flex-col md:flex-row">
			<div className="flex">
				<Link href={"/"}>
					<Image src="/logo.jpg" alt="anisarp" width="100" height="50" />
				</Link>
				<span className="font-extrabold self-center text-2xl sm:text-3xl tracking-widest">
					ANISARP
				</span>
			</div>
			<div className="self-center hidden md:inline">
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="/"
				>
					Home
				</Link>
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="#services"
				>
					Services
				</Link>
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="#gallery"
				>
					Gallery
				</Link>
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="#contact"
				>
					Contact
				</Link>
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="#contact"
				>
					About
				</Link>
			</div>
			{/* <a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a> */}
		</footer>
	);
};

export default Footer;
