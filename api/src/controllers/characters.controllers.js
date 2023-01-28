const axios = require("axios");
const { Character } = require("./../db");
let characters = [];

let aux = 0;
const callToApi = async (url) => {
  await axios
    .get(url)
    .then(async (data) => {
      characters.push(data.data.results);
      if (data.data.info.next && aux < 2) {
        aux++;
        await callToApi(data.data.info.next);
      }
    })
    .catch((err) => console.log(err));

  return characters;
};

const callToDB = async () => {
  const characters = Character.findAll();

  return characters;
};

const allCharacters = async (url) => {
  const charactersInAPI = await callToApi(url);
  const charactersInDB = await callToDB();
  return charactersInAPI.concat(charactersInDB);
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
