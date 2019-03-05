module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFiles": [
    "<rootDir>/__tests__/setupTests.ts"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/__tests__/setupTests.ts"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
}