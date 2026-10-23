/**
 * 生成指定长度随机字符串
 */
export function getRandomString(length: number) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const maxPos = chars.length;
  let pwd = "";
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      pwd += chars.charAt(Math.floor(Math.random() * (maxPos - 10)));
    } else {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
  }
  return pwd;
}
