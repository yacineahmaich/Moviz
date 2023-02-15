export const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request take loong time! Please try again.");
    }, s * 1000);
  });
};
