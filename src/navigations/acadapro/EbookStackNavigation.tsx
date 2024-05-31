import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EbookStackParamList} from './navigationTypes';
import Text from '../components/AppText';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View} from 'react-native';
import EbooksListScreen from '../screens/EbooksListScreen';
import EbookPreviewScreen from '../screens/EbookPreviewScreen';
import ReadEbookScreen from '../screens/ReadEbookScreen';

const EbookStack = createNativeStackNavigator<EbookStackParamList>();

const EbookStackNavigation = () => {
  return (
    <EbookStack.Navigator
      screenOptions={
        ({route, navigation}) => ({
          header: ({}) => {
            return (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#624EEBE6', '#15BEFFE6']}
                style={styles.linearGradient}>
                {route.name === 'EbookPreview' || 'ReadEbook' ? (
                  <Icon
                    onPress={() => navigation.goBack()}
                    name="arrow-left-bold"
                    color={'#fff'}
                    size={25}
                    style={{
                      position: 'absolute',
                      left: 15,
                    }}
                  />
                ) : null}
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.header}>
                  {route.params?.headerTitle}
                </Text>
              </LinearGradient>
            );
          },
        })
        // headerShown: false,
      }>
      <EbookStack.Screen
        initialParams={{headerTitle: 'eBooks - Past Q&A'}}
        name="EbooksList"
        component={EbooksListScreen}
      />
      <EbookStack.Screen
        options={() => ({
          headerLeft: () => (
            <View
              style={{
                backgroundColor: 'red',
                width: 190,
                height: 190,
              }}>
              <Text>Hello</Text>
            </View>
          ),
        })}
        name="EbookPreview"
        component={EbookPreviewScreen}
      />
      <EbookStack.Screen name="ReadEbook" component={ReadEbookScren} />
    </EbookStack.Navigator>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 22,
    alignSelf: 'center',
    width: '65%',
  },
});

export default EbookStackNavigation;
