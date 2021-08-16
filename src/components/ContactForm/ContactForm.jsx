import React, { useState, useCallback, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactFormStyled from "./ContactFormStyled";
import { getContacts } from "../../redux/phoneBook/contacts-selectors";
import { addContact } from "../../redux/phoneBook/contacts-operations";

// fortm with useReducer
const initialState = {
  name: "",
  number: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "name":
      return { ...state, name: payload };
    case "number":
      return { ...state, number: payload };
    case "reset":
      return { ...initialState };
    default:
      throw new Error();
  }
}

const ContactForm = () => {
  const [contactPhone, dispatchContact] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onSubmit = useCallback(
    ({ name, number }) => {
      dispatch(addContact(name, number));
    },
    [dispatch]
  );

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    dispatchContact({ type: name, payload: value });
  };

  const handelFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(contactPhone);
      const existContact = contacts.find(
        (contact) =>
          contact.name.toLowerCase() === contactPhone.name.toLowerCase()
      );
      if (existContact) {
        return alert(`Contact "${contactPhone.name}" already exists`);
      }
      onSubmit(contactPhone);
      dispatchContact({ type: "reset" });
    },
    [contacts, contactPhone, onSubmit]
  );

  return (
    <ContactFormStyled>
      <form className="contacts-form" onSubmit={handelFormSubmit}>
        <label className="form-label">
          Name
          <input
            className="form-input"
            type="text"
            name="name"
            value={contactPhone.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
            required
            onChange={(event) =>
              dispatchContact({ type: "name", payload: event.target.value })
            }
            autoComplete="on"
          />
        </label>
        <label className="form-label">
          Number
          <input
            className="form-input"
            type="tel"
            name="number"
            value={contactPhone.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number can only contains digits (min 8 digits), spaces, dashes, parentheses and can start with +"
            required
            onChange={handelInputChange}
            autoComplete="on"
          />
        </label>
        <button className="addBtn" type="submit">
          Add contact
        </button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;
// !!! and fortm with useReducer

// !!!!fortm with useState

// const ContactForm = () => {
//   const [contactPhone, setContactPhone] = useState(initialState);
//   const dispatch = useDispatch();

//   const contacts = useSelector(getContacts);

//   const onSubmit = useCallback(
//     ({ name, number }) => {
//       dispatch(addContact(name, number));
//     },
//     [dispatch]
//   );

//   const handelInputChange = (event) => {
//     const { name, value } = event.target;
//     setContactPhone((prev) => ({ ...prev, [name]: value }));
//   };

//   const handelFormSubmit = useCallback(
//     (event) => {
//       event.preventDefault();
//       const existContact = contacts.find(
//         (contact) =>
//           contact.name.toLowerCase() === contactPhone.name.toLowerCase()
//       );
//       if (existContact) {
//         return alert(`Contact "${contactPhone.name}" already exists`);
//       }
//       onSubmit(contactPhone);
//       setContactPhone({ name: "", number: "" });
//     },
//     [contacts, contactPhone, onSubmit]
//   );

//   return (
//     <ContactFormStyled>
//       <form className="contacts-form" onSubmit={handelFormSubmit}>
//         <label className="form-label">
//           Name
//           <input
//             className="form-input"
//             type="text"
//             name="name"
//             value={contactPhone.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
//             required
//             onChange={handelInputChange}
//             autoComplete="on"
//           />
//         </label>
//         <label className="form-label">
//           Number
//           <input
//             className="form-input"
//             type="tel"
//             name="number"
//             value={contactPhone.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number can only contains digits (min 8 digits), spaces, dashes, parentheses and can start with +"
//             required
//             onChange={handelInputChange}
//             autoComplete="on"
//           />
//         </label>
//         <button className="addBtn" type="submit">
//           Add contact
//         </button>
//       </form>
//     </ContactFormStyled>
//   );
// };

// export default ContactForm;

// !!!!end fortm with useState

// const [name, setName] = useState("");
// const [number, setNumber] = useState("");
// const handelFormSubmit = useCallback(
//   (event) => {
//     event.preventDefault();
//     const existContact = contacts.find(
//       (contact) =>
//         contact.name.toLowerCase() === contactPhone.name.toLowerCase()
//     );
//     if (existContact) {
//       return alert(`Contact "${contactPhone.name}" already exists`);
//     }
//     onSubmit(name, number);
//     setName("");
//     setNumber("");
//   },
//   [contacts, name, number, onSubmit]
// );
// const handelInputChange = (event) => {
//   const { name, value } = event.target;
//   if (name === "name") setName(value);
//   if (name === "number") setNumber(value);
// };

// import React, { useState, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import ContactFormStyled from "./ContactFormStyled";
// import { getContacts } from "../../redux/phoneBook/contacts-selectors";
// import { addContact } from "../../redux/phoneBook/contacts-operations";

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   nameId = uuidv4();
//   phoneId = uuidv4();

//   handelInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

// handelFormSubmit = (event) => {
//   event.preventDefault();
//   const { name, number } = this.state;
//   const { contacts } = this.props;
//   const existContact = contacts.find(
//     (contact) => contact.name.toLowerCase() === name.toLowerCase()
//   );
//   if (existContact) {
//     return alert(`Contact "${name}" already exists`);
//   }
//   this.props.onSubmit(name, number);
//   this.setState({ name: "", number: "" });
// };

//   render() {
//     return (
//       <ContactFormStyled>
//         <form className="contacts-form" onSubmit={this.handelFormSubmit}>
//           <label className="form-label">
//             Name
//             <input
//               className="form-input"
//               type="text"
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
//               required
//               onChange={this.handelInputChange}
//               autoComplete="off"
//             />
//           </label>
//           <label className="form-label" id={this.phoneId}>
//             Number
//             <input
//               className="form-input"
//               type="tel"
//               name="number"
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number can only contains digits (min 8 digits), spaces, dashes, parentheses and can start with +"
//               required
//               id={this.phoneId}
//               onChange={this.handelInputChange}
//               autoComplete="off"
//             />
//           </label>

//           <button className="addBtn" type="submit">
//             Add contact
//           </button>
//         </form>
//       </ContactFormStyled>
//     );
//   }
// }

// const mapstateToProps = (state) => ({
//   contacts: getContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(mapstateToProps, mapDispatchToProps)(ContactForm);
