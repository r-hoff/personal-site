import React, { useState } from "react";
import {
	useColorModeValue,
	Flex,
	LinkBox,
	LinkOverlay,
	Heading,
	Text,
	Image,
	Tag,
	TagLabel,
	Box,
	useMediaQuery,
	Divider,
	Spacer,
	IconButton,
	HStack,
	Skeleton,
	List,
	ListItem,
	ListIcon,
	Link,
	Icon,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, FaGreaterThan } from "react-icons/fa";
import technologies from "../src/data/technologies";

export default function ProjectCard({ project }) {
	const accent = useColorModeValue(
		import.meta.env.VITE_THEME_ACCENT_COLOR_LIGHT,
		import.meta.env.VITE_THEME_ACCENT_COLOR_DARK
	);
	const [useDesktop] = useMediaQuery("(min-width: 650px)");

	const [isLoaded, setIsLoaded] = useState(false);
	function handleOnLoad() {
		setIsLoaded(true);
	}

	return (
		<Flex border="1px" borderColor={accent} h="100%" p="20px" minW="100%" rounded="xl">
			<Flex direction="column" ml="10px" mr="10px">
				<Heading size="lg" mb="10px">
					{project.name}
				</Heading>
				<Flex wrap="wrap" mb="10px">
					{project.stack.map((tech, index) => {
						return (
							<Tag
								mt="10px"
								mr="10px"
								border="1px"
								borderColor={`${technologies[tech]}.400`}
								size="md"
								key={`${project.name}${index}`}
								variant="subtle"
								colorScheme={technologies[tech]}
							>
								<TagLabel>{tech}</TagLabel>
							</Tag>
						);
					})}
				</Flex>
				<Divider mt="5px" mb="20px"></Divider>
				<HStack mb="10px" align="start">
					<Flex align="start" flexDir="column">
						<Heading fontSize={["lg", "xl"]} mb="10px">
							Description
						</Heading>
						<Text fontSize={["sm", "md", "lg"]}>{project.description}</Text>
						{project.pdf ? (
							<Link href={project.pdf.document} isExternal mt="10px" fontWeight="semibold">
								<Flex align="center">
									<Text fontSize={["md", "lg"]} _hover={{ textDecoration: "underline" }}>
										{project.pdf.caption}
									</Text>
									<Icon ml="5px" as={FaExternalLinkAlt} />
								</Flex>
							</Link>
						) : null}
						<Heading fontSize={["lg", "xl"]} mt="20px" mb="10px">
							Features
						</Heading>
						<List spacing={1}>
							{project.bullets.map((bullet) => {
								return (
									<ListItem key={bullet}>
										<Flex>
											<ListIcon as={FaGreaterThan} color="#007AFF" mt="5px" />
											<Text fontSize={["sm", "md"]}>{bullet}</Text>
										</Flex>
									</ListItem>
								);
							})}
						</List>
					</Flex>
					{useDesktop ? (
						<Box maxW="md">
							<Skeleton rounded="xl" isLoaded={isLoaded}>
								<Image
									src={`./${project.imgUrl}`}
									alt={`${project.name} image`}
									boxSize="300px"
									fit="cover"
									border="1px"
									rounded="xl"
									borderColor={accent}
									minW="250px"
									onLoad={handleOnLoad}
								/>
							</Skeleton>
						</Box>
					) : (
						<div></div>
					)}
				</HStack>
				<Spacer></Spacer>
				<Divider mt="10px"></Divider>
				<Flex mt="10px">
					<LinkBox>
						<LinkOverlay href={project.github} isExternal>
							<IconButton
								aria-label={`${project.name} GitHub link`}
								icon={<FaGithub />}
								bg="transparent"
								fontSize={["xl", "2xl"]}
							/>
						</LinkOverlay>
					</LinkBox>
					{project.link ? (
						<LinkBox>
							<LinkOverlay href={project.link} isExternal ml="5px">
								<IconButton
									aria-label={`${project.name} live project`}
									icon={<FaExternalLinkAlt />}
									bg="transparent"
									fontSize={["xl", "2xl"]}
								/>
							</LinkOverlay>
						</LinkBox>
					) : null}
				</Flex>
			</Flex>
		</Flex>
	);
}
