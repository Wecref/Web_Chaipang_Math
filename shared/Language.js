export function getLanguage() {
    return navigator.language || navigator.userLanguage;
};

export function isKorea() {
    let currentLang = getLanguage().substr(0, 2);

    return currentLang == "ko";
}
