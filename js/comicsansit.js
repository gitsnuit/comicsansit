Ext.namespace('Zarafa.plugins.comicsansit');

/**
 * @class Zarafa.plugins.comicsansit.ComicSansItPlugin
 * @extends Zarafa.core.Plugin
 *
 */
Zarafa.plugins.comicsansit.ComicSansItPlugin  = Ext.extend(Zarafa.core.Plugin, {
    initPlugin : function() {
      Zarafa.onUIReady(function() {
        document.body.className += " comicsansit";
        container.getNavigationBar().el.addClass('comicsansit');
      })
    }
});

Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'comicsansit',
		displayName : _('Comic Sans It'),
		allowUserDisable : true,
		allowUserVisible : true,
		pluginConstructor : Zarafa.plugins.comicsansit.ComicSansItPlugin
	}));
});
