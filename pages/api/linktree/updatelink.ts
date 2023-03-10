import { unstable_getServerSession } from "next-auth/next";
import type { NextApiRequest, NextApiResponse } from "next";

import { Mongodb } from "../../../lib/mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.setHeader("Allow", ["POST"]).end(`Method ${req.method} is not allowed!`);
  }

  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) return res.json({ status: false, message: "You have no access!" });

  const mongodb = new Mongodb();
  if (!req.body._id || !req.body.head || !req.body.title || !req.body.link || !req.body.intro)
    return res.json({ status: false, message: "Needed request body is empty!" });

  const response = await mongodb.updatelink(req.body._id, req.body.head, req.body.title, req.body.link, req.body.intro);
  return res.json(response);
}
