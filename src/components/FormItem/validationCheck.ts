//숫자 유효성 체크
export const verifyNumber = (value: string) => {
  return !isNaN(Number(value));
};
