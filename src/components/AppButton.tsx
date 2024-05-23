import React from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../components/AppText';

interface AppButtonProps extends TouchableOpacityProps {
  title: string | React.ReactElement;
  buttonStyle?: StyleProp<ViewStyle>;
}
const AppButton: React.FC<AppButtonProps> = ({title, buttonStyle, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#624EEBE6', '#15BEFFE6']}
        style={[styles.linearGradient, buttonStyle]}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  linearGradient: {
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
