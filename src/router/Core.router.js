import React, {Fragment, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox, StatusBar, Alert} from 'react-native';
import {Provider} from 'react-redux';
import {
    navigationRef,
    isReadyRef,
    navigate,
  } from '../libs/helpers/RootNavigation';
  import Redux from "../configs/redux/Redux,config"
  import Test from '../screens/Test.screen';
import DetailPokemon  from '../screens/DetailPokemon.screen';

const Stack = createNativeStackNavigator();

const Core = () => {
LogBox.ignoreAllLogs(true);
  return (
    <Fragment>
      <Provider  store={Redux}>
        <StatusBar translucent={false} />
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              isReadyRef.current = true;
            }}>
            <Stack.Navigator
              initialRouteName="Test"
              screenOptions={{
                headerShown: true,
                animation: 'none',
              }}>
              <Stack.Screen
                name="Test"
                component={Test}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="DetailPokemon"
                component={DetailPokemon}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    </Fragment>
  )
}

export default Core