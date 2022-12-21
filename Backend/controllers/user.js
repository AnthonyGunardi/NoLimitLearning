const User = require('../model/user');

exports.updatePoint = async (req,res) => {
  const { id } = req.params;
  const { score } = req.params;          
  try {
      const currentPointData = await User.findById(id)
      let currentPoint= currentPointData.totalScore
      const updatedPoint = await User.findByIdAndUpdate(id, {totalScore: parseInt(currentPoint) + parseInt(score)}, { new: true });
      res.json(updatedPoint);
  } catch (error) {
      res.status(409).json({message: error.message});
  }
}

exports.getUsers = async(req,res) => {
  const { page } = req.query;
  try {
      const LIMIT = 10;
      const users= await User.find({isAdmin: false}).sort({ totalScore: -1 }).limit(LIMIT);
      res.status(200).json(users);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};