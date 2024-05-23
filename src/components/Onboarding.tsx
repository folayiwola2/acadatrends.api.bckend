import React from 'react';
import {StyleSheet, View} from 'react-native';
import appcolor from '../utils/appColor';
import Text from './AppText';

interface OnboardingProps {
  Logo: React.ReactElement;
  header: string;
  desc: string;
}
const Onboarding: React.FC<OnboardingProps> = ({header, desc, Logo}) => {
  return (
    <View>
      {Logo}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{header}</Text>
        <Text style={styles.text}>{desc}</Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 30,
    fontSize: 16,
    textAlign: 'center',
    color: '#363636',
    bottom: 80,
    fontWeight: '400',
  },
  image: {
    alignSelf: 'center',
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    color: appcolor.primary,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 50,
    bottom: 40,
  },
  textContainer: {
    top: 40,
  },
});
