import connection from "../../../database/DBConnect";
import Name from "../../../models/Name";

export default async function getRandomNames() {
  await connection();
  const randomNames = await Name.aggregate([{ $sample: { size: 3 } }]);
  return JSON.stringify(randomNames);
}
