import React, {useCallback, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Text from './AppText';

interface AppInputProps extends TextInputProps {
  desc?: string;
  placeHolder?: string;
  inputStyle?: StyleProp<TextStyle>;
  passowrd?: boolean;
  inputContainerStyles?: StyleProp<ViewStyle>;
}

const AppInput: React.FC<AppInputProps> = ({
  desc,
  placeHolder,
  inputStyle,
  passowrd,
  inputContainerStyles,
  ...rest
}) => {
  const [passwordPlaceHolder, SetpasswordPlaceHolder] = useState<boolean>(true);
  const passPlace = [0, 1, 2, 3, 4, 5, 6];

  const clearPlaceHolder = useCallback(() => {
    SetpasswordPlaceHolder(false);
  }, [passwordPlaceHolder]);
  return (
    <View style={[styles.inputContainer, inputContainerStyles]}>
      <Text
        style={{
          color: '#767676',
          fontWeight: '500',
          paddingLeft: 15,
          paddingTop: 6,
        }}>
        {desc}
      </Text>
      <View>
        <TextInput
          placeholderTextColor="#00000040"
          placeholder={placeHolder}
          style={[styles.input, inputStyle]}
          onFocus={clearPlaceHolder}
          {...rest}
        />
        {passowrd && passwordPlaceHolder && (
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              paddingLeft: 15,
              justifyContent: 'space-between',
              paddingTop: 5,
            }}>
            {passPlace.map((_, index) => (
              <View
                key={index + 1}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#DBDBDB',
                  marginLeft: 5,
                }}></View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#C9C5FA',
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    height: 60,
  },
  input: {
    paddingLeft: 15,
    paddingVertical: 0,
  },
});
