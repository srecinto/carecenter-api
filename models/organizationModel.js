var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var organizationSchema = new Schema({
    m_id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    web_url: {
        type: String
    },
    services: [
            { type: Schema.Types.ObjectId, ref: 'Service' }
    ],
    enabled: {
        type: Boolean,
        default: true
    },
    tags: [
            { type: Schema.Types.ObjectId, ref: 'Tag' }
    ]
}, {timestamps: true});

module.exports = mongoose.model('Organization', organizationSchema);
