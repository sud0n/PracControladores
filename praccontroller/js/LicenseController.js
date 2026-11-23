class LicenseController {
    constructor(licenses) { this.licenses = licenses; }
renderFeatured(count, parent) {
        const featuredLicenses = this.licenses.filter(license => license.featured).slice(0, count);
        featuredLicenses.forEach(license => license.render(parent));
    }
renderOffers(count, parent) {
        const offerLicenses = this.licenses.filter(license => license.discount > 0).slice(0, count);
        offerLicenses.forEach(license => license.render(parent));
    }
renderLatest(count, parent) {
        const latestLicenses = this.licenses.slice(-count);
        latestLicenses.forEach(license => license.render(parent));
    }
renderAll(count, parent) {
        const allLicenses = this.licenses.slice(0, count);
        allLicenses.forEach(license => license.render(parent));
    }
}
