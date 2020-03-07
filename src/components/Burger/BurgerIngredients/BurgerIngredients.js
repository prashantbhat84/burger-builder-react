import React, { Component } from "react";
import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
class BurgerIngredients extends Component {
  render() {
    let ingredient = null;
    const { type } = this.props;

    switch (type) {
      case "bread-bottom":
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={styles.Meat}></div>;
        break;
      case "salad":
        ingredient = <div className={styles.Salad}></div>;
        break;
      case "cheese":
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case "bacon":
        ingredient = <div className={styles.Bacon}></div>;
        break;

      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}
BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;
