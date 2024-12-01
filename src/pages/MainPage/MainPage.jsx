import React, { useState } from "react";
import "./MainPage.css";
import { AppleSearchBar } from "../../components/AppleSearchBar/AppleSearchBar";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

export const MainPage = () => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const contacts = [
    { id: 1, name: "Eric Elliot", phone: "222-555-8575" },
    { id: 2, name: "Steve Jobs", phone: "220-454-6754" },
    { id: 3, name: "Fred Allen", phone: "210-657-9886" },
    { id: 4, name: "Steve Wozniak", phone: "343-675-8786" },
    { id: 5, name: "Bill Gates", phone: "343-854-9888" },
  ];

  const handleDelete = (id) => {
    console.log(`Delete contact with id: ${id}`);
    // Add logic to remove contact from state or call API
  };

  const handleOpenPopup = () => {
    setIsContactFormVisible(true);
  };

  const handleClosePopup = () => {
    setIsContactFormVisible(false);
  };

  return (
    <div className="mainpage__container">
      <div className="mainpage__header">
        <p className="mainpage__header-title">The Phonebook</p>
        <p className="mainpage__header-logout">Logout</p>
      </div>

      <div className="mainpage__welcome">
        <p className="mainpage__welcome-title">Welcome, Joshua</p>
        <div
          className="mainpage__welcome-add-button"
          onClick={handleOpenPopup}
        >
          + Add Contact
        </div>
      </div>

      <div className="mainpage__searchbar">
        <AppleSearchBar />
      </div>

      <div>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            phone={contact.phone}
            onDelete={() => handleDelete(contact.id)}
          />
        ))}
      </div>

      {isContactFormVisible && <ContactForm isEdit={false} onClose={handleClosePopup} onSubmit={()=>{}}/>}
    </div>
  );
};

export default MainPage;
