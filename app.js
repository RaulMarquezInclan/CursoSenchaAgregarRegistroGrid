/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CA.Application',

    name: 'CA',

    requires: [
        // This will automatically load all classes in the CA namespace
        // so that application classes do not need to require each other.
        'CA.*'
    ],

    // The name of the initial view to create.
    mainView: 'CA.view.albums.Albums'
});
