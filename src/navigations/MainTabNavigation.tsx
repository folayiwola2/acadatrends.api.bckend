import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {MainTabParamList} from './navigationTypes';
import HomeStackNavigation from './HomeStatckNavigation';
import HomeIcon from '../svgIcons/HomeIcon';
import BookIcon from '../svgIcons/BookIcon';
import NewsIcon from '../svgIcons/NewsIcon';
import UploadIcon from '../svgIcons/UploadIcon';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import NewsStackNavigation from './NewsStackNavigation';
import EbookStackNavigation from './EbookStackNavigation';

const MainTab = createBottomTabNavigator<MainTabParamList>();
const visibleTabs = (visible: string) => {
  if (visible === 'EbookPreview') {
    return 'none';
  }
  if (visible === 'News') {
    return 'none';
  }
  if (visible === 'ReadEbook') {
    return 'none';
  } else {
    return 'flex';
  }
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  let visible = getFocusedRouteNameFromRoute(
    descriptors[state.routes[state.index].key].route,
  );

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#624EEBE6', '#15BEFFE6']}
      style={[styles.tabbar, {display: visibleTabs(visible!)}]}>
      {state.routes.map(
        (
          route: {key: string; name: any},
          index: React.Key | null | undefined,
        ) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // const onLongPress = () => {
          //   navigation.emit({
          //     type: 'tabLongPress',
          //     target: route.key,
          //   });
          // };
          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              // onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              {label === 'Home' ? (
                <HomeIcon opacity={isFocused ? '#fff' : '#ffffff4D'} />
              ) : label === 'NewsTab' ? (
                <NewsIcon opacity={isFocused ? '#fff' : '#ffffff4D'} />
              ) : label === 'EbooksTab' ? (
                <BookIcon opacity={isFocused ? '#fff' : '#ffffff4D'} />
              ) : label === 'Upload' ? (
                <UploadIcon opacity={isFocused ? '#fff' : '#ffffff4D'} />
              ) : null}
            </Pressable>
          );
        },
      )}
    </LinearGradient>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={props => {
        return <CustomTabBar {...props} />;
      }}
      screenOptions={({route}) => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
        };
      }}>
      <MainTab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => <HomeIcon />,
        }}
        component={HomeStackNavigation}
      />
      <MainTab.Screen
        options={({route, navigation}) => {
          return {
            lazy: false,

            tabBarStyle: {
              backgroundColor: '#fff',
            },
          };
        }}
        name="NewsTab"
        component={NewsStackNavigation}
      />
      <MainTab.Screen name="EbooksTab" component={EbookStackNavigation} />
      <MainTab.Screen name="Upload" component={HomeStackNavigation} />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbar: {
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarItem: {
    flex: 1,
  },
});

export default MainTabNavigator;
