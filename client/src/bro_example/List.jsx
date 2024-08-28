import PropTypes from "prop-types";

function List(props) {

    const category = props.category;

    const itemList = props.items;


    itemList.sort((a,b) => a.name.localeCompare(b.name));

    const lowCalFruits = itemList.filter(itemList => itemList.calories < 100);

    // const listItems = fruits.map(fruits => <li key={fruits.id}>
    //                             {fruits.name}: &nbsp;
    //                             {fruits.calories}</li>);
    const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
                {lowCalFruits.name}: &nbsp;
                {lowCalFruits.calories}</li>);
    return(<>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
    </>);
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number,
        }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List