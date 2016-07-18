Ext.namespace('Zarafa.plugins.comicsansit');

/**
 * @class Zarafa.plugins.comicsansit.ComicSansItPlugin
 * @extends Zarafa.core.ThemePlugin
 *
 */ 
Zarafa.plugins.comicsansit.ComicSansItPlugin  = Ext.extend(Zarafa.core.Plugin, {
     

    initPlugin : function() {
    document.body.className = "comicsansit";
	
	window.onload = (function() {
	
	document.getElementById('zarafa-navigationpanel').className += " comicsansit"

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
