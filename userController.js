let User = require('./userModel');


exports.index = (req, res) => {
    User.get( (err, users) => {
	if (err) {
	    res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};

exports.new = (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.password = req.body.password;
    user.email = req.body.email;

    user.save( (err) => {
	if (err)
	    res.json(err);
	else {
	    res.json( {
		message: 'New contact created!',
		data: user
            });
	}
    });
};

exports.view = (req, res) => {
    User.findById(req.params.user_id, (err, user) => {
        if (err)
            res.send(err);
        else {
	    res.json({
		message: 'Contact details loading..',
		data: user
            });
	}
    });
};

exports.update = (req, res) => {
    User.findById(req.params.user_id, (err, user) => {
        if (err)
            return res.send(err);
	else {
	    user.name = req.body.name ? req.body.name : user.name;
	    user.age = req.body.age ? req.body.age: user.age;
	    user.password = req.body.password ? req.body.password : user.password;
	    user.email = req.body.email ? req.body.email : user.email;

            user.save(function (err) {
		if (err)
                    return res.json(err);
		return res.json({
                    message: 'Contact Info updated',
                    data: user
		});
	    });
	}
    });
};


exports.delete = (req, res) => {
    User.deleteOne({
        _id: req.params.user_id
    }, (err, contact) => {
        if (err)
            res.send(err);
	res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};
