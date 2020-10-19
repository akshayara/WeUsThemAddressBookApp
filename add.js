/**
 * pages.add
 *
 * Provides the functionality for adding
 */

(function(global) {
    var add = { el : $('#page-add') };
    global.pages.contacts.refresh();
    add.onSave = function() {
        var profimg = add.el.find('#fld-profimg').val(),
            fname  = add.el.find('#fld-fname').val(),
            lname  = add.el.find('#fld-lname').val(),
            email = add.el.find('#fld-email').val(),
            phone = add.el.find('#fld-phone').val();
           

        global.store.addContact(global.store.ContactInfo(profimg, fname, lname, email, phone));
        global.pages.contacts.refresh();
    };


    add.el.live('pagecreate', function() {
        add.el = $(this);
        add.el.find('#btn-save-contact').click(add.onSave);
    });

    if ( typeof global.pages === 'undefined' ) {
        global.pages = {};
    }

    global.pages.add = add;

}(this));

