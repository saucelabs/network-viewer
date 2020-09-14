Network-Viewer [![Build Status](https://travis-ci.org/saucelabs/network-viewer.svg?branch=master)](https://travis-ci.org/saucelabs/network-viewer)
==============

## Introduction
Network-Viewer is a **redefined** HAR viewer human friendly view of requests which is build with [React](https://facebook.github.io/react/).

The main purpose of this web application is to help you to view HAR files with many features like filters, search, timline charts etc.

If you are interested contributing to this library, please have a look into our [Contributing Guidelines](https://github.com/saucelabs/network-viewer/blob/master/CONTRIBUTING.md). We love to see any kind of contributions 😊!

### Demo
[Example](https://saucelabs.github.io/network-viewer/?file=https%3A%2F%2Fraw.githubusercontent.com%2Fsaucelabs%2Fnetwork-viewer%2Fmaster%2Fexamples%2Fsrc%2Fdata%2Fnetwork.har&isCORSEnabled=false)

![](https://i.imgur.com/wryjs8l.png)

## Features
Main features of Network-Viewer are:
- **Import/Upload** HAR file
- **Fetch** HAR file using queryString url use `file=HAR_FILE_URL` and to enable CORS pass `isCORSEnabled=true` (by default CORS is disabled)
- **Search** request by URL or body content
- Filter request by **XHR, JS, CSS, Image, Media, Font, Doc, WebSocket, Manifest**
- **Errors Only** filter to filter request by error status (where status code is greater than or equal to 400)
- **WaterFall** chart to display timeline of request which includes 
- **Stats** at footer to show number of requests, data transfered size, resoruces size, and time metrics like Page Load, DOMContentLoaded and Finished time
- Request Detail section is available on click of request, response content is available for JSON and XML responses.

## How to use
### Import/Upload HAR file
Visit https://opensource.saucelabs.com/network-viewer/ and Import your HAR file via drag&drop.

### Fetch HAR file
- `file=HAR_FILE_URL` as queryString to pass HAR file url
- `isCORSEnabled=true`as queryString to enable CORS support (by default CORS is disabled)

### Use it as react library
```sh
$ npm install network-viewer
```

Example
```js
import { NetworkViewer } from 'network-viewer';
<NetworkViewer />
```

#### Props
| prop   | Type   | Default    | Values    | Description   |
|:---|:---|:---|:---|:---|
| autoHighlightChange   | Bool   | false   | true, false   | To allow change request highlight on scrollTimeStamp change when requestDetail is visible  |
| containerClassName   | String   | null   |   | custom-class to overwrite network-viewer's default style  |
| data   | Object   | null   | { log: { entries: [], pages: [] } }  | HAR file data which should contain log.entries and log.pages  |
| fetchOptions   | Object   | { withCredentials: true }   |  | axios request option can be set here to fetch HAR file  |
| file   | String   | null   |  | HAR file URL to fetch requests  |
| onDataLoaded   | Func   | null   | (data) => {}  | This function will receive loaded data on file is being fetched  |
| onRequestSelect   | Func   | null   | (requestDetail) => {}  | This function will receive request detail on request select  |
| options   | Object   | {showImportHAR: true, showTimeline: false}   |  | showImportHar: to show/hide import button and modal, showTimeline: to show/hide top timeline of requests |
| scrollRequestPosition   | String   | near   | before, after, near  | to find and highlight network request by timestamp,
near: find request near to timestamp
before: find request exactBefore the timestamp
after: find request exactAfter the timestamp |
| scrollTimeStamp   | Number   | null   |  | Find and highlight network request by timestamp |
