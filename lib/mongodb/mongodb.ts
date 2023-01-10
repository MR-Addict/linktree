import clientPromise from "./clientPromise";
import { linktreeItemType } from "../../app/config";

class Mongodb {
  async findUser(username: string, password: string) {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result = await db.collection("user").findOne({ $and: [{ username }, { password }] });
      if (!result) return { status: false, message: "Username or Password incorrect!" };
      return { status: true, data: { id: result._id.toString(), username: result.username } };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }

  async getLinks() {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result = db.collection("links").aggregate([
        {
          $group: {
            _id: "$head",
            data: { $push: "$$ROOT" },
          },
        },
      ]);
      let data = [];
      for await (const doc of result) data.push(doc);
      return { staus: true, data: data };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }
}

export default Mongodb;
