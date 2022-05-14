// change to object
function changeToObject(array) {
  let result = {};
  result.jenis = array[0];
  result.harga = array[1];
  result.enak = array[2];

  return result;
}

console.log(changeToObject(["ayam", "10000", true]));

// method
let car = {
  name: "Xenia",
  year: 2017,
  run: function () {
    console.log("run");
  },
};

console.log(car);

let asrulProfile = {
  name: "Asrul",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
  sebutkanHobby: function () {
    for (let i = 0; i < this.hobbies.length; i++) {
      console.log("Hobby saya adalah " + this.hobbies[i]);
    }
  },
};

asrulProfile.sebutkanHobby();

console.log(asrulProfile.sebutkanHobby);
