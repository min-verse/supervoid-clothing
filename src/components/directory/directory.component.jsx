import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = (props) => {
    const {categories} = props;
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return (<CategoryItem 
                key={category.id} 
                title={category.title} 
                imageUrl={category.imageUrl} />);
            })}
        </div>
    );
}

export default Directory;