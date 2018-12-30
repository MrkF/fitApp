import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Form.module.css'


const InputGroup = ({ onChange }) => {
  return (
    <div>
      <input
        className={styles.form}
        type="text"
        name="product"
        placeholder="product"
        onChange={onChange}
      />

      <input
        className={styles.form}
        type="text"
        name="weight"
        placeholder="gram"
      />
    </div>
  );
};

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      groupCount: 1,
      product: [],
      weight: []
    };
  }

  addGroup() {
    this.setState((state, props) => {
      return { groupCount: ++state.groupCount };
    });
  }

  render() {

    const { groupCount } = this.state;
    const groups = [...Array(groupCount)].map((el, index) => {
      const isPenultGroup = index === groupCount - 1;
      const isOne = groupCount === 1;

      const onChange = isPenultGroup || isOne ? this.addGroup.bind(this) : null;
      return <InputGroup onChange={onChange}/>;
    });

    return groups.map(group => group);
  }
}

