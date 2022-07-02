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
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import technologies from "../src/data/technologies";

export default function ProjectCard({ name, description, stack, imgUrl, github, link }) {
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
			<Flex direction="column" mr="20px">
				<Heading size="lg" mb="10px">
					{name}
				</Heading>
				<Flex wrap="wrap" mb="10px">
					{stack.map((tech, index) => {
						return (
							<Tag
								mt="10px"
								mr="10px"
								border="1px"
								borderColor={`${technologies[tech]}.400`}
								size="md"
								key={`${name}${index}`}
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
					<Text fontSize={["md", "lg"]}>{description}</Text>
					{useDesktop ? (
						<Box maxW="md">
							<Skeleton rounded="xl" isLoaded={isLoaded}>
								<Image
									src={`./${imgUrl}`}
									alt={`${name} image`}
									boxSize="300px"
									fit="cover"
									border="1px"
									rounded="xl"
									borderColor={accent}
									minW="200px"
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
						<LinkOverlay href={github} isExternal>
							<IconButton
								aria-label={`${name} GitHub link`}
								icon={<FaGithub />}
								bg="transparent"
								fontSize={["lg", "xl", "2xl"]}
							/>
						</LinkOverlay>
					</LinkBox>
					{link ? (
						<LinkBox>
							<LinkOverlay href={link} isExternal>
								<IconButton
									aria-label={`${name} live project`}
									icon={<FaExternalLinkAlt />}
									bg="transparent"
									fontSize={["lg", "xl", "2xl"]}
								/>
							</LinkOverlay>
						</LinkBox>
					) : null}
				</Flex>
			</Flex>
		</Flex>
	);
}
