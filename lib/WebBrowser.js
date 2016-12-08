function WebBrowser(url){
	// this.url = url;
}

WebBrowser.prototype.open = function(url) {
	this.url = url;
	return 'Browsing to ' + url;
};

module.exports = WebBrowser;