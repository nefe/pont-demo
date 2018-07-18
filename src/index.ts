import "./services/";

// defs 包含所有公共类型
const pet = {
  category: "",
  id: 1,
  name: "",
  photoUrls: [],
  status: "pending"
} as defs.Pet;

// API 包含所有接口
API.pet.addPet.request({}, pet);

API.pet.getPetById
  .request({
    petId: 3
  })
  .then(p => {
    console.log(p.name);
  });
