const {
  allCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require("./../controllers/characters.controllers");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res
      .status(200)
      .send(await allCharacters("https://rickandmortyapi.com/api/character"));
  } catch (error) {
    res.status(404).send({ status: "Error", msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCharacter = await createCharacter(req.body);

    res.status(201).json(newCharacter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(201).send(await updateCharacter(id, req.body));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await deleteCharacter(id);

    res.status(202).send({ msg: "Deleted Succesfully" });
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
});

module.exports = router;
