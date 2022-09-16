import { createStackNavigator } from "@react-navigation/stack";
import Home from "../paginas/home";
import Detalhes from "../paginas/detalhes";
const Stack = createStackNavigator();

export default function Stackroutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}
