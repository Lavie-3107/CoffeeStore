import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../../../screen/home/homeScreen';
import ProductDetail from '../../../../../screen/productDetail/productDetail';
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown:false
            }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                headerTitle:""
            }} />
        </Stack.Navigator>
    )
}
export default StackNavigation