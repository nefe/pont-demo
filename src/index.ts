import './services/';

// defs 包含所有公共类型
const pet = new defs.Pet();

pet.status;

// API 包含所有接口
API.pet.getPetById
  .request({
    petId: 3
  })
  .then(p => {
    console.log(p.name);
  });

API.pet.addPet.request({}, pet);
