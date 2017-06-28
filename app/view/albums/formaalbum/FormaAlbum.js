Ext.define('CA.view.albums.formaalbum.FormaAlbum', {
  extend: 'Ext.form.Panel',
  xtype: 'forma-album',

  title: 'Informacion de album',

  items: [
    {
      xtype: 'container',
      layout: 'anchor',
      padding: 20,
      items: [
        {
          xtype: 'textfield',
          fieldLabel: 'Artista',
          anchor: '97%',
          allowBlank: false,
          name: 'artista'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Album',
          anchor: '97%',
          allowBlank: false,
          name: 'album'
        },
        {
          xtype: 'combobox',
          fieldLabel: 'Genero',
          queryMode: 'local',
          anchor: '97%',
          allowBlank: false,
          editable: false,
          name: 'genero',
          store: {
            proxy: {
              type: 'ajax',
              url: 'app/json/generos.json',
              reader: {
                type: 'json',
                rootProperty: 'generos'
              }
            },
            autoLoad: true
          },
          valueField: 'idGenero',
          displayField: 'genero',
          listeners: {
            'select': function () {
              //Ext.MessageBox.alert('Aviso', 'Seleccionaste ' + this.getRawValue());
            }
          }
        },
        {
          xtype: 'textfield',
          anchor: '97%',
          fieldLabel: 'Disquera',
          allowBlank: false,
          name: 'disquera'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Productor',
          anchor: '97%',
          allowBlank: false,
          name: 'productor'
        },
        {
          xtype: 'container',
          layout: 'hbox',
          padding: '10 0 0 0',
          items: [
            {
              xtype: 'button',
              text: 'Limpiar Campos',
              margin: '0 20 0 0',
              handler: function () {
                var boton = this;
                var panel = boton.up('panel');
                var forma = panel.getForm();
                forma.reset();
              }
            },
            {
              xtype: 'button',
              text: 'Agregar Artista',
              handler: function () {
                var boton = this;
                var panel = boton.up('panel');
                var forma = panel.getForm();
                if (forma.isValid()) {
                  var valores = forma.getValues();
                  panel.fireEvent('agregaralbum', valores);
                } else {
                  Ext.MessageBox.alert('Aviso', 'Favor de capturar los campos requeridos.');
                }
              }
            }]
        }

      ]

    }

  ]

});

