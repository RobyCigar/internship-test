import React, { useState } from 'react';
import { connect } from "react-redux";
import { Input } from 'antd';
import styles from './style.module.css';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import IntlMessages from '../../components/utility/intlMessages';
import ticketActions from '../../redux/ticket/action';

const { 
  getBooking, 
  updateBooking 
} = ticketActions 

const { Search } = Input;

function MainLayout({ getBooking, updateBooking }) {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ ticket, setTicket ] = useState("");
  const [ alert, setAlert ] = useState(false)


  // Validate the input
  const handleSearch = (val) => {
    if (!val.match(/^[0-9A-Z]+$/)) {
      setAlert(true)
      return
    }
    setAlert(false)
    setTicket(val);
    getBooking(val);
  }

  return (
      <div className={styles.container}>
        <p className={styles.text}>
          <IntlMessages id="main.title" /> 🎫
        </p>
        <Search
          placeholder="Input your code here"
          onSearch={handleSearch}
          style={{ width: 300 }}          
          className={styles.search}
          onPressEnter={e => e.preventDefault()}
          enterButton="Search"
        />

        <br/>
        {
          alert ? 
          <p style={{color: 'red'}}>
            * <IntlMessages id="main.validation" />
          </p>
          : null
        }
      </div>
  )
}

function mapStateToProps(state) {
  const { todos, colors } = state.Todos;
  return {
    todos,
    colors
  };
}
export default connect(mapStateToProps, {
  getBooking,
  updateBooking
})(MainLayout);
