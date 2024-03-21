import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { Box, Button, HStack, IconButton, chakra } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<Box
			as="section"
			w="full"
			position={"sticky"}
			top={0}
			zIndex={99}
			className="bg-primary"
		>
			<chakra.nav
				maxW={"1300px"}
				mx={"auto"}
				py={2}
				px={4}
				color={"white"}
				className="flex justify-between items-center relative"
			>
				<div className="flex">
					<Link href={"/"}>
						<Image
							src="/logo.png"
							className="w-[60px] sm:w-auto"
							alt="anisarp"
							width="100"
							height="50"
						/>
					</Link>
					<span className="font-extrabold self-center text-lg md:text-2xl sm:text-3xl tracking-widest">
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
						href="#about"
					>
						About
					</Link>
				</div>
				<Button
					as={"a"}
					variant={"outline"}
					borderRadius={0}
					borderColor={"white"}
					color={"white"}
					px={6}
					href="tel:+233246251086"
					leftIcon={<FaPhoneAlt />}
					display={{ base: "none", md: "flex" }}
				>
					Let's Talk
				</Button>
				<HStack display={{ base: "flex", md: "none" }}>
					<IconButton
						backgroundColor={"transparent"}
						as={"a"}
						color={"white"}
						href="tel:+233246251086"
						icon={<FaPhoneAlt fontSize={"20px"} />}
						_hover={{ transform: "scale(1.2)" }}
					/>
					<IconButton
						variant="ghost"
						_hover={{ transform: "scale(1.2)" }}
						color={"white"}
						icon={
							isNavOpen ? (
								<AiOutlineClose fontSize={"20px"} />
							) : (
								<CgMenuRightAlt fontSize="2rem" />
							)
						}
						aria-label="Open Menu"
						alignSelf="center"
						onClick={() => setIsNavOpen(!isNavOpen)}
					/>
				</HStack>
			</chakra.nav>
			<MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</Box>
	);
}
