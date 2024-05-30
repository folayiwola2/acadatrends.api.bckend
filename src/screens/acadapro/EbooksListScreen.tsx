import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import Ebook from '../components/Ebook';
import EbookTab from '../components/EbookTab';
import {EbookStackParamList} from '../navigations/navigationTypes';
import {getAllPdfs} from '../features/pdf/pdfApi';
import {useAppDispatch, useAppSelector} from '../features/hooks';

interface EbooksListScreenProps {
  navigation: NativeStackNavigationProp<EbookStackParamList>;
}

const EbooksListScreen: React.FC<EbooksListScreenProps> = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Ebook');
  const dispatch = useAppDispatch();
  const {pdfs, loading} = useAppSelector(state => state.pdfReducer);

  useEffect(() => {
    dispatch(getAllPdfs());
  }, []);

  return (
    <View
      style={{
        paddingBottom: 70,
      }}>
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
        }}>
        <EbookTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
      {loading ? (
        <ActivityIndicator size={'large'} color={'#624EEBE6'} />
      ) : (
        <FlatList
          refreshing={loading}
          onRefresh={() => dispatch(getAllPdfs())}
          data={pdfs}
          renderItem={({item}) => (
            <Ebook
              title={item.title}
              type={item.type}
              id={item._id}
              nav={navigation}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: 'lightgrey',
                height: 1,
                marginHorizontal: 20,
              }}></View>
          )}
        />
      )}
    </View>
  );
};

export default EbooksListScreen;
