import {Image, ImageSourcePropType, Pressable, View} from 'react-native';
import React from 'react';
import Text from './AppText';
import AppButton from './AppButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {EbookStackParamList} from '../navigations/navigationTypes';

interface EbookProps {
  title: string;
  type: string;
  id: string;
  nav: NativeStackNavigationProp<
    EbookStackParamList,
    keyof EbookStackParamList
  >;
}

const Ebook: React.FC<EbookProps> = ({title, type, id, nav}) => {
  let imageSource: ImageSourcePropType =
    type === 'pdf'
      ? require('../../assets/pdf.png')
      : require('../../assets/docx.png');
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 15,
        height: 95,
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 65,
          height: 65,
          borderRadius: 8,
        }}
        source={imageSource}
      />
      <View
        style={{
          paddingLeft: 20,
          width: '80%',
          justifyContent: 'space-between',
          height: 60,
        }}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            fontSize: 15,
            fontWeight: '700',
          }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AppButton
            onPress={() =>
              nav.navigate('EbookPreview', {id, headerTitle: title, type})
            }
            style={{width: 70}}
            buttonStyle={{
              width: '100%',
              borderRadius: 20,
              height: 25,
            }}
            title={'Read'}
          />
          <Pressable onPress={() => console.log('delete with id' + id)}>
            <Text
              style={{
                color: '#624EEBE6',
                fontSize: 14,
                fontFamily: 'Gill Sans',
                textAlign: 'center',
                borderRadius: 20,
                borderColor: '#624EEBE6',
                borderWidth: 2,
                paddingHorizontal: 14,
                marginLeft: 15,
              }}>
              Delete
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Ebook;
