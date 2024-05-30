import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../components/AppText';
import {NewsStackParamList} from '../navigations/navigationTypes';
import {getNewsById} from '../features/news/allNewsApi';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {clearNews} from '../features/news/allNewsSlice';

type navigationType = StackScreenProps<NewsStackParamList, 'News'>;

interface NewsScreenProps {
  navigation: navigationType['navigation'];
  route: navigationType['route'];
}

const NewsScreen: React.FC<NewsScreenProps> = ({route}) => {
  const {news, loading} = useAppSelector(state => state.allnewsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewsById(route.params.id));
    return () => {
      dispatch(clearNews());
    };
  }, []);

  return loading ? (
    <ActivityIndicator size={'large'} color={'#624EEBE6'} />
  ) : (
    <View style={{flex: 1}}>
      <Text style={styles.news}>{news?.title}</Text>
      <View style={{marginHorizontal: 20}}>
        <ImageBackground
          resizeMode="cover"
          source={{uri: news?.news_dp}}
          style={styles.image}
          imageStyle={{borderRadius: 8}}>
          <LinearGradient
            colors={['#ffffff', '#000000FF']}
            style={{
              opacity: 0.5,
              width: '100%',
              height: 150,
              borderRadius: 8,
              position: 'absolute',
            }}></LinearGradient>
        </ImageBackground>
      </View>
      <ScrollView style={{marginTop: 30}}>
        <Text
          style={{
            alignSelf: 'center',
            paddingHorizontal: 20,
            lineHeight: 28,
            marginBottom: 80,
            marginTop: 10,
          }}>
          {news?.content}
        </Text>
      </ScrollView>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  news: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000',
    paddingLeft: 20,
    marginTop: 25,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
});
