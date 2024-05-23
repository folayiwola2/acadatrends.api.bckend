type Like = {
  _id: string;
  userId: string;
  newsId: string;
  createdAt: string;
  updatedAt: string;
};
type Comment = {
  replied_comment: any[];
  _id: string;
  comment: string;
  userId: string;
  posted_by: string;
  newsId: string;
  createdAt: string;
  updatedAt: string;
};
export interface News {
  _id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  likes: Like[];
  comments: Comment[];
  views: any[];
  news_dp: string;
}
