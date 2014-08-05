(function(){
	
	var Loader;
	(function(module){
		//import /node_modules/atma-loader/index.js
	}(Loader = {}));
	
	var Compiler;
	(function(module){
		// import compiler.js
	}(Compiler = {}));
	
	(function(){
		
		include.exports = Loader.exports.create({
			name: 'atma-loader-yml',
			options: {
				mimeType: 'application/json',
				extensions: [ 'yml' ]
			},
		}, Compiler.exports);
		
	}());
	
}());