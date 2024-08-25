import { ThemeProvider } from "./provider";

export const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};


import { useTheme } from "./hook";
const App = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <h1>Theme Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
