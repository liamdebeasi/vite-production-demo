# Vite Demo

## Steps to reproduce

1. Run `npm install`.
2. In the `test-module` directory, run `npm pack`.
3. In the root directory, run `npm install ./test-module/test-module-0.0.1.tgz`.
4. Run `npm run dev`.
5. Open page and Dev Tools in the browser.
6. Inspect the "My Badge" element. Observe that the element tag name is `<app-badge>`.
7. Run `npm run build`.
8. Open the built `index.html` file in a browser. If you have Python 3, you can do `cd dist && python -m http.server` and navigate `localhost` at the port specified.
9. Observe that the badge element is output as `<tagname>`.
10. In `test-module/index.esm.js`, remove the `useRef` import.
11. In the `test-module` directory, run `npm pack`.
12. In the root directory, run `npm install ./test-module/test-module-0.0.1.tgz`.
13. Run `npm run build`.
14. Open the built `index.html` file in a browser.
15. Observe that the badge element is output as `<app-badge>`.