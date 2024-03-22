import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { Box } from "@chakra-ui/react";

const variants = {
	visible: {
		opacity: 1,
		y: 0,
	},
	hidden: { opacity: 0, y: 200 },
};

export default function MobileNav({ isNavOpen, setIsNavOpen }) {
	return (
		<>
			{isNavOpen && (
				<Box
					initial="hidden"
					animate="visible"
					variants={variants}
					w="full"
					pos={"absolute"}
					display={{ base: "flex", lg: "none" }}
					bgColor={"brand.primary"}
					className="flex-col text-white pb-4"
				>
					<Link
						href="/"
						className="py-2 hover:tracking-widest text-[15px] transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						Home
					</Link>

					<Link
						href="#services"
						className="py-2 text-[15px] hover:tracking-widest transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						Services
					</Link>
					<Link
						href="#projects"
						className="py-2 text-[15px] hover:tracking-widest transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						Projects
					</Link>
					<Link
						href="#about"
						className="py-2 text-[15px] hover:tracking-widest transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						About
					</Link>
				</Box>
			)}
		</>
	);
}
