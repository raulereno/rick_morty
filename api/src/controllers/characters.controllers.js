const axios = require("axios");
const { Character, Location } = require("./../db");

// let characters = [];
// let aux = 0;
// const addToDb = async (characters) => {
//   await characters.forEach(async (character) => {
//     try {
//       const newCharacter = await Character.create({
//         ...character,
//         createInDB: false,
//         id: undefined,
//         status: character.status.toLowerCase(),
//         gender: character.gender.toLowerCase(),
//       });

//       const location = await axios
//         .get(character.origin.url)
//         .then((data) => data.data)
//         .catch((err) => console.log(err));

//       if (location) {
//         const newLocation = await Location.create({
//           ...location,
//           id: undefined,
//         });
//         newLocation.addCharacter(newCharacter);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// };

// const callToApi = async (url) => {
//   await axios
//     .get(url)
//     .then(async (data) => {
//       characters.push(data.data.results);
//       if (data.data.info.next && aux < 2) {
//         aux++;
//         await callToApi(data.data.info.next);
//       }
//     })
//     .catch((err) => console.log(err));

//   return characters;
// };

const callToDB = async () => {
  const characters = Character.findAll();

  return characters;
};

const allCharacters = async (url) => {
  // const charactersInAPI = await callToApi(url);
  // await addToDb(charactersInAPI.flat());

  // return [];
  const charactersInDB = await callToDB();
  return charactersInDB;
};

const createCharacter = async (character) => {
  try {
    const newCharacter = await Character.create(character);

    return newCharacter;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateCharacter = async (id, updates) => {
  try {
    const character = await Character.findByPk(id);
    for (const key in updates) {
      character[key] = updates[key];
    }
    return await character.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteCharacter = async (id) => {
  const character = await Character.findByPk(id);
  if (!character) {
    throw new Error("The character with that id do not exist ");
  }
  character.destroy();
};

module.exports = {
  allCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
