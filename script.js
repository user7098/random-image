class RandomImage {
    selectors = {
        button: 'data-button-element',
        image: 'data-image-element'
    }

    imageElement = document.querySelector(`[${this.selectors.image}]`)

    constructor(api) {
        this.api = api
        this.bindEvents()
    }

    setRandomImage() {
        fetch(this.api)
            .then((res) => {
                this.imageElement.src = res.url
            })
    }

    checkElement(event) {
        const { target } = event
        const isRandomButton = target.hasAttribute(this.selectors.button)

        if (!isRandomButton) {
            return
        }

        this.setRandomImage()
    }

    bindEvents() {
        document.addEventListener('click', (event) => this.checkElement(event))
        window.addEventListener('load', () => this.setRandomImage())
    }
}

new RandomImage('https://picsum.photos/700/400?random=1')