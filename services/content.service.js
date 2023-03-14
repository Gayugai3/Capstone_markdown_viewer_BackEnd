import { client } from "../index.js";

export async function saveContent(email, data) {
  return await client
    .db("Capstone_MdViewer")
    .collection("content")
    .insertOne({ email: email, data: data });
}

export async function mduser(email) {
  return await client
    .db("Capstone_MdViewer")
    .collection("content")
    .findOne({ email: email });
}

export async function updateContent(email, data) {
  return await client
    .db("Capstone_MdViewer")
    .collection("content")
    .updateOne({ email: email }, { $set: { data: data } });
}
