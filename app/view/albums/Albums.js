Ext.define('CA.view.albums.Albums', {
    extend: 'Ext.panel.Panel',
    xtype: 'albums',

    requires: [
        'CA.view.albums.gridalbum.GridAlbum',
        'CA.view.albums.formaalbum.FormaAlbum'
    ],

    controller: 'albums',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

     bodyStyle: {
         backgroundColor: '#717171'
     },

    items: [
        {
            xtype: 'container',
            width: 800,
            items: [
                {
                    xtype: 'forma-album',
                    reference: 'refformaalbum',
                    listeners: {
                        agregaralbum: 'onAgregarAlbum'
                    }
                },
                {
                    xtype: 'grid-album',
                    reference: 'refgridalbum',
                    listeners: {
                        select: 'onSeleccionAlbum'
                    }
                }]
        }

    ]
});
