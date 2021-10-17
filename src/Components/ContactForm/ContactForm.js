import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
class ContactForm extends Component {
  inputName = uuidv4();
  inputNumber = uuidv4();

  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const obj = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addNewContact(obj);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, inputName, handleInputChange, inputNumber } = this;
    const { name, number } = this.state;

    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <span>Name</span>
          <input
            id={inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            id={inputNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="xxx-xx-xx"
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" disabled={!name || !number}>
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
