const config = {
  preset: "ts-jest", // Для TypeScript
  testEnvironment: "jsdom", // Для React
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Для CSS/SCSS
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Для jest-dom
};

export default config;