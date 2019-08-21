# ocast-receiver-sample

This project provides OCast receiver samples for media playback.
It provides 2 samples:
- one using native HTML5 &lt;video&gt; element
- one using the [dash.js](https://github.com/Dash-Industry-Forum/dash.js) MSE/EME based HTML5 player

These samples can be used to help developing your controller application based on provided SDKs along with demonstration applications:
- [OCast-iOS](https://github.com/Orange-OpenSource/OCast-iOS)
- [OCast-JVM](https://github.com/Orange-OpenSource/OCast-JVM)

# Usage

These OCast receiver samples can be launched for test on a desktop using the [ocast-dongletv-simulator](https://github.com/Orange-OpenSource/ocast-dongletv-simulator)

Each of the sample can be loaded using unsecure or secure WbeSockets.
To load the sample using secure WebSockets:

    http(s)://..../secure=true

## License

All code in this repository is covered by the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0). See LICENSE file for copyright details.
