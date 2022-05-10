import RandomName from "../../../models/RandomName";
import connection from "../../../database/DBConnect";

const handler = async (req, res) => {
  const frontendKey = process.env.FRONTEND_KEY;

  const { token } = req.body;

  if (req.method !== "POST" || !token || token !== frontendKey) {
    return res.redirect(307, "/");
  }

  await connection();
  const randomNames = await RandomName.find();

  if (!randomNames) {
    return res.status(404).json({ error: "not found" });
  }
  return res.status(200).json(randomNames);
};

export default handler;
