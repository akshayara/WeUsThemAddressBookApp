/**
 * pages.remove
 *
 * Provides functionality for deleting contacts
 */

(function(global) {
    var remove = { el : $('#page-main') };

    remove.onDelete = function() {
        var fname  = remove.el.find('#fld-fname').val(),
            lname  = remove.el.find('#fld-lname').val(),
            email = remove.el.find('#fld-email').val(),
            phone = remove.el.find('#fld-phone').val();
        global.store.removeContact(reglobal.store.ContactInfo(profimg, fname, lname, email, phone));
        global.pages.contacts.refresh();
    };


    remove.el.live('pagecreate', function() {
        remove.el = $(this);
        remove.el.find('#btn-remove-contact').click(remove.onDelete);
    });

    if ( typeof global.pages === 'undefined' ) {
        global.pages = {};
    }

    global.pages.remove = remove;

}(this));

