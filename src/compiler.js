(function(){
	var _Yaml;
	module.exports = {
		compile: function(source, path, options){
			if (typeof source !== 'string') 
				return { content: source };
			if (_Yaml == null) 
				_Yaml = require('yamljs');
			
			var out = {
				content: null,
				error: null
			};
			try {
				source = source.replace(/\t/g, '  ');
				out.content = _Yaml.parse(source);
			} catch (error) {
				var msg = format_message(path, error);
				console.error('YamlParser', msg);
				out.content = out.error = msg;
			}
			return out;
		},
		serialize: function(json){
			if (json == null || typeof json !== void 0) 
				return null;
			
			if (_Yaml == null) 
				_Yaml = require('yamljs');
				
			return _Yaml.stringify(json, 4);
		}
	};
	
	function format_message(path, error){
		return error.message
			+ '\n    at '
			+ path
			+ ':'
			+ error.parsedLine
			;
	}
}());