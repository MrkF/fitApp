import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Total.module.css'

export default class Total extends Component {

  constructor(props) {
    super(props);
    this.state = {
      proteinAmount: 0,
      carbAmount: 0,
      fatAmount: 0
    };
  }

  calculating() {
    this.setState((state, props) => {
      return { groupCount: ++state.groupCount };
    });
  }

  render() {
    const { proteinAmount } = this.state;
    const { carbAmount } = this.state;
    const { fatAmount } = this.state;

    return (
     <div>
      <div className={styles.Total}>
         <div className={styles.totalField}>
           <div> Protein: { proteinAmount } </div>
           <div> Carb: { carbAmount } </div>
           <div>  Fat: { fatAmount } </div>
        </div>
  </div>
  </div>
    )
  }
}

