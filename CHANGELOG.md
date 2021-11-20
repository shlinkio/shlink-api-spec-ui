# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org).

## [1.8.0] - 2021-11-20
### Added
* *Nothing*

### Changed
* Moved ci workflow to external repo and reused
* Updated dependencies, including node 16, Next.js 12 and Swagger UI 4

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#53](https://github.com/shlinkio/shlink-api-spec-ui/issues/53) Fixed random error loading swagger when versions are not fully loaded, due to a casting of `undefined` to string.


## [1.7.1] - 2021-08-27
### Added
* *Nothing*

### Changed
* [#47](https://github.com/shlinkio/shlink-api-spec-ui/issues/47) Updated to next.js 11.1.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#46](https://github.com/shlinkio/shlink-api-spec-ui/issues/46) Ensured stable versions are selected by default


## [1.7.0] - 2021-07-09
### Added
* [#23](https://github.com/shlinkio/shlink-api-spec-ui/issues/23) Updated dependencies, including next.js 11.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.6.0] - 2021-05-08
### Added
* [#23](https://github.com/shlinkio/shlink-api-spec-ui/issues/23) Updated to official async-api component.

### Changed
* Migrated build to Github Actions

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.5.0] - 2020-11-20
### Added
* [#21](https://github.com/shlinkio/shlink-api-spec-ui/issues/21) Added github action to build docker image.

### Changed
* [#18](https://github.com/shlinkio/shlink-api-spec-ui/issues/18) Updated to NextJS 10.
* [#20](https://github.com/shlinkio/shlink-api-spec-ui/issues/20) Updated project dependencies.
* [#19](https://github.com/shlinkio/shlink-api-spec-ui/issues/19) Updated to latest swagger-ui-react, which supports deeplinking, and therefore allows removing custom component.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#22](https://github.com/shlinkio/shlink-api-spec-ui/issues/22) Fixed word wrap on long texts.


## [1.4.1] - 2020-04-23
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#14](https://github.com/shlinkio/shlink-api-spec-ui/issues/14) Fixed `/async-api` path resulting in a 404 when loaded synchronously from the server.


## [1.4.0] - 2020-04-19
### Added
* Added page for async API spec

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.3.0] - 2020-03-31
### Added
* Updated to [next.js](https://nextjs.org/) security patch, v9.3.2
* Configured docker image build as part of regular travis build.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.2.0] - 2020-03-10
### Added
* Updated dependencies, including [next.js](https://nextjs.org/) to v9.3

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#8](https://github.com/shlinkio/shlink-api-spec-ui/issues/8) Fixed logo path.


## [1.1.1] - 2019-11-30
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed security issues on outdated dependencies.


## [1.1.0] - 2019-09-06
### Added
* [#5](https://github.com/shlinkio/shlink-api-spec-ui/issues/5) Selected API version is now set as a query param.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.0.1] - 2019-09-04
### Added
* [#2](https://github.com/shlinkio/shlink-api-spec-ui/issues/2) Added css style checks with stylelint.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#1](https://github.com/shlinkio/shlink-api-spec-ui/issues/1) Fixed deep links not working.


## [1.0.0] - 2019-08-31
### Added
* First stable release

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*
