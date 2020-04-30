import sendNotification from "../telegram";

const handler = async (req, res) => {
  console.log(req.body);
  await sendNotification(JSON.stringify(req.body));
  res.send({});
};

export default handler;
