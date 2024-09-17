const FormModel = require('./FormModel');

module.exports.getForm = async(req, res) => {
    const useForm = await FormModel.find();
    res.send(useForm);
}

module.exports.saveForm = async(req, res) => {
    const { name, email, phone, message } = req.body;
    FormModel.create({ name, email, phone, message })
    .then((data) => {console.log('Form is added!')
    res.send(data)
})
}