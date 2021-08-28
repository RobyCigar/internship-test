import React, { useState } from 'react';
import { connect } from "react-redux";
import { Input } from 'antd';
import styles from './style.module.css';
import BookingInfo from "./BookingInfo";
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import IntlMessages from '../../components/utility/intlMessages';
import ticketActions from '../../redux/ticket/action';

const { 
  getBooking, 
  updateBooking 
} = ticketActions 
const { Search } = Input;

function MainLayout({ getBooking, updateBooking, ticketInfo }) {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ alert, setAlert ] = useState(false)


  // Validate the input for only alphanumeric 
  const handleSearch = (val) => {
    if (!val.match(/^[0-9A-Z]+$/)) {
      setAlert(true)
      return
    }
    getBooking(val);
    setIsSubmitted(true);
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>
          <IntlMessages id="main.title" /> 🎫
        </p>
        <Search
          placeholder="Input your code here"
          onSearch={handleSearch}
          style={{ width: 350 }}          
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
        {
          ticketInfo.error ?
          <p style={{color: 'red'}}>
            * {ticketInfo.error}
          </p>
          : null
        }
      </div>
        {/* Display booking info when the ticket is found otherwise return null */}
        {
          ticketInfo.booking_code ?
            <BookingInfo ticketInfo={ticketInfo} updateBooking={updateBooking}/>
          : null
        }
    </>
  )
}

function mapStateToProps(state) {
  return {ticketInfo: state.Tickets};
}
export default connect(mapStateToProps, {
  getBooking,
  updateBooking
})(MainLayout);
