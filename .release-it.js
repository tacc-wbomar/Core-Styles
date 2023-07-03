const fs = require('fs');

const header = fs.readFileSync('.release-it/CHANGELOG-header.md').toString();

module.exports = {
  "github": {
    "release": true
  },
  "plugins": {
    "@release-it/keep-a-changelog": {
      "filename": "CHANGELOG.md",
      "strictLatest": false,
      "addVersionUrl": true
    },
    "@release-it/conventional-changelog": {
      "infile": "CHANGELOG.md",
      "header": header,
      "preset": {
        "name": "conventionalcommits",
        "types": [
          {
            "type": "feat",
            "section": "Added"
          },
          {
            "type": "fix",
            "section": "Changed"
          },
          {
            "type": "docs",
            "section": "Documented"
          },
          {
            "type": "perf",
            "section": "Changed"
          },
          {
            "type": "refactor",
            "section": "Changed"
          },
          {
            "type": "build",
            "section": "Other"
          },
          {
            "type": "ops",
            "section": "Other"
          },
          {}
        ]
      }
    }
  }
}