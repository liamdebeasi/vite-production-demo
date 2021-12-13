# Vite Demo

## Steps to reproduce

1. Run `npm install`.
2. Run `npm run dev`.
3. Open Dev Tools in the browser.
4. Inspect the "My Badge" element. Observe that the element tag name is `<app-badge>`.
5. Run `npm run build`.
6. Open the built `index.html` file in a browser.
7. Observe that the badge element is output as `<tagname>`.
8. In `test-module/index.esm.js`, remove the `useRef` import.
9. Run `npm run build`.
10. Open the built `index.html` file in a browser.
11. Observe that the badge element is output as `<app-badge>`.