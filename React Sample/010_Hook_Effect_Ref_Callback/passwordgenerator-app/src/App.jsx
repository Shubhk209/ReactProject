import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [SplCharAllowed, setSplCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator - useCallBack to optimize/cache function
  const pwdGenerator = useCallback(() => {
    const baseAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "01234567890";
    const specialChars = "!@#$%^&*()-_=+[]{}~";
    let pass = "";

    let desiredPasswordLength = length;
    let IsNumAllowed = numAllowed;
    let IsSplCharAllowed = SplCharAllowed;

    const fullCharacterSet =
      baseAlphabet +
      (IsNumAllowed ? digits : "") +
      (IsSplCharAllowed ? specialChars : "");

    for (let i = 1; i <= desiredPasswordLength; i++) {
      let charIndex = Math.floor(Math.random() * fullCharacterSet.length + 1);
      pass += fullCharacterSet.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllowed, SplCharAllowed, setPassword]);

  // function
  const copyPasswordToClipBoard = useCallback(() => {
    PasswordRef.current?.select(); // to select the text on click on btn.
    //PasswordRef.current?.select(0, 2); // select only 3 text
    PasswordRef.current.window.navigator.clipboard.writeText(password);
  }, [password]);

  //UseEffect to trigger in any change in Dependency list
  useEffect(() => {
    // run the function on page load or on any change in Dependency list.
    pwdGenerator();
  }, [length, numAllowed, SplCharAllowed, pwdGenerator]);

  //useRef Hook
  const PasswordRef = useRef(null);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"
      >
        <h1 className="text-white my-3 text-center">Password Generator</h1>
        {/* Text Box */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={PasswordRef}
            readOnly
          />
          {/* Copy Button */}
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          {/* Length Ranger */}
          <div className="flex items-center">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              id="psw-length-ranger"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="psw-length-ranger">Length : {length} </label>
          </div>
          {/* Number Allowed Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="inpt-chk-IsNumAllowed"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="inpt-chk-IsNumAllowed">Number</label>
          </div>
          {/* Special Character Allowed Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={SplCharAllowed}
              className="checkbox"
              id="inpt-chk-sCharAllowed"
              onChange={() => setSplCharAllowed((prev) => !prev)}
            />
            <label htmlFor="inpt-chk-sCharAllowed">Special Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
