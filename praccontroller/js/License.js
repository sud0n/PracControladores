class License {
    constructor({ id, name, software, version, price, key, featured, discount}) {
        this.id = id;
        this.software = software || name;
        this.version = version;
        this.price = price;
        this.key = key;
        this.featured = featured;
        this.discount = discount;
    }
    render(parent) {
        const licenseElement = document.createElement('div');
        licenseElement.classList.add('license');

        const topLine = document.createElement('div');
        topLine.classList.add('license-topline');

        const version = document.createElement('span');
        version.classList.add('license-version');
        version.textContent = `Version ${this.version}`;
        topLine.appendChild(version);

        if (this.discount > 0) {
            const discount = document.createElement('span');
            discount.classList.add('license-discount');
            discount.textContent = `-${Math.round(this.discount * 100)} %`;
            topLine.appendChild(discount);
        }

        const name = document.createElement('h3');
        name.classList.add('license-name');
        name.textContent = this.software;

        const price = document.createElement('div');
        price.classList.add('license-price');
        const formatPrice = amount => new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);

        const currentPrice = document.createElement('span');
        currentPrice.textContent = formatPrice(this.price * (1 - this.discount));
        price.appendChild(currentPrice);

        if (this.discount > 0) {
            const oldPrice = document.createElement('span');
            oldPrice.classList.add('license-old-price');
            oldPrice.textContent = formatPrice(this.price);
            price.appendChild(oldPrice);
        }

        licenseElement.append(topLine, name, price);
        parent.appendChild(licenseElement);
    }
    buy() {
        
    }
}
