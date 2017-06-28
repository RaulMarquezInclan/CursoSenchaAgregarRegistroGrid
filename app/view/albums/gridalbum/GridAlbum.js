Ext.define('CA.view.albums.gridalbum.GridAlbum', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-album',

    height: 300,
    title: 'Listado de albums',
    scrollable: true,

    columns: [
        {
            width: 240,
            dataIndex: 'artista',
            text: 'Artista'
        },
        {
            width: 180,
            dataIndex: 'album',
            text: 'Album'
        },
        {
            width: 100,
            dataIndex: 'genero',
            text: 'Genero'
        },
        {
            width: 120,
            dataIndex: 'disquera',
            text: 'Disquera'
        },
        {
            width: 120,
            dataIndex: 'productor',
            text: 'Productor'
        }
    ],
    store: {
        proxy: {
            type: 'ajax',
            url: 'app/json/albums.json',
            reader: {
                type: 'json',
                rootProperty: 'artistas'
            }
        },
        autoLoad: true,
        fields: [
            'id',
            'artista',
            'album',
            'genero',
            'disquera',
            'productor'
        ]
    }

});



