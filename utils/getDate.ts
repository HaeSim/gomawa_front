export const getYmd10 = (millisecond: string) => {
  const date = new Date(millisecond);
  //yyyy. mm. dd 포맷 날짜 생성
  return (
    date.getFullYear() +
    '. ' +
    (date.getMonth() + 1 > 9
      ? (date.getMonth() + 1).toString()
      : '0' + (date.getMonth() + 1)) +
    '. ' +
    (date.getDate() > 9
      ? date.getDate().toString()
      : '0' + date.getDate().toString())
  );
};
export const getFullYmdStr = (millisecond: string) => {
  const date = new Date(millisecond);
  //년월일시분초 문자열 생성
  return (
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일 '
    // + date.getHours()
    // + '시 '
    // + date.getMinutes()
    // + '분 '
    // + date.getSeconds()
    // + '초 '
    // + '일월화수목금토'.charAt(date.getUTCDay())
    // + '요일'
  );
};
