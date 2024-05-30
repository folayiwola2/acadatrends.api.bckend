import {NativeStackScreenProps} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import AppButton from '../components/AppButton';
import Text from '../components/AppText';
import {EbookStackParamList} from '../navigations/navigationTypes';
import {getPdf} from '../features/pdf/pdfApi';
import {useAppDispatch, useAppSelector} from '../features/hooks';

type navigationType = NativeStackScreenProps<
  EbookStackParamList,
  'EbookPreview'
>;

interface EbookPreviewScreenProps {
  route: navigationType['route'];
  navigation: navigationType['navigation'];
}

const EbookPreviewScreen: React.FC<EbookPreviewScreenProps> = ({
  route,
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const {pdf, loading} = useAppSelector(state => state.pdfReducer);

  const {headerTitle, id, type} = route.params;

  useEffect(() => {
    dispatch(getPdf(id!, type!));
  }, [id, type]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle,
    });
  }, [headerTitle]);

  return loading ? (
    <ActivityIndicator size={'large'} color={'#624EEBE6'} />
  ) : (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/ebook.jpeg')} />
      <Text style={styles.title}>{headerTitle}</Text>
      <View>
        <Text numberOfLines={5} style={styles.desc}>
          {pdf?.content}
        </Text>
      </View>
      <AppButton
        onPress={() =>
          navigation.navigate('ReadEbook', {id, type, headerTitle})
        }
        title={'Read Now'}
        style={{width: '60%', alignSelf: 'center'}}
        buttonStyle={{
          borderRadius: 25,
          height: 50,
        }}
      />
    </View>
  );
};

export default EbookPreviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: '#000',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  author: {
    fontWeight: '800',
    fontSize: 14,
    color: '#FF9900',
    marginBottom: 12,
    alignSelf: 'center',
  },
  desc: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    lineHeight: 22,
    marginBottom: 80,
    marginTop: 10,
    fontSize: 16,
    // textAlign: 'center',
  },
});
