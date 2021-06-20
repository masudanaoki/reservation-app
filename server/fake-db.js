const Product = require('./model/Product')
class FakeDb {
    constructor(){
        this.products = [
            {
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                coverImage: './assets/img/phone-cover.jpg',
                heading: 'A large phone with one of the best screens Phone XL',
            },
            {
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                coverImage: './assets/img/phone-cover.jpg',
                heading: 'A great phone with one of the best cameras Phone Mini',
            },
            {
                name: 'Phone Standard',
                price: 299,
                description: '',
                coverImage: './assets/img/phone-cover.jpg',
                heading: 'A great phone with one of the best cameras Phone Standard',
            },
            {
                name: 'Phone Special',
                price: 999,
                description: '',
                coverImage: './assets/img/phone-cover.jpg',
                heading: 'A great phone with one of the best cameras Phone Special',
            }
        ]
    }
    async initDb(){
        await this.cleanDb()
        this.pushProductDb()
    }
    async cleanDb(){
        await Product.deleteMany({})
    }
    pushProductDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }
    seeDb() {
        this.pushProductDb()
    }
}
module.exports = FakeDb