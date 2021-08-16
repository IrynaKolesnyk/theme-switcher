import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/phoneBook/contacts-operations";
import ContactPageStyled from "./ContactPageStyled";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactPageStyled className="phoneBook">
      <h2 className="contactTitle">Phonebook</h2>
      <ContactForm />
      <h2 className="contactListTitle">Contacts</h2>
      <Filter />
      <ContactList />
    </ContactPageStyled>
  );
};

export default ContactsPage;

// import React, { Component } from "react";
// import ContactForm from "../../components/ContactForm/ContactForm";
// import Filter from "../../components/Filter/Filter";
// import ContactList from "../../components/ContactList/ContactList";
// import { connect } from "react-redux";
// import { fetchContacts } from "../../redux/phoneBook/contacts-operations";
// import ContactPageStyled from "./ContactPageStyled";
// class ContactsPage extends Component {
//   state = {};
//   componentDidMount() {
//     this.props.fetchContacts();
//   }
//   render() {
//     return (
// <ContactPageStyled className="phoneBook">
//   <h2 className="contactTitle">Phonebook</h2>
//   <ContactForm />
//   <h2 className="contactListTitle">Contacts</h2>
//   <Filter />
//   <ContactList />
// </ContactPageStyled>
//     );
//   }
// }
// // const mapStateToProps = (state) => ({
// //   contacts: getContacts(state),
// //   isLoadingContacts: getLoading(state),
// //   isError: getErrorContacts(state),
// // });

// const mapDispatchToProps = {
//   fetchContacts: fetchContacts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
