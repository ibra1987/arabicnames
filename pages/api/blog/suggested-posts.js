import getAll from "../../../utils/contentful/getAll";
import getRandom from "../../../utils/helpers/getRandom";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.redirect(307, "/blog");
  }

  try {
    const response = await getAll("blog");
    const items = getRandom(response.items, 2);
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(404).json([]);
  }
}
