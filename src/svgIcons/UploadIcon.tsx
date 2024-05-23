import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface UploadIconProps {
  opacity?: string | undefined;
}

const UploadIcon: React.FC<UploadIconProps> = ({opacity}) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M3.99997 16.6333L3.99997 17.6333C3.99997 19.2902 5.34312 20.6333 6.99997 20.6333L17 20.6333C18.6568 20.6333 20 19.2902 20 17.6333L20 16.6333M16 8.6333L12 4.6333M12 4.6333L7.99997 8.6333M12 4.6333L12 16.6333"
        stroke={opacity}
        // stroke-opacity={opacity}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default UploadIcon;
