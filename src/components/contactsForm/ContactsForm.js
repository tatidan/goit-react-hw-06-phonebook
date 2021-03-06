import React, { Component } from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import { addNewContact } from "../../redux/contacts/contacts-actions";

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.contacts.contacts.find(
      (contact) => contact.name === this.state.name
    )
      ? alert(`Contact with the name ${this.state.name} already exists.`)
      : this.props.addNewContact({ ...this.state, id: shortid.generate() });

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="formLabel">
          Name
          <input
            className="nameInput"
            type="text"
            name="name"
            value={this.state.name}
            id={this.id}
            onChange={this.handleChange}
            placeholder="enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className="formLabel">
          Phone number
          <input
            className="phoneInput"
            type="text"
            name="number"
            placeholder="enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className="submitBtn">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  addNewContact: (newName) => dispatch(addNewContact(newName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
