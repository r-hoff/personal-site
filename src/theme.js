import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'system',
        useSystemColorMode: true,
    },
    colors: {
        brand: {
            "50": "#F0F0F5",
            "100": "#D4D5E3",
            "200": "#B8BAD1",
            "300": "#9C9FBF",
            "400": "#8084AD",
            "500": "#65699A",
            "600": "#50547C",
            "700": "#3C3F5D",
            "800": "#282A3E",
            "900": "#14151F"
        },
    },
})

export default theme