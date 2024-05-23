import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  AuthStackParamList,
  MainTabParamList,
} from '../navigations/navigationTypes';
import {CompositeScreenProps, useFocusEffect} from '@react-navigation/native';
import {checkFirstUse, checkUserExistfromStorage} from '../utils/helpers';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

type nav = CompositeScreenProps<
  StackScreenProps<AuthStackParamList>,
  BottomTabScreenProps<MainTabParamList>
>;

interface SplashScreenProps {
  navigation: nav['navigation'];
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const {height} = useWindowDimensions();

  const navigate = async () => {
    try {
      const firstUse = await checkFirstUse();

      if (firstUse) {
        setTimeout(() => {
          navigation.replace('Onboarding');
        }, 5000);
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 5000);
      }
    } catch (e) {
      // error reading value
    }
  };

  const checkUserExist = async () => {
    try {
      const userExist = await checkUserExistfromStorage();
      if (userExist) {
        return;
      } else {
        navigate();
      }
    } catch (e) {
      // error reading value
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checkUserExist();
    }, []),
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{
          height: height,
          left: 100,
        }}
        source={require('../../assets/splashImage.png')}
      />
      <LinearGradient
        colors={['#624EEBE6', '#15BEFFE6']}
        style={styles.linearGradient}>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../../assets/logo.png')}
        />
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    opacity: 1000,
    height: Dimensions.get('screen').height,
  },
});
