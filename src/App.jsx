import { useEffect, useState } from "react";
import { Resizer } from "./components/resizer.jsx";
import { verifyLogin } from "./components/helper/token.jsx";
import { PasscodeInput } from "passcode-input";
import "./App.css";

function App() {
  const [isLoginPassOpen, setIsLoginPassOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(verifyLogin());

  useEffect(() => {
    if (verifyLogin()) {
      setIsLogin(true);
      return setIsLoginPassOpen(false);
    }
    return setIsLoginPassOpen(true);
  }, [isLoginPassOpen]);

  return <>{isLogin ? <Resizer /> : <PasscodeInput isLoginPassOpen={isLoginPassOpen} setIsLoginPassOpen={setIsLoginPassOpen} />}</>;
}

export default App;
