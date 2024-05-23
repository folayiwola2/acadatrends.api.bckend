import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Splash: undefined;
  ChooseSignUp: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Onboarding: undefined;
};

export type HomeStackParamList = {
  HomeItems: undefined;
};

export type NewsStackParamList = {
  NewsList: undefined;
  News: {
    id: string;
  };
};
export type EbookStackParamList = {
  EbooksList: {
    headerTitle: string;
  };
  EbookPreview: {
    headerTitle: string;
    id?: string;
    type?: string;
  };
  ReadEbook: {
    headerTitle: string;
    id?: string;
    type?: string;
  };
};

export type MainTabParamList = {
  Home: NavigatorScreenParams<NewsStackParamList>;
  NewsTab: undefined;
  EbooksTab: undefined;
  Upload: undefined;
};
