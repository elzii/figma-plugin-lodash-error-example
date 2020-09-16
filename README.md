# Figma Plugin - Lodash Error Example

### Problem:

Lodash cannot determine the context (window, globalThis, etc) when running in the main thread of a figma plugin, but only `Use Developer VM` is toggled on in Figma plugin settings. 

Unsure if this should be resolved upstreams with lodash or not.
