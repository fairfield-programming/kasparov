export function pickLangVersion(language) {

    return {
        js: "16.3.0"
    }[language];

}

export function pickLangEnding(language) {

    return {
        js: "js"
    }[language];

}