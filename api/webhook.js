import sendNotification from "../telegram";

const handler = async (req, res) => {
  await sendNotification(`💌 ${req.body.From}: ${req.body.Body}`);
  res.send({});
};

export default handler;
