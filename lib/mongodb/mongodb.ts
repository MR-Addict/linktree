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

  async getlinks() {
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
}

export default Mongodb;
