const { Schema, model } = require('mongoose');


const PostSchema = Schema({
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    fileUrl: {
        type: String,
        required: false,
    },
    author: {
        id: String,
        name: String,
    }
});


PostSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Post', PostSchema );

