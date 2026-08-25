import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
      "react-hooks/refs": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "import/no-anonymous-default-export": "off",
      "@next/next/no-img-element": "warn"
    }
  }
];

export default config;
