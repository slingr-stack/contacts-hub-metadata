/*
 Listener: onAuthorizationDeleted
WARNING! This file is generated by Slingr. You shouldn't add new functions or delete the functions
manually unless you know what you are doing. To be safe, only modify the scripts inside functions.
*/

function actionScript(event, record, oldRecord) {
    sys.internal.oauth.onAuthorizationDeleted(oldRecord);
}
