import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {HashRouter, Route, Switch} from "react-router-dom";
import ProjectDetail from "./containers/projectDetail/ProjectDetail";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
  const darkPref =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    darkPref?.matches ?? false
  );

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <HashRouter basename="/">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/projects/:slug" component={ProjectDetail} />
          </Switch>
        </HashRouter>
      </StyleProvider>
    </div>
  );
}

export default App;
