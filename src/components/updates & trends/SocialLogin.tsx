import React from 'react';
import {Pressable, View} from 'react-native';
import Text from '../components/AppText';
import GoogleIcon from '../svgIcons/GoogleIcon';
import appcolor from '../utils/appColor';

interface SocialLoginProps {
  title: string;
}
const SocialLogin: React.FC<SocialLoginProps> = ({title}) => {
  return (
    <Pressable
      style={{
        height: 60,
        borderWidth: 1,
        borderColor: '#C9C5FA',
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{right: 20}}>
          <GoogleIcon />
        </View>

        <Text
          style={{color: appcolor.primary, fontSize: 16, fontWeight: '500'}}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default SocialLogin;
