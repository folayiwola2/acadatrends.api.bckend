import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import Text from '../components/AppText';
import {registerUser} from '../features/auth/authApi';
import {useAppDispatch} from '../features/hooks';
import appcolor from '../utils/appColor';

const SignUpScreen = () => {
  const dispatch = useAppDispatch();

  const [firstname, setFirstname] = useState<string>('');
  const [othernames, setOthernames] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cPassword, setCPassword] = useState<string>('');

  const user = {
    firstname,
    othernames,
    email,
    phone,
    dob,
    school,
    state,
    address,
    password,
  };

  const registerHandler = () => {
    if (
      firstname === '' ||
      othernames === '' ||
      email === '' ||
      // phone === '' ||
      password === ''
    ) {
      return Alert.alert('Error', 'please input all fields');
    }
    if (password !== cPassword) {
      return Alert.alert('error', 'Password do not match');
    }
    dispatch(registerUser(user));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#624EEBE6', '#15BEFFE6']}
        style={styles.linearGradient}>
        <View
          style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#fff',
              fontWeight: '600',
              fontSize: 25,
            }}>
            Sign Up
          </Text>
        </View>

        <ScrollView style={styles.signUpItemContainer}>
          <AppInput
            value={firstname}
            onChangeText={text => setFirstname(text)}
            desc="First Name"
            placeHolder="Enter your First Name"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={othernames}
            onChangeText={text => setOthernames(text)}
            desc="Last Name"
            placeHolder="Enter your Last Name"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={email}
            onChangeText={text => setEmail(text)}
            desc="Email Address"
            placeHolder="Enter your email address"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={phone}
            onChangeText={text => setPhone(text)}
            desc="Phone"
            placeHolder="Enter your Phone Nunber"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={dob}
            onChangeText={text => setDob(text)}
            desc="Date of Birth"
            placeHolder="Enter date of Birth"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={school}
            onChangeText={text => setSchool(text)}
            desc="School"
            placeHolder="Enter your School"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={state}
            onChangeText={text => setState(text)}
            desc="State"
            placeHolder="Enter your State"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={address}
            onChangeText={text => setAddress(text)}
            desc="Address"
            placeHolder="Enter your Address"
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={password}
            onChangeText={text => setPassword(text)}
            desc="Password"
            passowrd
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            value={cPassword}
            onChangeText={text => setCPassword(text)}
            desc="Confirm Password"
            passowrd
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppButton
            title="Sign up"
            buttonStyle={styles.loginButton}
            onPress={registerHandler}
          />
          <View>
            <Pressable
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 25,
                marginBottom: 100,
                flex: 1,
              }}>
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
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default SignUpScreen;

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
  signUpItemContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 66,
    flex: 1,
    paddingTop: 30,
  },
  loginText: {
    fontWeight: '600',
    fontSize: 25,
    color: appcolor.primary,
    alignSelf: 'center',
    marginTop: 15,
  },
  inputContainerStyles: {
    marginVertical: 10,
  },

  loginButton: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    height: 60,
    marginTop: 20,
  },
});
