import { ObjectId } from "mongodb";
import clientPromise from "./clientPromise";

class Mongodb {
  async finduser(username: string, password: string) {
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

  async getheads() {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result: string[] = await db.collection("links").distinct("head");
      return { status: true, data: result };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }

  async getlinks(head?: string) {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");

      if (head && head !== "") {
        const result = db
          .collection("links")
          .aggregate([{ $match: { head } }, { $addFields: { _id: { $convert: { input: "$_id", to: "string" } } } }]);
        let data = [];
        for await (const doc of result) data.push(doc);
        return { staus: true, data: data };
      }

      const result = db.collection("links").aggregate([
        {
          $group: {
            _id: "$head",
            data: { $push: "$$ROOT" },
          },
        },
        {
          $addFields: {
            data: {
              $map: {
                input: "$data",
                as: "docs",
                in: {
                  $mergeObjects: ["$$docs", { _id: { $convert: { input: "$$docs._id", to: "string" } } }],
                },
              },
            },
            data_length: { $size: "$data" },
          },
        },
        {
          $sort: {
            data_length: 1,
            "data.title": -1,
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

  async insertlink(link: { head: string; title: string; link: string; intro: string }) {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result = await db.collection("links").insertOne(link);
      if (result.acknowledged) return { status: true, message: "New link insert success!" };
      else return { status: false, message: "Cannot insert new link!" };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }

  async updatelink(_id: string, head: string, title: string, link: string, intro: string) {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result = await db
        .collection("links")
        .updateOne({ _id: new ObjectId(_id) }, { $set: { head, title, link, intro } });
      if (result.modifiedCount > 0) return { status: true, message: "Link update success!" };
      else return { status: false, message: "Cannot update link!" };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }

  async deletelink(link: { _id: string }) {
    try {
      const client = await clientPromise;
      const db = client.db("linktree");
      const result = await db.collection("links").deleteOne({
        _id: new ObjectId(link._id),
      });
      if (result.deletedCount > 0) return { status: true, message: "Link delete success!" };
      else return { status: false, message: "Cannot delete link!" };
    } catch (error) {
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }
}

export default Mongodb;
