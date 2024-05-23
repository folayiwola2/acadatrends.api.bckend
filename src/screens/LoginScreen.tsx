import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';

import Text from '../components/AppText';
import SocialLogin from '../components/SocialLogin';
import {AuthStackParamList} from '../navigations/navigationTypes';
import appcolor from '../utils/appColor';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {loginUser} from '../features/auth/authApi';

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<AuthStackParamList>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useAppSelector(state => state.authReducer);

  const handleLogin = () => {
    if (email === '' || password === '') {
      return Alert.alert('Error', 'Please enter email and password');
    }
    dispatch(loginUser({email, password}));
  };

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />
      <LinearGradient
        colors={['#624EEBE6', '#15BEFFE6']}
        style={styles.linearGradient}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../../assets/logoO.png')}
          />
        </View>

        <View style={styles.loginItemContainer}>
          <Text style={styles.loginText}>Login</Text>

          <AppInput
            desc="Email"
            placeHolder="Enter your email address"
            inputContainerStyles={styles.inputContainerStyles}
            value={email}
            onChangeText={email => setEmail(email)}
            keyboardType="email-address"
          />
          <AppInput
            desc="Password"
            passowrd
            inputContainerStyles={styles.inputContainerStyles}
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
          />
          <Pressable
            style={styles.forgotButton}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPass}>Forgot Password ?</Text>
          </Pressable>
          <AppButton
            disabled={loading}
            title={
              loading ? (
                <ActivityIndicator size={'large'} color={'#fff'} />
              ) : (
                'Login'
              )
            }
            buttonStyle={styles.loginButton}
            onPress={handleLogin}
          />
          <SocialLogin title="Login with Google" />
          <Pressable
            onPress={() => navigation.navigate('ChooseSignUp')}
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}}>
            <Text>Don't have account ? </Text>
            <Text
              style={{
                color: appcolor.primary,
                fontWeight: '500',
              }}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;

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
    flex: 5,
    bottom: 0,
  },
  loginText: {
    fontWeight: '600',
    fontSize: 25,
    color: appcolor.primary,
    alignSelf: 'center',
    marginTop: 15,
  },
  inputContainerStyles: {
    marginVertical: 15,
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
