import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './AppText';

interface QuickLinksProps {
  icon: ReactElement;
  color: string[];
  label: string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({icon, color, label}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={color}
      style={styles.linearGradient}>
      <View style={styles.iconContainer}>
        {icon}
        <Text style={{color: '#fff'}}>{label}</Text>
      </View>
    </LinearGradient>
  );
};

export default QuickLinks;

const styles = StyleSheet.create({
  linearGradient: {
    width: 94,
    height: 94,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconContainer: {
    alignItems: 'center',
  },
});
