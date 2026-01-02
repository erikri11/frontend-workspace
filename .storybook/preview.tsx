import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../src/shared/theme/mui/theme";

import "../src/shared/styles/variables.scss";
import "../src/shared/styles/global";
// import '@shared/theme/mui/theme.ts';
const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
