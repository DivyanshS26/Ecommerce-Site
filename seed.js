const Item = require('./models/items');

const items = [
    {
        name: 'Iphone 10',
        price: 80000,
        desc: "The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the 13th generation, lower-priced iPhone",
        img: "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'MacBook pro',
        price: 150000,
        desc: "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
        img: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Trimmer',
        price: 1500,
        desc: "Whether you want to trim your hair, maintain your beard style or groom unwanted hair, trimmers are a good option to keep yourself well-groomed.",
        img: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Titan Watch',
        price: 3500,
        desc: "Titan is the largest and most trusted watch brand in India. Buy 100% genuine watches for Men and Women. Also get latest couple watches & kids watches",
        img: "https://images.unsplash.com/photo-1610006329898-2a4f12019450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGl0YW4lMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'JBL Speakers',
        price: 6000,
        desc: "Premium speakers from JBL such as wireless bluetooth speakers, Android & iOS headphones, soundbars, subwoofers, home theater systems, computer speakers",
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amJsJTIwc3BlYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Nike Shoes',
        price: 8000,
        desc: "Nike Shoes - Shop for casual shoes & sports shoes for men, women & kids from Nike online at Myntra. Choose from a wide range of Nike shoes in different ",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Samsung QLED TV',
        price: 90000,
        desc: "Samsung QLED TVs are latest Quantum Dot TV with best picture display quality with elegant design. Select & Buy from complete range at Samsung online ",
        img: "https://media.istockphoto.com/photos/smart-tv-picture-id692930402?b=1&k=20&m=692930402&s=170667a&w=0&h=gklcV3LJR0uKj9NCpzxDseyt1qGHapDwEP_PYiRkNa8="
    }
];


const SeedDB = async () => {
    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log('Db seeded');
}

module.exports = SeedDB;