import jwt from "jsonwebtoken";
import { User } from "../../models/user.entity";
import { GraphQLError } from "graphql";

export const context = async ({ req }: any) => {
  let user = undefined;
  if (req.body.operationName === 'IntrospectionQuery') {
    return {};
  }
  if (req.body.operationName === 'SignIn') {
    return {};
  }
  const getBearerToken = req?.headers["authorization"];
  if (!getBearerToken) {
    throw new GraphQLError("Unauthorized", {
      extensions: {
        code: "Unauthorized",
        http: { status: 401 },
      },
    });
  }
  const token = getBearerToken.split(" ")?.[1];
  try {
    const payload = jwt.verify(token, "rsa");

    if (typeof payload === "object" && payload !== null && "exp" in payload) {
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < currentTimeInSeconds) {
        throw new Error("Token Expired");
      }

      if ("emailId" in payload) {
        const getUserDetails = await User.findOne({
          where: { email_id: payload.emailId },
        });
        if (!getUserDetails?.email_id) {
          throw new GraphQLError("Unauthorized", {
            extensions: {
              code: "Unauthorized",
              http: { status: 401 },
            },
          });
        }
        user = getUserDetails;
      }
    } else {
      throw new Error("Invalid Token Payload");
    }
  } catch (err) {
    console.error("JWT Error:", err);
    throw new Error("Unauthorized");
  }
  return { user };
};
