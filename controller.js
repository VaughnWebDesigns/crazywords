(function() {
	angular.module('app').controller('appController', appController);

	function appController() {
		var xx = this;
	  let words = ['cool', 'fun', 'exciting', 'lame', 'sucks'];
		let styles = ['s1', 's2', 's3','s4'];
		let phrases = ["wubadubadubdub", "Not today!", "Something something really clever", "Females is strong as hell"];
		xx.WordArray = [];

		xx.addword = function() {
			xx.WordArray.push({
				 content: getRandomElement(words)
			});
		};
		xx.addstyledword = function() {
			xx.WordArray.push({
				 content: getRandomElement(words),
				styleName: getRandomElement(styles)
			});
		};
		xx.addphrase = function() {
			xx.WordArray.push({
			  content: getRandomElement(phrases)
			});
		};
		xx.addstyledphrase = function() {
			xx.WordArray.push({
			  content: getRandomElement(phrases),
				styleName: getRandomElement(styles)
			});
		};

		function getRandomElement (array) {
		  return array[Math.floor(Math.random() * array.length)]
		}
	}
})();
