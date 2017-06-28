Ext.define('CA.view.albums.AlbumsViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.albums',

    onAgregarAlbum(valores) {
        var formaAlbum = this.lookup('refformaalbum');
        var gridAlbum = this.lookup('refgridalbum');
        var gridAlbumStore = gridAlbum.getStore();
        var cmbGenero = formaAlbum.down('combobox');

        valores.genero = cmbGenero.getRawValue();
        gridAlbumStore.add(valores);
        formaAlbum.getForm().reset();        
    },

    onSeleccionAlbum: function(grid, record, index) {
        var formaAlbum = this.lookup('refformaalbum');
        formaAlbum.getForm().setValues(record.data);
    }
});