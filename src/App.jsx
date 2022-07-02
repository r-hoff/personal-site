import { Center, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import ProjectGrid from "../components/ProjectGrid";
import Home from "../components/Home";
import Education from "../components/Education";
import WorkExp from "../components/WorkExp";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
	// handles navigation highlighting for NavBar component
	let [current, setCurrent] = useState("Home");
	window.addEventListener("scroll", () => {
		const sections = document.querySelectorAll("section");
		sections.forEach((section) => {
			if (scrollY >= section.offsetTop - 100) {
				setCurrent(section.getAttribute("id"));
			}
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				setCurrent("Contact");
			}
		});
	});

	return (
		<div>
			<NavBar currentSection={current}></NavBar>
			<section id="Home">
				<Home></Home>
			</section>
			<section id="Projects">
				<Center>
					<Divider w="75%"></Divider>
				</Center>
				<Heading as="h2" textAlign="center" pt="100" pb="60px" size="3xl">
					Projects
				</Heading>
				<ProjectGrid></ProjectGrid>
			</section>
			<section id="About">
				<Center>
					<Divider w="75%"></Divider>
				</Center>
				<Heading as="h2" textAlign="center" pt="100px" pb="60px" size="3xl">
					About
				</Heading>
				<Education></Education>
				<WorkExp></WorkExp>
			</section>
			<section id="Contact">
				<Center>
					<Divider w="75%"></Divider>
				</Center>
				<Heading as="h2" textAlign="center" pt="100px" pb="60px" size="3xl">
					Contact
				</Heading>
				<Contact></Contact>
				<Center>
					<Divider w="90%"></Divider>
				</Center>
			</section>
			<Footer></Footer>
		</div>
	);
}

export default App;
