const { versionControl } = require('./version');
const version = require("./package.json").version;

if (typeof module !== 'undefined' && module.exports) {
    const { gemini_chat, gemini_image } = require('./src/main');
    
    module.exports = {
        gemini_chat,
        gemini_image
    };
} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    import('./src/main').then(({ gemini_chat, gemini_image }) => {
        exports.gemini_chat = gemini_chat;
        exports.gemini_image = gemini_image;
    }).catch(err => {
        console.error('Error loading the module:', err);
    });
}
