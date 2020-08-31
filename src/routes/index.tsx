import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Reader from '../pages/Reader';
import Register from '../pages/Register';
import RegisterMulti from '../pages/RegisterMulti';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#f7b731' },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerLeftContainerStyle: { paddingStart: 5 },
            cardStyle: { backgroundColor: '#dfe6e9' },
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Reader" component={Reader} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="RegisterMulti" component={RegisterMulti} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
