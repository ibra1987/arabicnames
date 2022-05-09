import connection from "../../../database/DBConnect";
import Name from "../../../models/Name";

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.redirect(307, "/");
  }
  await connection();
  const names = await Name.aggregate([{ $sample: { size: 3 } }]);

  return res.status(200).json(names);
}

export default handler;
