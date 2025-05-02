const models = require("../database/models");

// Crear videojuego
const createVideogame = async (req, res) => {
  try {
    const videogame = await models.Videogame.create(req.body);
    return res.status(201).json({ videogame });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllVideogame = async (req, res) => {
  try {
    const videogames = await models.Videogame.findAll();
    return res.status(200).json({ videogames });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateVideogame = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genre, platform, releaseYear, developer, coverImage, description } = req.body;

    const videogame = await models.Videogame.findByPk(id);
    if (!videogame) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }

    const updatedVideogame = await videogame.update({
      title,
      genre,
      platform,
      releaseYear,
      developer,
      coverImage,
      description
    });

    return res.status(200).json({ updatedVideogame });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteVideogame = async (req, res) => {
  try {
    const { id } = req.params;

    const videogame = await models.Videogame.findByPk(id);
    if (!videogame) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }

    await videogame.destroy();
    return res.status(200).json({ message: 'Videojuego eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createVideogame,
  getAllVideogame,
  updateVideogame,
  deleteVideogame
};