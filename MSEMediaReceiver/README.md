# MSEMediaReceiver
OCast media receiver sample using the [dash.js](https://github.com/Dash-Industry-Forum/dash.js) MSE/EME based HTML5 player.

## License
All code in this repository is covered by the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0). See LICENSE file for copyright details.

### Launch
`npm run start`

### Build
`npm run build`

### Lint
`npm run lint`

By default, unsecure WebSockets are used. You can specify using secure WebSockets:
- by setting 'secure' option in command line:

    `npm run start -- --secure`

- by setting the query string parameter 'secure' when loading the webapp:

    `http(s)://.../?secure=true`

