import { Schema } from 'mongoose';

export const UserSchema = new Schema({

    companyId: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    title: { type: String, required: true },
    contact: {
        email: { type: String, required: true },
        phone: { type: String, required: true },
        officePhone: { type: String, required: true },
    },
    active: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: false },
    lastActivity: { type: Date, required: false },
    _SYS_SETTINGS: {
        login: { type: String, required: true },
        hash: { type: String, required: false },
    },
    
});
