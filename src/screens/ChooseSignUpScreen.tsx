import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../components/AppButton';

import Text from '../components/AppText';
import SocialLogin from '../components/SocialLogin';
import {AuthStackParamList} from '../navigations/navigationTypes';
import appcolor from '../utils/appColor';

interface ChooseSignUpScreenProps {
  navigation: NativeStackNavigationProp<AuthStackParamList>;
}

const ChooseSignUpScreen: React.FC<ChooseSignUpScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#624EEBE6', '#15BEFFE6']}
        style={styles.linearGradient}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../../assets/logo.png')}
          />
        </View>

        <View style={styles.loginItemContainer}>
          <Text style={styles.signupText}>Sign Up</Text>

          <AppButton
            onPress={() => navigation.navigate('SignUp')}
            title="Continue with Sign up"
            buttonStyle={styles.loginButton}
          />
          <SocialLogin title="Sign up with Google" />
          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}}>
            <Text>Already have account ? </Text>
            <Text
              style={{
                color: appcolor.primary,
                fontWeight: '500',
              }}>
              Login
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ChooseSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    opacity: 1000,
    height: Dimensions.get('screen').height,
  },
  loginItemContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 66,
    flex: 1,
    bottom: 0,
  },
  signupText: {
    fontWeight: '600',
    fontSize: 25,
    color: appcolor.primary,
    alignSelf: 'center',
    marginVertical: 30,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 30,
  },
  forgotPass: {
    color: appcolor.primary,
    fontWeight: '500',
    marginRight: 30,
  },
  loginButton: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    height: 60,
  },
});
