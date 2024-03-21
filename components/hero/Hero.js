import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { slideUp } from "../../animation/variants";
import { motion } from "framer-motion";

const Hero = () => (
	<Box
		backgroundImage={"/hero.webp"}
		bgRepeat={"no-repeat"}
		bgSize={"cover"}
		h={{ base: "350px", md: "700px" }}
		display={"grid"}
		placeItems={"center"}
		position={"relative"}
	>
		<Box
			position={"absolute"}
			width={"full"}
			height={"100%"}
			bgColor={"rgba(0,0,0,.2)"}
		></Box>
		<Box maxW={"1200px"} px={4} mx={"auto"} color={"white"} zIndex={1}>
			<motion.div
				viewport={{ once: true }}
				variants={slideUp}
				initial="hidden"
				whileInView="show"
			>
				<h1 className="text-4xl sm:text-7xl font-bold">
					Architecture that recognizes
					<br />
					all your sensibilities
				</h1>
				<h3 className="pt-7 text-base sm:text-xl">
					Welcome to Anisarp, a reliable business partner on your path to
					building a better looking future for all.
				</h3>
				<Link href={"#contact"}>
					<button className="bg-primary hover:text-primary hover:bg-white button hover:border border-solid border-primary text-white font-semibold rounded-sm p-4 mt-8">
						Make an Enquiry
					</button>
				</Link>
			</motion.div>
		</Box>
	</Box>
);

export default Hero;
