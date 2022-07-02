import {
	Flex,
	Box,
	Heading,
	Text,
	Center,
	useMediaQuery,
	Stack,
	Input,
	Textarea,
	Button,
	FormControl,
	Icon,
	Link,
} from "@chakra-ui/react";
import { EmailIcon, CheckIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const [useDesktop] = useMediaQuery("(min-width: 1024px)");
	let maxW = "80%";
	if (useDesktop) {
		maxW = "30%";
	}

	const [loadingStatus, setloadingStatus] = useState(false);
	const [disableSend, setDisableSend] = useState(false);
	const [sentMessage, setSentMessage] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setloadingStatus(true);
		let templateParams = {
			name: event.target[0].value,
			email: event.target[1].value,
			message: event.target[2].value,
		};
		emailjs
			.send(
				"rhoff.info_service",
				"template_jyrkcnl",
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					setloadingStatus(false);
					setDisableSend(true);
					setSentMessage(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Center mb="100px">
			<Flex flexDir="column" maxW={maxW} justify="center" minW={maxW}>
				<Heading mt="30px" mb="20px">
					Reach Out
				</Heading>
				<Center mt="20px" mb="20px">
					<Link href="https://www.linkedin.com/in/ryanchoff" isExternal>
						<Icon
							aria-label="LinkedIn profile"
							as={FaLinkedin}
							color="#0A66C2"
							bg="transparent"
							fontSize={["5xl", "7xl"]}
							focusable={true}
							_hover={{ opacity: 0.8 }}
						/>
					</Link>
					<Flex w="10%"></Flex>
					<Link href="https://twitter.com/itsRyanHoff" isExternal>
						<Icon
							aria-label="Twitter profile"
							as={FaTwitter}
							color="#1D9BF0"
							bg="transparent"
							fontSize={["5xl", "7xl"]}
							focusable={true}
							_hover={{ opacity: 0.8 }}
						/>
					</Link>
				</Center>
				<Text align="center" fontSize="xl">
					I'd love to hear from you—send me a message!
				</Text>
				<Heading mt="30px" mb="20px">
					Send Message
				</Heading>
				<Stack spacing={3}>
					<form onSubmit={handleSubmit}>
						<FormControl isRequired>
							<Input
								mb="10px"
								variant="flushed"
								placeholder="Name"
								size="md"
								type="text"
								onChange={(event) => setName(event.currentTarget.value)}
							/>
						</FormControl>
						<FormControl isRequired>
							<Input
								mb="10px"
								variant="flushed"
								placeholder="Email"
								size="md"
								type="email"
								onChange={(event) => setEmail(event.currentTarget.value)}
							/>
						</FormControl>
						<FormControl isRequired>
							<Textarea
								variant="flushed"
								placeholder="Enter Message"
								size="md"
								type="textarea"
								onChange={(event) => setMessage(event.currentTarget.value)}
							/>
						</FormControl>
						<Box mt="15px">
							<Button
								leftIcon={sentMessage ? <CheckIcon /> : <EmailIcon />}
								disabled={disableSend}
								isLoading={loadingStatus}
								type="submit"
								colorScheme={sentMessage ? "green" : "gray"}
								variant="solid"
							>
								{sentMessage ? "Sent!" : "Send"}
							</Button>
						</Box>
					</form>
				</Stack>
			</Flex>
		</Center>
	);
}
