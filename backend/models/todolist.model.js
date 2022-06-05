import mongoose from 'mongoose'; 
const {Types} = mongoose; 

const ListSchema = new mongoose.Schema({
    _id: {
        type: Types.ObjectId, 
        auto: true, 
    },
    name: {
        type: String, 
        required: true, 
    }, 
    tasks: [
        {
            taskId: {
                type: Types.ObjectId, 
                auto: true, 
            }, 
            label: {
                type: String, 
                required: true, 
            },
            done: {
                type: Boolean, 
                required: true, 
                default: false, 
            },
        }
    ]
},
{versionKey: false, _id: false},);

const List = mongoose.model("lists", ListSchema); 
export default List; 