import connection from "../../../database/DBConnect";
import RandomName from "../../../models/RandomName";
import Name from "../../../models/Name";
import NextCors from "nextjs-cors";

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.redirect(307, "/");
  }
  await await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
  });

  // const { token } = req.body;
  // if (!token) return res.redirect(307, "/");
  // const SECRET = process.env.RANDOM_NAMES_SECRET;

  // if (token !== SECRET) return res.redirect(307, "/");

  await connection();
  try {
    await RandomName.deleteMany({});

    const names = await Name.aggregate([{ $sample: { size: 3 } }]);
    await RandomName.insertMany(names);

    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

export default handler;
