import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sort from '../svgIcons/Sort';
import Text from '../components/AppText';
import QuickLinks from '../components/QuickLinks';
import NewsIcon from '../svgIcons/NewsIcon';
import BookIcon from '../svgIcons/BookIcon';
import UploadIcon from '../svgIcons/UploadIcon';
import News from '../components/News';
import {
  MainTabParamList,
  NewsStackParamList,
} from '../navigations/navigationTypes';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {getFiveNews} from '../features/news/allNewsApi';
import {userFailure} from '../features/user/userSlice';
import {clearStorage} from '../utils/helpers';

type nav = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList>,
  StackScreenProps<NewsStackParamList>
>;
interface HomeScreenProps {
  navigation: nav['navigation'];
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const {fiveNews, loading} = useAppSelector(state => state.allnewsReducer);
  const {
    user: {firstname},
  } = useAppSelector(state => state.userReducer);
  useEffect(() => {
    dispatch(getFiveNews());
  }, []);
  const handleLogout = async () => {
    clearStorage();
    dispatch(userFailure('logout'));
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#624EEBE6', '#15BEFFE6']}
        style={styles.linearGradient}>
        <View style={styles.avatarContainer}>
          <Sort />
          <Pressable onPress={handleLogout}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/pro.png')}
            />
          </Pressable>
        </View>
        <Text style={styles.greeting}>Hello {firstname}</Text>
        <Text style={styles.welcome}>Welcome to AcadaTrends</Text>
      </LinearGradient>
      <View style={styles.rectangle}></View>
      <Text style={styles.quick}>Quick Links</Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Pressable onPress={() => navigation.jumpTo('NewsTab')}>
          <QuickLinks
            label={'News'}
            color={['#BC061E', '#E14C62']}
            icon={<NewsIcon opacity={'#fff'} />}
          />
        </Pressable>
        <Pressable onPress={() => navigation.jumpTo('EbooksTab')}>
          <QuickLinks
            label={'Books'}
            color={['#D8900F', '#F3C466']}
            icon={<BookIcon opacity={'#fff'} />}
          />
        </Pressable>
        <Pressable onPress={() => navigation.jumpTo('Upload')}>
          <QuickLinks
            label={'Upload'}
            color={['#624EEB', '#15BEFF']}
            icon={<UploadIcon opacity={'#fff'} />}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.news}>News</Text>
        <Pressable onPress={() => navigation.jumpTo('NewsTab')}>
          <Text style={styles.see}>See all</Text>
        </Pressable>
      </View>
      {loading ? (
        <ActivityIndicator size={'large'} color={'#624EEBE6'} />
      ) : (
        <FlatList
          data={fiveNews}
          renderItem={({item}) => (
            <News
              data={item}
              onPress={() => navigation.navigate('News', {id: item._id})}
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  linearGradient: {
    height: Dimensions.get('window').height / 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  rectangle: {
    backgroundColor: '#fff',
    height: 120,
    width: Dimensions.get('window').width - 80,
    position: 'absolute',
    top: 170,
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 2,
  },
  profileImage: {
    height: 32,
    width: 32,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  welcome: {
    color: '#fff',
    paddingLeft: 20,
  },
  quick: {
    marginTop: 60,
    fontWeight: '800',
    fontSize: 16,
    color: '#000',
    paddingLeft: 20,
    marginBottom: 12,
  },
  news: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000',
    paddingLeft: 20,
    marginBottom: 12,
  },
  see: {
    color: '#624EEB',
    fontWeight: '800',
    paddingRight: 40,
  },
});
