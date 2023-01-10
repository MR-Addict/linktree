import clientPromise from "./mongodb";

export default async function findUser(username: string, password: string) {
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
