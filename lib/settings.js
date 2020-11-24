import { readFileContents } from "./content";

export const getSettings = () => {
  const settings = readFileContents("content");

  return settings
    .map((setting) => ({
      ...setting.data,
    }))[0];
};
