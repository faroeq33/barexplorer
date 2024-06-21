import { Image } from "react-native";

function LogoTitle() {
  return (
    <>
      <Image
        source={require("../assets/logo.png")}
        // className="w-10 h-10"
        style={{ width: 25, height: 25 }}
      />
    </>
  );
}

export default LogoTitle;
