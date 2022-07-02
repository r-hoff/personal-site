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
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import work from "../src/data/work";

export default function WorkExp() {
	const bgPrimary = useColorModeValue(
		import.meta.env.VITE_THEME_PRIMARY_COLOR_LIGHT,
		import.meta.env.VITE_THEME_PRIMARY_COLOR_DARK
	);
	const [useDesktop] = useMediaQuery("(min-width: 1200px)");
	let maxW = "90%";
	if (useDesktop) {
		maxW = "80%";
	}
	return (
		<Center mb="105px">
			<Flex flexDir="column" maxW={maxW} justify="center" minW={maxW}>
				<Heading mt="30px" mb="20px">
					Work Experience
				</Heading>
				<Accordion allowMultiple boxShadow="xl">
					{work.map((job) => {
						return (
							<AccordionItem key={job.company.trim()}>
								<h2>
									<AccordionButton
										bg={bgPrimary}
										pb="20px"
										_hover={{
											bg: job.color,
											color: "white",
											opacity: 0.9,
										}}
										_expanded={{
											bg: job.color,
											color: "white",
										}}
										textAlign="left"
										fontSize={["lg", "xl", "2xl", "3xl", "4xl", "5xl"]}
									>
										<Box flex="1">
											<Flex>
												<Flex flexDir="column">
													<Text>{job.company}</Text>
													<Text as="em" fontSize={["sm", "md", "lg", "xl", "2xl"]} align="left">
														{`${job.start} - ${job.end}`}
													</Text>
												</Flex>
												<Spacer></Spacer>
											</Flex>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel mt="-20px">
									{job.roles.map((role) => {
										return (
											<Flex flexDir="column" key={`${role.title.trim()}`}>
												<Flex align="center" mt="30px" mb="10px">
													<Text as="em" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
														{role.title}
													</Text>
													<Spacer />
													<Text fontSize={["xs", "sm"]}>
														{`(${role.startMonth}/${role.startYear} - ${role.endMonth}/${role.endYear})`}
													</Text>
												</Flex>
												<List spacing={1}>
													{role.bullets.map((bullet, index) => {
														return (
															<ListItem
																fontSize={["sm", "md"]}
																key={`${role.title.trim()}_${index}`}
															>
																<ListIcon as={FaGreaterThan} color="#007AFF" />
																{bullet}
															</ListItem>
														);
													})}
												</List>
											</Flex>
										);
									})}
								</AccordionPanel>
							</AccordionItem>
						);
					})}
				</Accordion>
			</Flex>
		</Center>
	);
}
