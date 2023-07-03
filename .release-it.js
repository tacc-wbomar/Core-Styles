const fs = require('fs');

const commitTemplate = fs.readFileSync('CHANGELOG.hbs').toString();

module.exports = {
  "github": {
    "release": true
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "infile": "CHANGELOG.md",
      "writerOpts": {
        "commitPartial": commitTemplate
      },
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