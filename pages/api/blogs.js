// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    console.log(item);
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf8');
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}