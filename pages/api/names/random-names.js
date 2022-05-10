import RandomName from "../../../models/RandomName";
import connection from "../../../database/DBConnect";

const handler = async (req, res) => {
  const defaultNames = [
    {
      _id: "61cf89527315e1586e0c037b",
      Name: "Assia",
      Meaning: "confort person or sad meditating",
    },
    {
      _id: "61ce357390bd324aca2226e1",
      Name: "Arij",
      Meaning: "Good fragrant scent.",
    },

    {
      __id: "61cf8b547315e1586e0c0387",
      Name: "Bacha'ir",
      Meaning: "means the beginnings",
    },
  ];

  if (req.method !== "GET") {
    return res.redirect(307, "/");
  }

  await connection();
  const randomNames = await RandomName.find();

  if (!randomNames) {
    return res.status(200).json(defaultNames);
  }
  return res.status(200).json(randomNames);
};

export default handler;
