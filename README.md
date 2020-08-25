# LitElement Demo

The purpose of this demo is to explore patterns for low-maintenance, churn-free, minimalist frontend apps.

The demo app is [a Password Generator](https://bryanbraun.com/alt-react-demo), built using ReactJS conventions, on top of web components. It aims to have the ergonomics of React, without the workflow or maintenance burdens that comes with its mountain of dependencies. This app has no transpiling, no build steps, and only one dependency (LitElement). It also includes a simple custom store for managing global state.

For some background on this and similar efforts, see [this blog post](https://www.bryanbraun.com/2019/09/11/web-dev-nirvana-and-why-I-needed-to-let-go-of-reactjs-to-reach-it/).

## Setup

Just [run SimpleHTTPServer](https://2ality.com/2014/06/simple-http-server.html) to serve your files:

```
python -m SimpleHTTPServer
```
 
## Snowpack

This project uses [Snowpack](https://snowpack.dev) to pull in LitElement and build it into a single ES6-module-compatible file, which is then checked into the repo for use as a dependency. If I ever need to upgrade LitElement or add more dependencies, here's the process.

1. Update `package.json` with the new dependency information (I may need to update the `snowpack` section as well, if adding new dependencies)
2. Run `npx snowpack@2.9.0` which downloads snowpack on-the-fly and uses it to build the new dependency files.
