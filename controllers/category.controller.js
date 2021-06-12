const Afterware = require("../lib/afterware");
const Collection = require("../models/category");
class CategoryController {

    static async create(req, res) {
        try {
            const collection = new Collection();
            collection.title = req.body.title;

            let savedDoc = await collection.save();

            return Afterware.sendResponse(req, res, 200, {
                status: "success",
                message: "new Category collection created successfully",
                data: savedDoc
            });
        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "Internal Server Error",
            });
        }
    }

    static async update(req, res) {
        try {
            const categoryId = req.params.categoryId;
            if (!categoryId && categoryId === "") {
                return Afterware.sendResponse(req, res, 400, {
                    status: "Validation Error",
                    message: "Enter Proper categoryId",
                });
            } else {
                const updated = await Collection.updateOne({ _id: categoryId }, req.body);
                return Afterware.sendResponse(req, res, 200, {
                    status: "success",
                    message: `${updated.nModified} Documents modified`,
                });
            }
        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "Internal Server Error",
            });
        }
    }
    static async viewAll(req, res) {
        try {
            const collections = await Collection.find({});
            return Afterware.sendResponse(req, res, 200, {
                status: "success",
                data: collections,
            });
        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "Internal Server Error",
            });
        }
    }
    static async view(req, res) {
        try {
            const categoryId = req.params.categoryId;
            if (!categoryId && categoryId === "") {
                return Afterware.sendResponse(req, res, 400, {
                    status: "Validation Error",
                    message: "Enter Proper categoryId",
                });
            } else {
                const collections = await Collection.find({ _id: categoryId });
                return Afterware.sendResponse(req, res, 200, {
                    status: "success",
                    data: collections,
                });
            }
        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "Internal Server Error",
            });
        }
    }
    

    static async delete(req, res) {
        const categoryId = req.params.categoryId;
        try {
            const deleted = await Collection.deleteOne({ _id: categoryId });
            return Afterware.sendResponse(req, res, 200, {
                status: deleted.ok == "1" ? "success" : "fail",
                message: deleted.deletedCount,
            });
        } catch (error) {
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "Internal Server Error",
            });
        }
    }
    
}
const createToken = (categoryId) => {
    return jwt.sign({ categoryId },'the secret key',{
        expiresIn:100
    });
}


module.exports = CategoryController;