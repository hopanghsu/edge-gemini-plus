/**
 * sidepanel.js - Content script for Gemini side panel.
 * Targets and removes elements of type "hallucination-disclaimer".
 * Designed to run at "document_start" for immediate effect.
 */

console.log('Gemini Plus: sidepanel.js loading at document_start...');

// 1. Immediate style injection using document.documentElement
const injectStyle = () => {
    const css = `
        hallucination-disclaimer { display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; }
        body { padding-bottom: 16px !important; }
    `;
    const style = document.createElement('style');
    style.id = 'gemini-plus-styles';
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
    console.log('Gemini Plus: Styles injected (hiding disclaimer + adding padding).');
};

if (document.head || document.documentElement) {
    injectStyle();
} else {
    document.addEventListener('DOMContentLoaded', injectStyle);
}

console.log('Gemini Plus: sidepanel.js initialization complete.');
