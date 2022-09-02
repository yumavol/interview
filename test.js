
function getDataUser(userId = 0) {
  return new Promise((resolve, reject) => {
    if (userId > 0) {

      const user = {
        name: "John doe",
        age: 22,
        gender: "male",
        hobby: ["footbal", "message", 52, 32, 12, 42]
      };

      resolve(user);
    } else {
      reject(new Error("Error: User id must be defined"));
    }
  })
}

function Main() {

  // 1. coba eksekusi fungsi getDataUser() secara asyncronous lalu tampilkan hasil return pada console
  // 2. simpan hasil return dari fungsi `getDataUser()` kedalam variable `data`
  // 3. ganti value dari properti `gender` pada variable `data` bebas asal tidak sama dengan sebelumnya lalu tampilkan pada console
  // 4. eksekusi fungsi getDataUser() dan tampilkan pesan error `Error: User id must be defined` pada console

}

Main();
