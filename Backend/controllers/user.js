const User = require('../model/user');

exports.updatePoint = async (req,res) => {
  const { id } = req.params;
  const { score } = req.params;    
  // if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');       
  try {
      const currentPointData = await User.findById(id)
      let currentPoint= currentPointData.totalScore
      const updatedPoint = await User.findByIdAndUpdate(id, {totalScore: parseInt(currentPoint) + parseInt(score)}, { new: true });
      // const creatorData = await User.findById(updatedPost.creator);
      // const creatorName = creatorData.name
      // const sumData = await PostMessage.aggregate([
      //     { $match: { name: creatorName  }},
      //     {$group: { _id: '$name', total: { $sum: "$score" }  }}
      // ])
      // const updatedUser = await User.findByIdAndUpdate(creatorData._id, {totalScore: sumData[0].total}, { new: true });
      res.json(updatedPoint);
  } catch (error) {
      res.status(409).json({message: error.message});
  }
}