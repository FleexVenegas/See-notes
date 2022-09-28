import { verify } from "jsonwebtoken";

export default function profileHandle(req, res) {
  const { mytoken } = req.cookies;

  if (!mytoken) {
    return res.status(401).json({ error: "no token" });
  }

  try {
    const user = verify(mytoken, "secret");
    return res.json({ email: user.email, username: user.username, id: user.id });
  } catch (error) {
    return res.status(401).json({ error: "invalid token" });
  }
}
