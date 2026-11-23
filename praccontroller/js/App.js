class App {
    async start() {
        const data = await (await fetch("data/licenses.json")).json();
        const licenses = data.map(item => new License(item));
        const controller = new LicenseController(licenses);

        controller.renderFeatured(4, document.querySelector("#featured"));
        controller.renderOffers(4, document.querySelector("#offers"));
        controller.renderLatest(4, document.querySelector("#latest"));
        controller.renderAll(8, document.querySelector("#all"));
    }
}

new App().start();