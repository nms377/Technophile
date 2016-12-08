//create constructor called Phone that passes single argument phoneNumber and sets a public var phoneNumber to the value of the constructor argument
function Phone(phoneNumber){
	this.phoneNumber = phoneNumber;
}

//create a method called callPhone that accepts a single argument and returns a status message 
Phone.prototype.callPhone = function(phoneNumber){
	return this.phoneNumber + ' calls ' + phoneNumber;
};

module.exports = Phone;