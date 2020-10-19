(function(global) {

    var store = { contacts : [] };

    store.ContactInfo = function(profimg, fname, lname, email, phone) {
        return { profimg: profimg, fname : fname, lname : lname, email : email, phone : phone}
    };

    store.addContact = function(contact) {
        store.contacts.push(contact);
    };

    store.removeContact = function(contact) {
        for (var i=0; i < store.contacts.length; ++i ) {
            if ( store.contacts[i].phone === contact.phone ) {
                // found the contact
                store.contacts.splice(i);
                break;
            }
        }
    };
    
    store.getContacts = function() {
        return store.contacts;
    };
    global.store = store;
}(this));
