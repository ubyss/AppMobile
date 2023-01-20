// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Cesta from "./src/telas/Cesta";
import cesta from "./src/mocks/cesta";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) return <AppLoading />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    width: "100%",
    flex: 1,
  },
});
