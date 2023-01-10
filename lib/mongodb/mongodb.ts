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

  async getHeads() {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result: string[] = await db.collection("links").distinct("head");
      return { status: true, data: result };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }

  async getLinks(head: string) {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result: linktreeItemType[] = await db
        .collection("links")
        .find({ $and: [{ head }] })
        .map((item) => ({ ...item, _id: item._id.toString() }))
        .toArray();
      if (!result) return { status: false, message: "No Data available" };
      return { status: true, data: result };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }
}

export default Mongodb;
