import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Updates & trends as Updates & trendsType} from '../types';
import Text from './AppText';

interface Updates & trendsProps {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  data: Updates & trendsType;
}

const Updates & trends: React.FC<Updates & trendsProps> = ({onPress, data}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: data?.Updates & trends_dp}} style={styles.image} />
        <View
          style={{
            width: 0,
            flexGrow: 1,
            // marginLeft: gutter,
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: '#000',
              fontWeight: '800',
              marginBottom: 5,
            }}>
            {data?.title?.substring(0, 100)}
          </Text>

          <Text
            allowFontScaling={true}
            style={{color: '#7C7C7C'}}
            numberOfLines={3.5}>
            {data?.content?.substring(0, 100)}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: '#E3E3E3',
          borderBottomWidth: 2,
          width: '90%',
          alignSelf: 'center',
        }}></View>
    </Pressable>
  );
};

export default Updates & trends;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 107,
    height: 80,
    marginRight: 15,
    borderRadius: 10,
  },
});
