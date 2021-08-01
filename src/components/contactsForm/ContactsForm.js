import React, { Component } from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import { onNameCheck } from "../../redux/contacts/contacts-actions";
import { addNewContact } from "../../redux/contacts/contacts-actions";

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
    id: "",
  };

  nameInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
      id: shortid.generate(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    onNameCheck(this.state.name).length >= 1
      ? alert(`Contact with the name ${this.state.name} already exists.`)
      : addNewContact(this.state);
    // this.props.onNameCheck(this.state.name).length >= 1
    //   ? alert(`Contact with the name ${this.state.name} already exists.`)
    //   : this.props.addNewContact(this.state);

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

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newName) => dispatch(addNewContact(newName), onNameCheck(newName)),
});

export default connect(null, mapDispatchToProps)(ContactsForm);
