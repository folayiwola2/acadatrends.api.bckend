import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface NewsIconProps {
  opacity?: string | undefined;
}

const NewsIcon: React.FC<NewsIconProps> = ({opacity}) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        d="M19.6667 5.6333V19.6333H5.66666V5.6333H19.6667ZM19.6667 3.6333H5.66666C4.56666 3.6333 3.66666 4.5333 3.66666 5.6333V19.6333C3.66666 20.7333 4.56666 21.6333 5.66666 21.6333H19.6667C20.7667 21.6333 21.6667 20.7333 21.6667 19.6333V5.6333C21.6667 4.5333 20.7667 3.6333 19.6667 3.6333Z"
        fill={opacity}
      />
      <Path
        d="M14.6667 17.6333H7.66666V15.6333H14.6667V17.6333ZM17.6667 13.6333H7.66666V11.6333H17.6667V13.6333ZM17.6667 9.6333H7.66666V7.6333H17.6667V9.6333Z"
        fill={opacity}
      />
    </Svg>
  );
};

export default NewsIcon;
