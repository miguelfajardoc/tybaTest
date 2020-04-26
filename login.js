let User = require('./userModel');


exports.login = async (req, res, next) => {
    try {
	const user = await User.authenticate(req.body.email, req.body.password);
	if (user){
	    req.session.userId = user._id;
	    res.json({
		status: "success",
		message: "User logged succesfully",
		data: user
	    });
	} else {
	    res.json({
		status: "fail",
		message: "fail to logg with this credentials"
	    })
	}
    } catch (err) {
	return next(err);
    }
}

exports.logout = (req, res) => {
    res.session = null;
    res.clearCookie("session");
    res.clearCookie("session.sig");
    res.json({
	message: "Loging out.."
	});
}
