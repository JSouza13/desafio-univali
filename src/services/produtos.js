const ListProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        data.push(JSON.parse(localStorage.getItem(key)));
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const newProduct = (hash, product) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await localStorage.setItem(hash, JSON.stringify(product));
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteProductById = id => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await window.localStorage.removeItem(id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const putProduct = (hash, product) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await localStorage.setItem(hash, JSON.stringify(product));
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const productService = {
  ListProduct,
  newProduct,
  deleteProductById,
  putProduct
};
export default productService;
