import { Document } from "mongodb";

export interface Project {
  title: string;
  subTitle: string;
  image: string;
  link: string;
  about: string;
}

export interface Blog extends Document {
  title: string;
  content: string;
}
