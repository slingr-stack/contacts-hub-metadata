/*
 Entity: contacts
WARNING! This file is generated by Slingr. You shouldn't add new functions or delete the functions
manually unless you know what you are doing. To be safe, only modify the scripts inside functions.
*/

function contactsRecordNameScript(record) {
    return record.field('lastName').val() + ', ' + record.field('firstName').val();
}

function fullNameValueCalculation(record, parentField, action) {
    if (app.commons.stringUtils.isNotEmpty(record.field('firstName').val()) && app.commons.stringUtils.isNotEmpty(record.field('lastName').val())) {
        return app.commons.stringUtils.trim(record.field('firstName').val()) + ' ' + app.commons.stringUtils.trim(record.field('lastName').val());
    }
    return null;
}

function notesUserDefaultValue(record, parentField, action) {
    return sys.context.getCurrentUserRecord();
}

function addNoteAction(record, oldRecord, action) {
    record.field('notes').add({
        note: action.field('note').val()
    });
    sys.data.save(record);
}
