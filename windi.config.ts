import { defineConfig } from "windicss/helpers";
import { getPath } from "./webpack/utils";

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: [getPath("src/**/*.{html,tsx}")],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: [getPath("node_modules"), getPath(".git"), getPath("dist")],
  },
});
