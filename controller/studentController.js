import studentModel from "../models/Student.js";

class studentController{
    static getAllDoc = async (req,res) =>{
        try {
            const result = await studentModel.find();
            res.render('index', {result})
        } catch (err) {
            console.log(err)
        }
    }
    static createDoc = async (req,res) =>{
        try {
            //create new document
            const{name, age, fees} = req.body;
            const doc = new studentModel({
                name:name,
                age:age,
                fees:fees
            })
            //saving document
            const result = await doc.save()
        } catch (err) {
            console.log(err)
        }
        res.redirect('/student')
    }
    static editDoc = async (req,res) =>{
        try {
            const result = await studentModel.findById(req.params.id)
            res.render("edit", {result})
        } catch (error) {
            
        }
    }
    static updateDocById = async (req,res) =>{
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/student")
    }
    static deleteDocById = async (req,res) =>{
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
        // console.log(req.params.id);
        // res.redirect("/student")
    }

}
export default studentController