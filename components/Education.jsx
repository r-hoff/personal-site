import {
	Flex,
	Box,
	Heading,
	Text,
	Center,
	useMediaQuery,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	useColorMode,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Image,
	Spacer,
	SkeletonText,
	Skeleton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import education from "../src/data/education";

export default function Education() {
	// theme colors and breakpoints
	const { colorMode } = useColorMode();
	const bgPrimary = useColorModeValue(
		import.meta.env.VITE_THEME_PRIMARY_COLOR_LIGHT,
		import.meta.env.VITE_THEME_PRIMARY_COLOR_DARK
	);
	const [useDesktop] = useMediaQuery("(min-width: 1200px)");
	let maxW = "90%";
	if (useDesktop) {
		maxW = "80%";
	}

	const [isLoaded, setIsLoaded] = useState(false);
	const [skeletonMargin, setSkeletonMargin] = useState(10);
	const [skeletonSize, setSkeletonSize] = useState(40);
	function handleOnLoad() {
		setSkeletonMargin(0);
		setSkeletonSize(0);
		setIsLoaded(true);
	}

	return (
		<Center mb="20px">
			<Flex flexDir="column" maxW={maxW} justify="center" minW={maxW}>
				<Heading mb="20px">Education</Heading>
				<Accordion allowMultiple boxShadow="xl">
					{education.map((item, index) => {
						return (
							<AccordionItem key={item.school.trim()}>
								<h2>
									<AccordionButton
										bg={bgPrimary}
										pb="20px"
										_hover={{
											bg: item.color,
											color: "white",
											opacity: 0.9,
										}}
										_expanded={{
											bg: item.color,
											color: "white",
										}}
										fontSize={["xl", "3xl", "3xl", "4xl", "5xl"]}
									>
										<Box flex="1">
											<Flex>
												<Flex flexDir="column">
													<Flex align="center" mt="10px" mb="10px">
														<Skeleton
															height={`${skeletonSize}px`}
															width={`${skeletonSize}px`}
															isLoaded={isLoaded}
															rounded="xl"
														/>
														<SkeletonText
															ml={`${skeletonMargin}px`}
															noOfLines={2}
															spacing="3"
															maxW="70%"
															isLoaded={isLoaded}
														>
															<Image
																src={
																	colorMode === "light"
																		? `./${item.imgUrlLight}`
																		: `./${item.imgUrlDark}`
																}
																alt={item.school}
																h="100px"
																maxW="100%"
																fit="scale-down"
																onLoad={handleOnLoad}
															></Image>
														</SkeletonText>
													</Flex>
													<Text as="em" fontSize={["md", "lg", "xl", "2xl"]} align="left">
														{item.degree}
													</Text>
												</Flex>
												<Spacer></Spacer>
												<Center mr="20px" fontWeight="semibold">
													<Text fontSize={["xl", "2xl", "3xl", "4xl"]}>{item.gpa} GPA</Text>
												</Center>
											</Flex>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel>
									<List spacing={2}>
										{item.bullets.map((bullet, index) => {
											return (
												<ListItem key={`${item.school.trim()}_${index}`}>
													<Flex>
														<ListIcon as={FaGreaterThan} color="#007AFF" key={index} mt="5px" />
														<Text fontSize={["md", "lg"]}>{bullet}</Text>
													</Flex>
												</ListItem>
											);
										})}
									</List>
								</AccordionPanel>
							</AccordionItem>
						);
					})}
				</Accordion>
			</Flex>
		</Center>
	);
}
