import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HomeIconProps {
  opacity?: string | undefined;
}

const HomeIcon: React.FC<HomeIconProps> = ({opacity}) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M3 9.6333L12 2.6333L21 9.6333V20.6333C21 21.1637 20.7893 21.6724 20.4142 22.0475C20.0391 22.4226 19.5304 22.6333 19 22.6333H5C4.46957 22.6333 3.96086 22.4226 3.58579 22.0475C3.21071 21.6724 3 21.1637 3 20.6333V9.6333Z"
        stroke={opacity}
        // strokeOpacity={opacity}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 22.6333V12.6333H15V22.6333"
        stroke={opacity}
        // strokeOpacity={opacity}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
