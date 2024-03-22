import React from "react";
import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import services from "./data";

const Services = () => {
	return (
		<Box id="services" maxW={"1200px"} mx={"auto"} px={4} mt={32} display={"grid"}>
			<Stack
				direction="row"
				bgColor={"brand.black"}
				px={{ base: 12, md: 24 }}
				py={4}
				w={"max-content"}
				justifySelf={{ base: "center", sm: "flex-end" }}
			>
				<Text fontSize={"lg"} color={"#fff"} fontWeight={"semibold"}>
					Services
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
			<Box
				mt={8}
				display={{ base: "grid", lg: "flex" }}
				gridTemplateColumns={"1fr 1fr"}
				flexWrap={"wrap"}
				gap={{ base: 8, md: 12 }}
				justifyContent={"center"}
			>
				{services.map((item) => {
					return (
						<Card
							flexDirection={{ base: "column", sm: "row" }}
							alignItems={{ base: "center", sm: "flex-start" }}
							flexBasis={"30%"}
							gap={4}
							p={4}
							w={"full"}
							borderRadius={0}
							key={item.name}
						>
							<Image
								src={item.imageUrl}
								width={{ base: "full", sm: "70px" }}
								maxH={"70px"}
								alt={item.name}
							/>
							<Stack alignSelf={"center"}>
								<Text
									fontWeight={"bold"}
									textAlign={{ base: "center", sm: "left" }}
								>
									{item.name}
								</Text>
							</Stack>
						</Card>
					);
				})}
			</Box>
		</Box>
	);
};

export default Services;
