import { startups } from "../data/data.js";

export const getSingleData = (req, res) => {
  const { id } = req.params;
  const startup = startups.find((item) => item.id === Number(id));
  if (!startup) {
    return res.status(404).json({ message: `No startup with id:${id} Found` });
  }
  return res.json(startup);
};
