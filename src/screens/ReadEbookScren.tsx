import {ActivityIndicator, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EbookStackParamList} from '../navigations/navigationTypes';
import {useFocusEffect} from '@react-navigation/native';
import {useAppSelector} from '../features/hooks';

type navigationType = NativeStackScreenProps<EbookStackParamList, 'ReadEbook'>;

interface ReadEbookScrenProps {
  route: navigationType['route'];
  navigation: navigationType['navigation'];
}

const ReadEbookScren: React.FC<ReadEbookScrenProps> = ({route, navigation}) => {
  const {headerTitle} = route.params;
  const {pdf, loading} = useAppSelector(state => state.pdfReducer);
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerTitle,
      });
    }, []),
  );

  return loading ? (
    <ActivityIndicator size={'large'} color={'#624EEBE6'} />
  ) : (
    <ScrollView>
      <Text style={styles.desc}>{pdf?.content}</Text>
    </ScrollView>
  );
};

export default ReadEbookScren;

const styles = StyleSheet.create({
  desc: {
    alignSelf: 'center',
    paddingHorizontal: 20,

    marginBottom: 80,
    marginTop: 10,
    fontSize: 18,
    color: '#000',
    // textAlign: 'center',
  },
});
