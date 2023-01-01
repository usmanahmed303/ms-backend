const User = require("../model/userSchema");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    User.findOne({ email: email }).then((userexist) => {
      if (userexist) {
        return res.status(403).json({ error: "User Exist" });
      }

      const user = new User({email,password});

    user.save().then(()=>{
      res.status(201).json({message:'User Regitered Successfully'})
    }).catch((err)=> res.status(500).json({error:'Failed to register'}));

    });

    
    
  } catch (error) {
    next(error);
  }
};

// exports.list = async (req, res, next) => {
//   try {
//     console.log("token", req.token);

//     return res.send({
//       success: true,
//       message: "list fetched successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.err = async (req, res, next) => {
//   try {
//     console.log("error");
//     let error = new Error(`processing error in request at ${req.url}`);
//     error.statusCode = 400;
//     throw error;
//   } catch (error) {
//     next(error);
//   }
// };
