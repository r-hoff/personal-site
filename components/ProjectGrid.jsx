import React from "react";
import { SimpleGrid, Box, useMediaQuery, Center } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import projects from "../src/data/projects";

export default function ProjectGrid() {
	const [useDesktop] = useMediaQuery("(min-width: 1281px)");
	let cols = 2;
	useDesktop ? (cols = 2) : (cols = 1);
	return (
		<Center pb="100">
			<SimpleGrid columns={cols} spacing="40px" maxW="90%">
				{projects.map((project) => {
					return (
						<Box boxShadow="lg" rounded="xl" key={project.name}>
							<ProjectCard project={project}></ProjectCard>
						</Box>
					);
				})}
			</SimpleGrid>
		</Center>
	);
}
