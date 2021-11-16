import Link from "next/link"
import Image from "next/image"
import {Text, useColorModeValue} from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;
	margin-top: 7px;
`

const Logo = ()=>{
	const src = `https://cdn-icons-png.flaticon.com/512/181/181549.png`
	return(
		<Link href="/">
			<a>
				<LogoBox>
				<Image loader={() => src} src={src} width={30} height={30} alt="logo" />
				<Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} 
					  fontFamily="M PLUS Rounded 1c"
					  bold="weight"
					  ml={3}>
					  	Rudenko Stas
					  </Text>	
				</LogoBox>
			</a>
		</Link>
	)
}

export default Logo