import React from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface ForwardArrowProps {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const ForwardArrow: React.FC<ForwardArrowProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Svg width="16" height="8" viewBox="0 0 16 8" fill="none">
        <Path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3V3Z" fill="white" />
      </Svg>
    </Pressable>
  );
};

export default ForwardArrow;
