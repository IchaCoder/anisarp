import Link from "next/link";
import Image from "next/image";
import {
	ButtonGroup,
	Container,
	IconButton,
	Stack,
	Text,
	chakra,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<Container
			as={"footer"}
			bgColor={"brand.black"}
			w={"full"}
			margin={0}
			maxW={"full"}
			px={0}
		>
			<chakra.div
				display={"flex"}
				paddingY={8}
				px={4}
				maxW={"1200px"}
				justifyContent={"space-between"}
				mx={"auto"}
			>
				<div className="grid text-white text-sm">
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
						href="#projects"
					>
						Projects
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
				<Stack>
					<Link href={"/"} className="grid justify-items-center self-center">
						<Image
							src="/logo.png"
							alt="anisarp"
							width="100"
							height="50"
							className="h-14 self-end"
						/>
						<span className="font-extrabold self-start text-white text-2xl">
							ANISARP
						</span>
					</Link>
					<Text color={"white"}>
						Copyright &copy; Anisarp {new Date().getFullYear()}
					</Text>
					<Text color={"white"} textAlign={"center"}>
						Kumasi - Ghana
					</Text>
					<Text
						as={"a"}
						href="tel+:+233246251086"
						color={"blue.400"}
						textAlign={"center"}
					>
						0246251086
					</Text>
				</Stack>
				<Stack variant="solid">
					<IconButton
						as="a"
						target={"_blank"}
						rel="noreferrer"
						href="#"
						aria-label="WhatsApp"
						icon={<BsWhatsapp fontSize="1.25rem" color="#fefefe" />}
						background="black"
					/>
					<IconButton
						as="a"
						target={"_blank"}
						rel="noreferrer"
						href="#"
						aria-label="Facebook"
						icon={<BsFacebook fontSize="1.25rem" color="#fefefe" />}
						background="black"
					/>
					<IconButton
						as="a"
						target={"_blank"}
						rel="noreferrer"
						href="#"
						aria-label="Instagram"
						icon={<BsInstagram fontSize="1.25rem" color="#fefefe" />}
						background="black"
					/>
					<IconButton
						as="a"
						target={"_blank"}
						rel="noreferrer"
						href="#"
						aria-label="Twitter"
						icon={<FaXTwitter fontSize="1.25rem" color="#fefefe" />}
						background="black"
					/>
					<IconButton
						as="a"
						target={"_blank"}
						rel="noreferrer"
						href="#"
						aria-label="TikTok"
						icon={<FaTiktok fontSize="1.25rem" color="#fefefe" />}
						background="black"
					/>
				</Stack>
			</chakra.div>
		</Container>
	);
};

export default Footer;
