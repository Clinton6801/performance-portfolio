import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // This line extends the Next.js and TypeScript recommended rules.
  // The react/no-unescaped-entities rule is inherited from one of these.
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 👇 ADD A NEW CONFIG OBJECT TO OVERRIDE SPECIFIC RULES
  {
    rules: {
      // Set the rule to "off" to disable the check for unescaped entities
      "react/no-unescaped-entities": "off",
      
      // OPTIONAL: Disable the unused vars warning you mentioned earlier
      "@typescript-eslint/no-unused-vars": "off" 
    }
  },
  // ----------------------------------------------------------------------

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;