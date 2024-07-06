import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    console.log("not token");
    return res.status(403).send({ message: "No token provided" });
  }
  jwt.verify(token, "iloveyou", (error, decode) => {
    if (error) {
      console.log("error");
      return res.status(401).send({ message: "Invalid token" });
    }
    req.userId = decode.userId;
    next();
  });
};
