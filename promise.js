const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
try {
    // gunakan kata await untuk mendapatkan "data" hasil resolve-nya
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    let counter = 0;
    return new Promise((resolve) => {
        counter += theaterIXX.filter((jumlah) => jumlah.hasil === emosi).length;
        counter += theaterVGC.filter((jumlah) => jumlah.hasil === emosi).length;
        resolve(counter);
    });
  } catch (errorJumlah) {
    console.log(errorJumlah);
  }
};

module.exports = {
  promiseOutput,
};
