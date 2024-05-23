import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Swiper from 'react-native-swiper';
import Onboarding from '../components/Onboarding';
import BookLogo from '../svgIcons/BookLogo';
import KnowledgeLogo from '../svgIcons/KnowledgeLogo';
import NewsLogo from '../svgIcons/NewsLogo';
import appcolor from '../utils/appColor';
import ForwardArrow from '../svgIcons/ForwardArrow';
import Text from '../components/AppText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigations/navigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingScreenProps {
  navigation: NativeStackNavigationProp<AuthStackParamList>;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({navigation}) => {
  const firstUse = async () => {
    await AsyncStorage.setItem('firstUse', 'true');
  };

  return (
    <>
      <Swiper
        dotStyle={styles.dotStyle}
        activeDot={
          <View
            style={{
              backgroundColor: '#6358ED',
              width: 10,
              height: 10,
              borderRadius: 5,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
              bottom: 50,
            }}
          />
        }>
        <View style={styles.slide}>
          <Onboarding
            Logo={<NewsLogo />}
            header="Daily News Update"
            desc={`Get as e dey hot news about your ${'\n'} school and other schools`}
          />
        </View>
        <View style={styles.slide}>
          <Onboarding
            Logo={<KnowledgeLogo />}
            header="Past Questions"
            desc={`Ask questions related to your ${'\n'} school and get replies`}
          />
        </View>
        <View style={styles.slide}>
          <Onboarding
            Logo={<BookLogo />}
            header="iReader"
            desc="Read Books on the Go"
          />
        </View>
      </Swiper>
      <View style={styles.actionContainer}>
        <Pressable
          onPress={() => {
            firstUse();
            navigation.replace('Login');
          }}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
        <View
          style={{
            height: 46,
            width: 46,
            borderRadius: 23,
            backgroundColor: appcolor.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ForwardArrow
            onPress={() => {
              firstUse();
              navigation.replace('Login');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  // wrapper: {backgroundColor: AppColor.WHITE},
  dotStyle: {
    bottom: 50,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 50,
    paddingHorizontal: 30,
  },
  skip: {
    color: appcolor.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});
