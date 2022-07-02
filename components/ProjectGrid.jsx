import React from "react";
import { SimpleGrid, Box, useMediaQuery, Center } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import projects from "../src/data/projects";

export default function ProjectGrid() {
	let marginTop = "5";
	const [useDesktop] = useMediaQuery("(min-width: 1024px)");
	let maxW = "100%";
	if (useDesktop) {
		maxW = "90%";
	}
	let cols = 2;
	useDesktop ? (cols = 2) : (cols = 1);
	return (
		<Center pb="100">
			<SimpleGrid columns={cols} spacing="40px" maxW={maxW}>
				{projects.map((project, index) => {
					return index % 2 === 0 ? (
						<Box
							ml={useDesktop ? `${marginTop / 2}%` : `${marginTop * 2}%`}
							mr={useDesktop ? `0%` : `${marginTop * 2}%`}
							boxShadow="lg"
							rounded="xl"
							key={project.name}
						>
							<ProjectCard
								name={project.name}
								description={project.description}
								stack={project.stack}
								imgUrl={project.imgUrl}
								github={project.github}
								link={project.link}
							></ProjectCard>
						</Box>
					) : (
						<Box
							ml={useDesktop ? `0%` : `${marginTop * 2}%`}
							mr={useDesktop ? `${marginTop / 2}%` : `${marginTop * 2}%`}
							boxShadow="lg"
							rounded="xl"
							key={project.name}
						>
							<ProjectCard
								name={project.name}
								description={project.description}
								stack={project.stack}
								imgUrl={project.imgUrl}
								github={project.github}
								link={project.link}
							></ProjectCard>
						</Box>
					);
				})}
			</SimpleGrid>
		</Center>
	);
}
