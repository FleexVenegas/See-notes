import { serialize } from "cookie";
import { verify } from "jsonwebtoken";

export default function logoutHandle(req, res) {
  const { mytoken } = req.cookies;

  if (!mytoken) {
    return res.status(401).json({ message: "No token available" });
  }

  try {
    verify(mytoken, "secret");
    const serealized = serialize("mytoken", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });

    res.setHeader("Set-Cookie", serealized);
    res.status(200).json("Logout successfully");
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
