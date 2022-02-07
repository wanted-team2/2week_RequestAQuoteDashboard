import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
${reset}
* {
	box-sizing: border-box;
	margin: 0;
}

html, body {
	color: ${theme.colors.primary};
	background-color: #fff;
	font-family: 'Noto Sans KR',system-ui, Dotum,'돋움', Helvetica, "Apple SD Gothic Neo", sans-serif; 
}

a {
	color: inherit;
	text-decoration: none;
}

button {
	cursor: pointer;
}

ol, ul, li {
	list-style: none;
}

img {
	display: block;
	width: 100%;
	height: 100%;
}

button {
	display: inline-block;
	background: transparent;
	border: none;
}
`;

export default GlobalStyle;
