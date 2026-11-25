import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Vendored, minified Draco decoder copied from three/examples.
  { ignores: ["public/draco/**"] },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "react-hooks/exhaustive-deps": "off",
    },
  }),
];

export default eslintConfig;
