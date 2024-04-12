import "./App.css";
import styled, {ThemeProvider} from "styled-components";
import{ darkTheme } from "./utlis/Themes";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <body>Portfolio</body>
    </ThemeProvider>
  )
}

export default App;