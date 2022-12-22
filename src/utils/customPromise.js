export const customPromise = (products) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
};
