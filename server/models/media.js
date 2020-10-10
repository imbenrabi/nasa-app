import mongoose from 'mongoose';
import validator from 'validator';

const mediaSchema = new mongoose.Schema({
    nasa_id: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    mediaUrl: {
        unique: true,
        type: String,
        required: true,
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error('Invalid image url');
            }
        }
    },
    description: {
        type: String,
        trim: true
    },
    active: {
        type: Boolean,
        default: true
    },
    media_type: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})


export const Media = mongoose.model('media', mediaSchema);