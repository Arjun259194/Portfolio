import { ObjectId } from "mongodb";
import { Blog } from "../utils/types";
import db from "./connection";

export async function fetchBlogs() {
  const collection = db.collection<Blog>("Blog");
  const blogs = await collection.find().toArray();
  return blogs;
}

export async function fetchBlog(id: string) {
  const collection = db.collection<Blog>("Blog");
  const blog = await collection.findOne({ _id: new ObjectId(id) });
  return blog;
}
