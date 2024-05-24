import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Updatesntrends as UpdatesntrendsType} from '../types';
import Text from './AppText';

interface UpdatesntrendsProps {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  data: UpdatesntrendsType;
}

const Updatesntrends: React.FC<UpdatesntrendsProps> = ({onPress, data}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: data?.Updatesntrends_dp}} style={styles.image} />
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

export default Updatesntrends;

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
