import React, { lazy, Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
// import SignIn from "./components/Signin";
// import SignUp from "./components/Signup";

const SignInLazy = lazy(() => import("./components/Signin"));
const SignUpLazy = lazy(() => import("./components/Signup"));

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/auth/signin">
                <SignInLazy onSignIn={onSignIn} />
              </Route>
              <Route path="/auth/signup">
                <SignUpLazy onSignIn={onSignIn} />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    </div>
  );
};
