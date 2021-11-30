import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './MyPage.css';
import Footer from '../Footer';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(
    (data) => data.username === 'songfront'
  );
  console.log('더미 파라미터');

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MyPage;
