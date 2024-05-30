import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './AppText';

interface EbookNavProps {
  icon?: ReactElement;
  color: string[];
  label?: string;
}

const EbookNav: React.FC<EbookNavProps> = ({color, label, icon}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={color}
      style={styles.linearGradient}>
      <View style={styles.iconContainer}>
        {icon}
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
            fontSize: 16,
            marginLeft: 15,
          }}>
          {label}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default EbookNav;

const styles = StyleSheet.create({
  linearGradient: {
    width: 152,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
