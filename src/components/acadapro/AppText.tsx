import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface AppTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<AppTextProps> = ({style, children, ...rest}) => {
  return (
    <Text style={[{fontFamily: 'Poppins-Regular'}, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
