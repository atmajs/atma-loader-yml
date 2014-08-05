Yaml Parser _(Atma Plugin)_
-----
[![Build Status](https://travis-ci.org/atmajs/atma-loader-yml.png?branch=master)](https://travis-ci.org/atmajs/atma-loader-yml)

The Plugin extends:
- [`IncludeJS`](https://github.com/atmajs/IncludeJS) with a custom loader
- [`atma-io`](https://github.com/atmajs/atma-io) with a custom middleware to read Yml files as Json
- [`atma-server`](https://github.com/atmajs/atma-server) and [`Atma Toolkit`](https://github.com/atmajs/Atma.Toolkit) with a `HTTPHandler` to serve compiled sources as Json



##### How to use

###### Embed into the Project

+ `atma plugin install atma-loader-yml`
	
	This adds `atma-loader-less` npm dependency and the `package.json` would look like:
	```json
	{
		"dependency": {
			"atma-loader-yml"
		},
		"atma": {
			"plugins": [
				"atma-loader-yml"
			],
			"settings": {
				"atma-loader-yml": {
					"extension": "yml"
				}
			}
		}
	}
	```
+ That's all. Now, you are ready to use yml instead of json in your project

##### Quick Try

+ install atma: `$ npm install atma -g` _required once for plugin installation sugar_
+ install plugin: `$ atma plugin install atma-loader-yml`
+ add `test.html` to the directory

    ```html
    <!DOCTYPE html>
    <script src='http://cdn.jsdelivr.net/g/jquery'></script>
    <script>
    	$.getJSON('/test.yml').then(function(json) {
    		console.log(json);
    	})
    </script>
    ```
+ add `test.yml`
    
    ```css
    name: Foo
    ```
+ start the server: `$ atma server`
+ open the browser: `http://localhost:5777/test.html`



----
_(c) MIT License - Atma.js Project_