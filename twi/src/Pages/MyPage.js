import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './MyPage.css';
import Footer from '../Footer';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(
    (data) => data.username === 'kimcoding'
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
            <p>280 팔로워 1000 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {filteredTweets.map((tweet) => {
          return (
            <li className="tweet" id={tweet.id} key={tweet.id}>
              <div className="tweet__profile">
                <img src={tweet.picture} />
              </div>
              <div className="tweet__content">
                <div className="tweet__userInfo">
                  <span className="tweet__username">{tweet.username}</span>
                  <span className="tweet__createdAt">{tweet.createdAt}</span>
                </div>
                <div className="tweet__message">{tweet.content}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
