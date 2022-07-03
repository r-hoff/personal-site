import {
	Box,
	IconButton,
	Flex,
	Spacer,
	Center,
	useColorMode,
	useColorModeValue,
	useMediaQuery,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	VStack,
	HStack,
	LinkBox,
	LinkOverlay,
	Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBar({ currentSection }) {
	// theme colors
	const { colorMode, toggleColorMode } = useColorMode();
	const bgPrimary = useColorModeValue(
		import.meta.env.VITE_THEME_PRIMARY_COLOR_LIGHT,
		import.meta.env.VITE_THEME_PRIMARY_COLOR_DARK
	);
	const bgSecondary = useColorModeValue(
		import.meta.env.VITE_THEME_SECONDARY_COLOR_LIGHT,
		import.meta.env.VITE_THEME_SECONDARY_COLOR_DARK
	);
	const accent = useColorModeValue(
		import.meta.env.VITE_THEME_ACCENT_COLOR_LIGHT,
		import.meta.env.VITE_THEME_ACCENT_COLOR_DARK
	);

	const [useDesktop] = useMediaQuery("(min-width: 962px)");

	const title = "rhoff.info";
	const links = ["Home", "Projects", "About", "Contact"];

	const { isOpen, onOpen, onClose } = useDisclosure();

	function scrollToSection(sectionID) {
		let posX = 0,
			posY = 0;

		while (sectionID != null) {
			posX += sectionID.offsetLeft;
			posY += sectionID.offsetTop;
			sectionID = sectionID.offsetParent;
			window.scrollTo({ top: posY, left: posX, behavior: "smooth" });
		}
	}

	return useDesktop ? (
		<Flex
			bg={bgPrimary}
			p="3"
			borderBottom="1px"
			borderColor={accent}
			sx={{ position: "sticky", top: "0", zIndex: 2 }}
		>
			<Center fontWeight="semibold" pl="3" fontSize="xl">
				{title}
			</Center>
			<Spacer />
			<Flex>
				{links.map((link) => {
					return (
						<Button
							aria-label={`Link to ${link}`}
							fontSize="md"
							pl="35px"
							pr="35px"
							pb="10px"
							fontWeight="semibold"
							color={colorMode === "light" ? "black" : "white"}
							_hover={{ bg: bgSecondary }}
							borderBottom="2px"
							borderColor={currentSection === link ? "#007AFF" : accent}
							cursor="pointer"
							variant="link"
							borderRadius="0"
							onClick={(event) => {
								event.preventDefault();
								const section = link === "Home" ? "top" : document.getElementById(link);
								scrollToSection(section);
								onClose();
							}}
							key={link}
						>
							{link}
						</Button>
					);
				})}
			</Flex>
			<Spacer />
			<HStack>
				<LinkBox>
					<LinkOverlay href="https://www.linkedin.com/in/ryanchoff" isExternal>
						<IconButton
							aria-label="LinkedIn profile"
							icon={<FaLinkedin />}
							bg="transparent"
							color="#0A66C2"
							fontSize={["lg", "xl", "2xl"]}
						/>
					</LinkOverlay>
				</LinkBox>
				<LinkBox>
					<LinkOverlay href="https://github.com/r-hoff" isExternal>
						<IconButton
							aria-label="GitHub profile"
							icon={<FaGithub />}
							bg="transparent"
							color={"#4183C4"}
							fontSize={["lg", "xl", "2xl"]}
						/>
					</LinkOverlay>
				</LinkBox>
				<LinkBox>
					<LinkOverlay href="https://twitter.com/itsRyanHoff" isExternal>
						<IconButton
							aria-label="Twitter profile"
							icon={<FaTwitter />}
							bg="transparent"
							color="#1D9BF0"
							fontSize={["lg", "xl", "2xl"]}
						/>
					</LinkOverlay>
				</LinkBox>
				<Box>
					<IconButton
						aria-label="Toggle light mode"
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
						bg="transparent"
						onClick={toggleColorMode}
						fontSize={["lg", "xl", "2xl"]}
					/>
				</Box>
			</HStack>
		</Flex>
	) : (
		<Flex
			bg={bgPrimary}
			p="3"
			borderBottom="1px"
			borderColor={accent}
			zIndex="1"
			sx={{ position: "sticky", top: "0", zIndex: 2 }}
		>
			<Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent textAlign="center">
					<DrawerCloseButton />
					<DrawerHeader fontSize="2xl">{title}</DrawerHeader>
					<DrawerBody>
						<VStack spacing="25px">
							{links.map((link) => {
								return (
									<Button
										fontSize="xl"
										onClick={(event) => {
											event.preventDefault();
											const section = link === "Home" ? "top" : document.getElementById(link);
											scrollToSection(section);
											onClose();
										}}
										_hover={{ textDecoration: "underline" }}
										variant="link"
										color={colorMode === "light" ? "black" : "white"}
										key={link}
									>
										{link}
									</Button>
								);
							})}
						</VStack>
					</DrawerBody>
					<DrawerFooter borderTop="1px" borderColor={accent} justifyContent="center">
						<HStack>
							<LinkBox>
								<LinkOverlay href="https://www.linkedin.com/in/ryanchoff" isExternal>
									<IconButton
										aria-label="LinkedIn profile"
										icon={<FaLinkedin />}
										bg="transparent"
										color="#0A66C2"
										fontSize={"2xl"}
									/>
								</LinkOverlay>
							</LinkBox>
							<LinkBox>
								<LinkOverlay href="https://github.com/r-hoff" isExternal>
									<IconButton
										aria-label="GitHub profile"
										icon={<FaGithub />}
										bg="transparent"
										color={"#4183C4"}
										fontSize={"2xl"}
									/>
								</LinkOverlay>
							</LinkBox>
							<LinkBox>
								<LinkOverlay href="https://twitter.com/itsRyanHoff" isExternal>
									<IconButton
										aria-label="Twitter profile"
										icon={<FaTwitter />}
										bg="transparent"
										color="#1D9BF0"
										fontSize={"2xl"}
									/>
								</LinkOverlay>
							</LinkBox>
						</HStack>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Box>
				<IconButton
					aria-label="Open navigation menu"
					icon={<HamburgerIcon />}
					bg="transparent"
					onClick={onOpen}
					fontSize={"3xl"}
				/>
			</Box>
			<Spacer />
			<Center fontWeight="semibold" fontSize="lg">
				{title}
			</Center>
			<Spacer />
			<Box>
				<IconButton
					aria-label="Toggle light mode"
					icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					bg="transparent"
					onClick={toggleColorMode}
					fontSize={"lg"}
				/>
			</Box>
		</Flex>
	);
}
