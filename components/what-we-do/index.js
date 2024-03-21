import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../animation/variants";

const WhatWeDo = () => {
	return (
		<Box className="bg-gray-300 mt-20">
			<Box maxW={"1200px"} mx={"auto"} px={4} py={14}>
				<Stack
					direction="row"
					bgColor={"brand.black"}
					px={{ base: 12, md: 24 }}
					py={4}
					w={"max-content"}
					justifySelf={{ base: "center", sm: "flex-start" }}
				>
					<Text fontSize={"lg"} color={"#fff"} fontWeight={"semibold"}>
						What We Do
					</Text>
					<Box
						w={"15px"}
						h={"15px"}
						borderRadius={"full"}
						bgGradient={
							"linear-gradient(to bottom, brand.primary 0%, rgba(41,47,143,0) 100%)"
						}
					></Box>
				</Stack>
				<Stack
					mt={10}
					direction={{ base: "column-reverse", md: "row" }}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Image
						src="/assets/service_1.jpeg"
						alt="architecture"
						// width="500"
						// height="100"
						className="w-[100vw] sm:w-[450px] 3xl:w-[700px] lg:h-[350px] object-cover"
						as={motion.img}
						viewport={{ once: true }}
						variants={slideUp}
						initial="hidden"
						whileInView="show"
					/>
					<motion.p
						viewport={{ once: true }}
						variants={slideUp}
						initial="hidden"
						whileInView="show"
						className="mt-2 flex-[.9] 3xl:flex-[.8] text-base lg:text-2xl text-center md:text-left"
					>
						We address requirements and constraints with the right mix of
						analytical thinking, creativity and artistry - designing buildings
						that make a statement and enrich our experience.
					</motion.p>
				</Stack>
			</Box>
		</Box>
	);
};

export default WhatWeDo;
