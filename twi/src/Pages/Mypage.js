import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './MyPage.css';
import Footer from '../Footer';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(
    (data) => data.username === 'songfront'
  );
  console.log('더미 파라미터');
};

export default MyPage;
