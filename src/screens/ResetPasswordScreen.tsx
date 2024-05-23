import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';

import Text from '../components/AppText';
import appcolor from '../utils/appColor';
const ResetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#624EEBE6', '#15BEFFE6']}
        style={styles.linearGradient}>
        <View
          style={{
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>

        <View style={styles.signUpItemContainer}>
          <Text style={styles.forgotpass}>Reset password</Text>
          <Text
            style={{
              alignSelf: 'center',
            }}>
            Enter a new password which is
          </Text>
          <Text
            style={{
              alignSelf: 'center',
            }}>
            different from the ones you have used.
          </Text>
          <AppInput
            desc="New Password"
            passowrd
            inputContainerStyles={styles.inputContainerStyles}
          />
          <AppInput
            desc="Confirm Password"
            passowrd
            inputContainerStyles={styles.inputContainerStyles}
          />

          <AppButton title="Reset" buttonStyle={styles.loginButton} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default ResetPasswordScreen;

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
    marginTop: 30,
  },

  loginButton: {
    position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    height: 60,
    marginTop: 150,
  },
  forgotpass: {
    fontWeight: '600',
    fontSize: 25,
    color: appcolor.primary,
    alignSelf: 'center',
    marginVertical: 30,
  },
});
