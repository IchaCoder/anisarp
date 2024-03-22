import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Box, Stack, chakra } from "@chakra-ui/react";
import { slideUp } from "../../animation/variants";

const ServiceGroupOne = () => {
	return (
		<Box maxW={"1200px"} mx={"auto"} px={4} py={14}>
			<Stack
				mt={10}
				direction={{ base: "column-reverse", md: "row-reverse" }}
				alignItems={"center"}
				justifyContent={"space-between"}
				gap={4}
			>
				<chakra.div
					as={motion.div}
					viewport={{ once: true }}
					variants={slideUp}
					initial="hidden"
					whileInView="show"
				>
					<Image
						src="/assets/service_8.jpeg"
						alt="architecture"
						width={"100"}
						height={"100"}
						className="w-[100vw] sm:w-[450px] 3xl:w-[900px] lg:h-[350px] object-cover"
					/>
				</chakra.div>

				<motion.div
					viewport={{ once: true }}
					variants={slideUp}
					initial="hidden"
					whileInView="show"
					className="mt-2 text-base lg:text-2xl lg:w-[800px]"
				>
					<h2 className="font-bold text-3xl sm:text-5xl text-center md:text-left">
						Transforming Your Ideas <br />{" "}
						<span className="text-primary">To Become Reality</span>
					</h2>
					<p className="mt-2 text-center md:text-left">
						We blend our diversity with emperical and ethnographic research,
						immersing ourselves in our client's worlds to understand their
						needs in their context
					</p>
					<Link
						href={"#projects"}
						className="grid justify-center md:justify-start"
					>
						<button className="border-primary border-solid border text-primary text-xl  hover:bg-primary hover:text-white font-semibold rounded-sm p-4 mt-8 button">
							Explore Projects
						</button>
					</Link>
				</motion.div>
			</Stack>
		</Box>
	);
};

export default ServiceGroupOne;
