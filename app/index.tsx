import { Image } from "expo-image";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        style={{ height: 900, width: 300 }}
        source={{ uri: "https://loading.io/assets/mod/spinner/spinner/lg.gif" }}
      />
    </View>
  );
}
