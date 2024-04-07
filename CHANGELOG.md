# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org).

## [2.6.0] - 2024-04-07
### Added
* *Nothing*

### Changed
* Update dependencies
* Update JS coding standard

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.5.0] - 2024-02-10
### Added
* *Nothing*

### Changed
* Update dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.4.0] - 2023-11-25
### Added
* *Nothing*

### Changed
* Update dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.3.0] - 2023-11-05
### Added
* *Nothing*

### Changed
* Update dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.2.1] - 2023-08-20
### Added
* *Nothing*

### Changed
* Update dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.2.0] - 2023-06-18
### Added
* *Nothing*

### Changed
* Update to Swagger UI 5.0.0 and other dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.1.0] - 2023-03-05
### Added
* *Nothing*

### Changed
* [#87](https://github.com/shlinkio/shlink-api-spec-ui/issues/87) Improve how tags are loaded.
* [#91](https://github.com/shlinkio/shlink-api-spec-ui/issues/91) Migrate to tailwindcss.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.0.0] - 2023-03-01
### Added
* *Nothing*

### Changed
* [#86](https://github.com/shlinkio/shlink-api-spec-ui/issues/86) Migrate from Next.js to vite + react-router.
* [#88](https://github.com/shlinkio/shlink-api-spec-ui/issues/88) Update to latest swagger-ui.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.12.1] - 2022-11-24
### Added
* *Nothing*

### Changed
* Updated project dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Downgraded to swagger-ui 4.13.1 to fix dropped query params.


## [1.12.0] - 2022-09-10
### Added
* *Nothing*

### Changed
* Migrated to reusable workflow for docker image publishing
* Updated project dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.11.0] - 2022-08-01
### Added
* *Nothing*

### Changed
* Updated dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.10.0] - 2022-05-27
### Added
* *Nothing*

### Changed
* Updated dependencies and coding styles

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#56](https://github.com/shlinkio/shlink-api-spec-ui/issues/56) Fixed linting.


## [1.9.2] - 2022-01-30
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#62](https://github.com/shlinkio/shlink-api-spec-ui/issues/62) Moved from GitHub pages to load oas specs to raw.githubcontent.com, avoiding the delay when new versions are published.
* [#64](https://github.com/shlinkio/shlink-api-spec-ui/issues/64) Changed the name used to load OAS files, to bypass ad blockers.


## [1.9.1] - 2021-12-12
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#61](https://github.com/shlinkio/shlink-api-spec-ui/issues/61) Fixed error when trying to load Async API spec fo v2.10.0 due to wrong version comparison.


## [1.9.0] - 2021-12-11
### Added
* [#57](https://github.com/shlinkio/shlink-api-spec-ui/issues/57) Added support to download oas spec from shlinkio/shlink-open-api-specs repo for versions that support it.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


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
