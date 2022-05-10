import connection from "../../../database/DBConnect";
import RandomName from "../../../models/RandomName";
import Name from "../../../models/Name";
import defineCors from "../../../utils/http/defineCors";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.redirect(307, "/");
  }
  await defineCors();
  const { token } = req.body;
  if (!token) return res.redirect(307, "/");
  const SECRET = process.env.RANDOM_NAMES_SECRET;

  if (token !== SECRET) return res.redirect(307, "/");

  await connection();
  try {
    await RandomName.deleteMany({});

    const names = await Name.aggregate([{ $sample: { size: 3 } }]);

    const inserted = await RandomName.insertMany(names);

    res.json(inserted);
  } catch (error) {
    console.log(error.message);
  }
}

export default handler;
