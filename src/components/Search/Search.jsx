export const searchContact = (data, foundContact) => { 
    // console.log(data);
    return data.filter(contact => contact.name?.toLowerCase().includes(foundContact.toLowerCase()) );
};