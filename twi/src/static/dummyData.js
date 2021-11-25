// 테스트용 더미 데이터로 수정하지 않습니다.

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const getParsedDate = (createdAt) => {
  return new Date(createdAt).toLocaleDateString('ko-KR');
};

const dummyTweets = [
  {
    id: 1,
    username: 'kimcoding',
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
    createdAt: getParsedDate('2019-02-24T16:17:47.000Z'),
    updatedAt: getParsedDate('2019-02-24T16:17:47.000Z'),
  },
];

export { dummyTweets };
