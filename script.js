function translateTo(language) {
    const translations = {
        'en': {
            'About Me': 'About Me',
            'Experience': 'Experience',
            'Skills': 'Skills',
            'Projects': 'Projects',
            'Contact': 'Contact',
        },
        'fi': {
            'About Me': 'Tietoa minusta',
            'Experience': 'Kokemus',
            'Skills': 'Taidot',
            'Projects': 'Projektit',
            'Contact': 'Ota yhteyttä',
        }
    };

    const elements = document.querySelectorAll('h2');
    elements.forEach(element => {
        element.textContent = translations[language][element.textContent];
    });
}
