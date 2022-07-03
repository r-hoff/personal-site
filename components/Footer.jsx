import { Flex, useMediaQuery, LinkBox, LinkOverlay, IconButton, HStack } from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import userInfo from "../src/data/user.info";

export default function Footer() {
	const [useDesktop] = useMediaQuery("(min-width: 1200px)");
	let maxW = "90%";
	if (useDesktop) {
		maxW = "80%";
	}
	return (
		<Flex w="100%" justify="center" flexDir="column" align="center" pt="30px" mb="20px">
			<Flex maxW={maxW} minW={maxW} justify="center" fontSize={["xs", "sm"]} mb="2px">
				Proudly made by Ryan Hoff
			</Flex>
			<HStack spacing="0px">
				<LinkBox>
					<LinkOverlay href={`mailto:${userInfo.email}`} isExternal>
						<IconButton
							aria-label="Twitter profile"
							icon={<IoMdMail />}
							bg="transparent"
							fontSize={["md", "lg"]}
						/>
					</LinkOverlay>
				</LinkBox>
				<LinkBox>
					<LinkOverlay href={userInfo.linkedin} isExternal>
						<IconButton
							aria-label="LinkedIn profile"
							icon={<FaLinkedin />}
							bg="transparent"
							fontSize={["md", "lg"]}
						/>
					</LinkOverlay>
				</LinkBox>
				<LinkBox>
					<LinkOverlay href={userInfo.github} isExternal>
						<IconButton
							aria-label="GitHub profile"
							icon={<FaGithub />}
							bg="transparent"
							fontSize={["md", "lg"]}
						/>
					</LinkOverlay>
				</LinkBox>
				<LinkBox>
					<LinkOverlay href={userInfo.twitter} isExternal>
						<IconButton
							aria-label="Twitter profile"
							icon={<FaTwitter />}
							bg="transparent"
							fontSize={["md", "lg"]}
						/>
					</LinkOverlay>
				</LinkBox>
			</HStack>
		</Flex>
	);
}
