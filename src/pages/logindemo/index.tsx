import React, { useEffect, useState } from "react";
import LoginDemo from "../../components/LoginDemo";
import DemoHome from "../../components/LoginDemo/DemoHome";
import { Text } from "@mantine/core";
function LoginDemoScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation =
      localStorage.getItem("isLoggedInDemo");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    console.log(email, password);
    localStorage.setItem("isLoggedInDemo", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedInDemo");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };

  // creating a current hour and minute state
  const [date, setDate] = useState<string>(
    new Date().toLocaleString("tr-TR", {
      hour12: false, // 24 hour format
      timeZone: "Europe/Istanbul",
    })
  );

 
  // creating a function to update the time
  const updateTime = () => {
    setDate(
      new Date().toLocaleString("tr-TR", {
        hour12: false, // 24 hour format
        timeZone: "Europe/Istanbul",
      })
    );
  };

  // using the useEffect hook to update the state every second
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // destructuring the date state
  const [hour, minute, second] = date.split(" ")[1]?.split(":") || ["00", "00", "00"] as string[];

  return (
    <React.Fragment>
      <Text align="center">
        Time: {hour}:{minute}:{second}
      </Text>
      <Text align="center">This is a demo login page</Text>
      {!isLoggedIn && <LoginDemo onLogin={loginHandler} />}
      {isLoggedIn && <DemoHome onLogout={logoutHandler} />}
    </React.Fragment>
  );
}

export default LoginDemoScreen;
