const model = {
    "resolution" : "1280x720",
    "cpu" : "bcm7362",
    "author" : "kaon"
};

const config = {

    "menu" : [
        {"name" : "Channel",    "img" : require(`common/img/${model.resolution}/icons/38x38/channels_38.png`),  "active": true},
        {"name" : "Guide",      "img" : require(`common/img/${model.resolution}/icons/38x38/guide_38.png`),     "active": true},
        {"name" : "Recordings", "img" : require(`common/img/${model.resolution}/icons/38x38/record_38.png`),    "active": true},
        {"name" : "Media",      "img" : require(`common/img/${model.resolution}/icons/38x38/media_38.png`),     "active": true},
        {"name" : "Settings",   "img" : require(`common/img/${model.resolution}/icons/38x38/setting_38.png`),   "active": true}
    ],

    "recording" : [
        { "name" : "recording",  "active" : true},
        { "name" : "reservation","active" : true}
    ],
    "media" : [

    ],
    "setting" : [

    ]
};


export default config;
