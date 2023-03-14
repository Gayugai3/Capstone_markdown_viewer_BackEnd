import { client } from "../index.js";

export async function getUserByUsername(email) {
  return await client
    .db("Capstone_MdViewer")
    .collection("users")
    .findOne({ email: email });
}

export async function addUser(data) {
  return await client
    .db("Capstone_MdViewer")
    .collection("users")
    .insertOne(data);
}

export async function savedData(email) {
  return await client
    .db("Capstone_MdViewer")
    .collection("content")
    .findOne({ email: email });
}

export async function updateUserByemail({ email, password1 }) {
  return await client
    .db("Capstone_MdViewer")
    .collection("users")
    .updateOne({ email: email }, { $set: { password1: password1 } });
}
