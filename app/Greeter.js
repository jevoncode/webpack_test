var config = require('./config.json');

module.exports = function(){
	var greet = document.createElement('div');
	// greet.textContent = "分工是效率的开始！亚当斯密";
	greet.textContent = config.greetText;
	return greet;
}