import * as React from 'react';
import { Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, Feather, SimpleLineIcons  } from '@expo/vector-icons';

import { HomeScreen } from '../screens';
import { MapScreen } from '../screens';
import { BookmarkScreen } from '../screens';
import { ProfileScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { display: 'none' },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <SimpleLineIcons name="menu" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-map-outline" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-bookmarks-outline" size={24} color="black" />,
        }}
      /> 
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};
