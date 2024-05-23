import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import Text from './AppText';

const TrendingNews = () => {
  const {width} = useWindowDimensions();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  return (
    <View>
      <Carousel
        data={[1, 2, 3]}
        renderItem={() => (
          <View
            style={{
              width: 270,
              height: 150,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ImageBackground
              resizeMode="cover"
              source={require('../../assets/tnews.jpeg')}
              style={styles.image}
              imageStyle={{borderRadius: 8}}>
              <LinearGradient
                colors={['#ffffff', '#000000FF']}
                style={{
                  opacity: 0.5,
                  width: 270,
                  height: 150,
                  borderRadius: 8,
                }}></LinearGradient>
            </ImageBackground>
            <Text
              style={{
                color: '#fff',
                fontWeight: '800',
                fontSize: 16,
                position: 'absolute',
                bottom: 3,
              }}>
              NYSC Batch ‘A’ Online Registration Guide 2019
            </Text>
          </View>
        )}
        sliderWidth={width}
        itemWidth={275}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        contentContainerCustomStyle={{
          right: 25,
        }}
      />

      <View style={styles.dotView}>
        {[1, 2, 3].map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: '#624EEB',
                margin: 8,
                borderRadius: 5,
                marginTop: 20,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default TrendingNews;

const styles = StyleSheet.create({
  image: {
    width: 270,
    height: 150,
    borderRadius: 8,
  },
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});
