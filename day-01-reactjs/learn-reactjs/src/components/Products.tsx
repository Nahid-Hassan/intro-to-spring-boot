const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function Products() {

    const listItems = products.map(product => (
        <li id="{product.id}" style={{ color: product.isFruit ? 'red' : 'green' }}>
            {product.title}
        </li>
    ));

    return (
        <ul>
            {listItems}
        </ul>
    );
}