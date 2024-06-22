import { useEffect, useState } from "react";
import * as Location from "expo-location";

function useLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let userMessage = "Waiting..";
  if (errorMsg) {
    userMessage = errorMsg;
  } else if (location) {
    userMessage = JSON.stringify(location);
  }

  return { location, setLocation, errorMsg, setErrorMsg, userMessage };
}

export default useLocation;
