import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Text from '../components/AppText';
import News from '../components/News';
import TrendingNews from '../components/TrendingNews';
import {NewsStackParamList} from '../navigations/navigationTypes';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {getAllNews} from '../features/news/allNewsApi';

interface NewsListScreenProps {
  navigation?: NativeStackNavigationProp<NewsStackParamList>;
}
const NewsListScreen: React.FC<NewsListScreenProps> = ({navigation}) => {
  const {allNews, loading} = useAppSelector(state => state.allnewsReducer);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(5);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllNews(pageNumber, pageSize));
  }, [pageNumber]);
  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.news}>Trending News</Text>

      <TrendingNews />
      <Text style={styles.news}>All News</Text>
      <FlatList
        refreshing={false}
        onRefresh={() => {}}
        data={allNews}
        renderItem={({item}) => (
          <News
            data={item}
            onPress={() => navigation?.navigate('News', {id: item._id})}
          />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size={'large'} color={'#15BEFFE6'} />
          ) : null
        }
      />
    </View>
  );
};

export default NewsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  linearGradient: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 22,
  },
  news: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000',
    paddingLeft: 20,
    marginTop: 25,
    marginBottom: 12,
  },
  dotStyle: {
    bottom: 50,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
