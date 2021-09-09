const Product = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        discription: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        rating: "4.05",
        price: 40.50,
        img: "image/9.jpg",
        category: "clothing",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        discription: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        rating: "4.05",
        price: 549.50,
        img: "image/1.jpg",
        category: "dell",
    },
    {
        userId: 1,
        id: 3,
        title: "quasi exercitation repellant qui pisa sit aut",
        discription: "et gusto sed quo inure voluptuary ocreate omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        rating: "4.05",
        price: 490.50,
        img: "image/4.jpg",
        category: "dell",
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        discription: "ullam reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        rating: "4.05",
        price: 609.50,
        img: "image/6.jpg",
        category: "accessories",
    },
    {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        discription: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        rating: "4.05",
        price: 549.50,
        img: "image/5.jpg",
        category: "dell",
    },
    {
        userId: 1,
        id: 6,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        discription: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        rating: "4.05",
        price: 480.50,
        img: "image/2.jpg",
        category: "accessories",
    },
    {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        discription: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
        rating: "4.05",
        price: 409.50,
        img: "image/7.jpg",
        category: "accessories",
    },
    {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        discription: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        rating: "4.05",
        price: 490.50,
        img: "image/10.jpg",
        category: "clothing",
    },
    {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        discription: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
        rating: "4.05",
        price: 549.50,
        img: "image/9.jpg",
        category: "clothing",
    },
    {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        discription: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
        rating: "4.05",
        price: 95.40,
        img: "image/10.jpg",
        category: "clothing",
    },
    {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        discription: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
        rating: "4.05",
        price: 40.00,
        img: "image/11.jpg",
        category: "clothing",
    },
    {
        userId: 2,
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        discription: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
        rating: "4.05",
        price: 58.50,
        img: "image/12.jpg",
        category: "clothing",
    },
    // {
    //     userId: 2,
    //     id: 14,
    //     title: "voluptatem eligendi optio",
    //     discription: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    //     rating: "4.05",
    //     price: 80.50,
    //     img: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNzRmNTc0NDIyNmQwLTIxLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ImF1dG8iLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=",
    //     category: "accessories",
    // }
]
export default Product;