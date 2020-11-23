import fs from "fs";
import matter from "gray-matter";
import slugify from "slugify";

export const readFileContents = (directory) => {
  const path = `${process.cwd()}/${directory}`;
  const files = fs.readdirSync(path, "utf-8");
  const mdFiles = files.filter((fn) => fn.endsWith(".md"));

  const contents = mdFiles.map((fileName) => {
    const filePath = `${path}/${fileName}`;
    const content = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    return {
      ...matter(content),
      fileName,
    };
  });

  return contents;
};

export const createSlug = (str) =>
  slugify(str, {
    lower: true,
    remove: /[*+~.()'"!:@?]/g,
  });
