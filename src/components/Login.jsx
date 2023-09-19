import { useState } from "react";

export default function Login(props) {
  const [passcode, setPasscode] = useState("");
  const [tryAgain, setTryAgain] = useState(false);

  function wrong() {
    setTryAgain(true);
    setPasscode("");
  }

  function type(event) {
    setPasscode(event.target.value);
  }

  return (
    <div>
      <div className="login_box">
        <h1>Sculp It</h1>
        <p className="pass">Enter password</p>
        <p className="hint">
          Hint: Its the firstname of the creator of this app.
        </p>
        <input onChange={type} type="password" placeholder="Password" />
        <button onClick={passcode === "ankit" ? props.onclick : wrong}>
          Login
        </button>
        {tryAgain && <p>Try Again</p>}
      </div>
    </div>
  );
}
