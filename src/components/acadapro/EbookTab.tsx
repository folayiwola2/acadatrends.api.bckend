import {Pressable, Text, View} from 'react-native';
import React from 'react';

interface EbookTabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const EbookTab: React.FC<EbookTabProps> = ({activeTab, setActiveTab}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      <EbookTabBotton
        text="Ebook"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <EbookTabBotton
        text="Past Q&A"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

interface EbookTabButtonProps {
  activeTab?: any;
  text: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const EbookTabBotton: React.FC<EbookTabButtonProps> = ({
  activeTab,
  setActiveTab,
  text,
}) => (
  <Pressable
    style={{
      backgroundColor: activeTab === text ? '#624EEBE6' : 'white',
      marginHorizontal: 20,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => setActiveTab(text)}>
    <Text
      style={{
        color: activeTab === text ? 'white' : '#624EEBE6',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {text}
    </Text>
  </Pressable>
);

export default EbookTab;
