import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';
import {MainTabParamList, NewsStackParamList} from './navigationTypes';
import NewsListScreen from '../screens/NewsListScreen';
import NewsScreen from '../screens/NewsScreen';
import Text from '../components/AppText';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

const NewsStack = createNativeStackNavigator<NewsStackParamList>();
type nav = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList>,
  StackScreenProps<NewsStackParamList>
>;
interface Props {
  navigation: nav['navigation'];
}

const NewsStackNavigation: React.FC<Props> = ({navigation}) => {
  return (
    <NewsStack.Navigator
      screenOptions={() => {
        return {
          // headerShown: false,
          header: ({route}) => {
            return (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#624EEBE6', '#15BEFFE6']}
                style={styles.linearGradient}>
                {route.name === 'News' && (
                  <Icon
                    onPress={() =>
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [{name: 'NewsList'}],
                        }),
                      )
                    }
                    name="arrow-left-bold"
                    color={'#fff'}
                    size={25}
                    style={{
                      position: 'absolute',
                      left: 15,
                    }}
                  />
                )}
                <Text style={styles.header}>{'News'}</Text>
              </LinearGradient>
            );
          },
        };
      }}>
      <NewsStack.Screen name="NewsList" component={NewsListScreen} />
      <NewsStack.Screen name="News" component={NewsScreen} />
    </NewsStack.Navigator>
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
  },
});

export default NewsStackNavigation;
