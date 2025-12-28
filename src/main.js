import { setupPage, setupData } from "./setup";

import { data } from "./data";

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    const personQuery = url.searchParams.get('p');

    if (!personQuery) {
        throw new Error('Miss required query params')
    }

    const personKey = atob(personQuery);

    if (!data[personKey]) {
        throw new Error('Query params refers to unknown person');
    }

    const decoded = JSON.parse(decodeURIComponent(atob(data[personKey])));

    setupData(decoded);
    setupPage();

    setTimeout(() => {
        document.getElementById('personal-info').style.opacity = '1';
    }, 200)
}, { once: true })
