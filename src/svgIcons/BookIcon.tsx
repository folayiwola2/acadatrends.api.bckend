import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface BookIconProps {
  opacity?: string | undefined;
}

const BookIcon: React.FC<BookIconProps> = ({opacity}) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        d="M4.33331 20.1333C4.33331 19.4703 4.59671 18.8344 5.06555 18.3655C5.53439 17.8967 6.17027 17.6333 6.83331 17.6333H20.3333"
        stroke={opacity}
        // stroke-opacity={opacity}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.83331 2.6333H20.3333V22.6333H6.83331C6.17027 22.6333 5.53439 22.3699 5.06555 21.9011C4.59671 21.4322 4.33331 20.7963 4.33331 20.1333V5.1333C4.33331 4.47026 4.59671 3.83437 5.06555 3.36553C5.53439 2.89669 6.17027 2.6333 6.83331 2.6333V2.6333Z"
        stroke={opacity}
        // stroke-opacity={opacity}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BookIcon;
