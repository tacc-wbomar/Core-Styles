const { Plugin } = require('release-it');
const fs = require('fs');
const path = require('path');
const moment = require('moment')

class KeepAChangelog extends Plugin {
  constructor(...args) {
    super(...args);
    if (!this.options.filename) {
      throw Error('Missing filename!')
    }
    this.changelogFile = path.resolve(`${this.options.filename}`);
    this.changelogData = fs.readFileSync(this.changelogFile, 'utf-8')
    this.unreleasedTitleRaw = 'Unreleased'
    this.unreleasedTitle = `\n\n## [${this.unreleasedTitleRaw}]\n\n`
  }
  getChangelog(latestVersion) {
    const hasUnreleasedSection = this.changelogData.includes(this.unreleasedTitle)
    if (!hasUnreleasedSection) {
      throw Error(`Bad changelog! Missing ${JSON.stringify(this.unreleasedTitle)} title in ${this.options.filename} file.`)
    }
    const previousReleaseTitle = `\n\n## [${latestVersion}]`
    const hasPreviouReleaseSection = this.changelogData.includes(previousReleaseTitle)
    if (!hasPreviouReleaseSection) {
      throw Error(`Bad changelog! Missing changelog for previous release ${latestVersion} in ${this.options.filename} file. It should be titled as ${JSON.stringify(previousReleaseTitle)}.`)
    }
    const start = this.changelogData.indexOf(this.unreleasedTitle) + this.unreleasedTitle.length
    const end = this.changelogData.indexOf(previousReleaseTitle)
    const releaseChangelog = this.changelogData.substring(start, end).trim()
    if (!releaseChangelog) {
      throw Error(`Bad changelog! There are no entries under "${this.unreleasedTitleRaw}" section in ${this.options.filename} file. Fill it up!`)
    }
    return releaseChangelog
  }
  bump(version) {
    const todaysDate = moment().format('YYYY-MM-DD')
    const releaseTitle = `\n\n## [${version}] - ${todaysDate}\n\n`
    const newChangelogData = this.changelogData.replace(this.unreleasedTitle, releaseTitle);
    fs.writeFileSync(this.changelogFile, newChangelogData)
  }
}

module.exports = KeepAChangelog;