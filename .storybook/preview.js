import { ThemeProvider } from 'styled-components';
import theme from "../src/styles/theme.style"
import { BrowserRouter } from 'react-router-dom';


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// decorator로 theme 스타일 적용
export const decorators = [
  Story =>(
    <ThemeProvider theme={theme}>
          <BrowserRouter>
                <Story/>
            </BrowserRouter>
    </ThemeProvider>
  )
]

export default preview;

