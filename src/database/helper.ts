import { ObjectId } from "mongodb";
import db from "./connection";

export async function fetchBlogs() {
  const collection = db.collection("Blog");
  const blogs = await collection.find().toArray();
  return blogs;
}

export async function fetchBlog(id: string) {
  const collection = db.collection("Blog");
  const blog = await collection.findOne({ _id: new ObjectId(id) });
  return blog;
}
