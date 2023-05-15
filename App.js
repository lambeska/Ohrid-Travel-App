import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
import OhridCity from "./screens/OhridCity";
import LakeOhrid from "./screens/LakeOhrid";
import LakeCreation from "./screens/LakeCreation";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="OhridCity" component={OhridCity} />
          <Stack.Screen name="LakeOhrid" component={LakeOhrid} />
          <Stack.Screen name="LakeCreation" component={LakeCreation} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
