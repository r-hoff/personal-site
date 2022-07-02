import {
	Flex,
	Image,
	Heading,
	Text,
	Center,
	useMediaQuery,
	SkeletonCircle,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/a11y";
import images from "../src/data/images";

export default function Home() {
	const [useDesktop] = useMediaQuery("(min-width: 1200px)");
	let maxW = "100";
	if (useDesktop) {
		maxW = "50";
	}
	const [isLoaded, setIsLoaded] = useState(false);
	function handleOnLoad() {
		setIsLoaded(true);
	}
	return (
		<Flex flexDir="column" pt="20px" align="center">
			<Text fontSize="xl" textAlign="center" pb="10px">
				Hello! 👋 I am Ryan Hoff.
			</Text>
			<Heading as="h3" textAlign="center" pb="10px" size="xl">
				Software Developer & Financial Analyst
			</Heading>
			<Flex maxW={`${maxW}%`}>
				<Swiper
					slidesPerView={1}
					spaceBetween={50}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation, A11y]}
					a11y={true}
				>
					{images.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<Center mb="60px" mt="25px">
									<SkeletonCircle isLoaded={isLoaded} size="400px" borderRadius="full">
										<Image
											key={index}
											src={`./${img.imgUrl}`}
											alt={img.alt}
											boxSize="400px"
											fit="cover"
											borderRadius="full"
											boxShadow="dark-lg"
											onLoad={handleOnLoad}
										></Image>
									</SkeletonCircle>
								</Center>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Flex>
			<Flex maxW={`${maxW - 20}%`} pb="100px">
				<Text fontSize="xl" textAlign="center">
					Life long learner, avid creator and builder. Passionate about sustainability and
					environmental awareness—dedicated to building a better world for future generations.
				</Text>
			</Flex>
		</Flex>
	);
}
