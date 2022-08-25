import studentModel from "../model/studentModel.js";

const getDetails = async(req, res) => {
    let fetchData = await studentModel.find();

    res.send(fetchData)
}

export default getDetails