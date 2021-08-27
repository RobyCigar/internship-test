import React, { useState } from 'react';
import { Input } from 'antd';
import styles from './style.module.css';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import IntlMessages from '../../components/utility/intlMessages';

const { Search } = Input;

const IValidate = {
  isCapital: false,
  isAlphanumerical: false,

}

export default function MainLayout() {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ ticket, setTicket ] = useState("");
  const [ validation, setValidation ] = useState({})

  const handleSubmit = (val) => {
    setTicket(val);
  }

  return (
      <div className={styles.container}>
        <p className={styles.text}>
          <IntlMessages id="main.title" /> 🎫
        </p>
        <Search
          placeholder="Input your code here"
          onSearch={val => console.log(val)}
          style={{ width: 300 }}          
          className={styles.search}
          enterButton="Search"
        />
        <br/>
      </div>
  )
}
