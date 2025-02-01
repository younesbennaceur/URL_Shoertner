import { generateHash } from "../utils/hash.js";
import { Link } from "../models/link.js";

export const generatLink = async (req, res) => {
  try {
    const link = req.body.link;
    const newLink = generateHash(link);
    const savedLink = await Link.create({
      originallink: link,
      newlink: newLink,
    });
    res.status(201).send(savedLink);
  } catch (error) {
    res.status(500).send({
      error: error,
    });
  }
};
