const Applet = imports.ui.applet;
const Util = imports.misc.util;
const GLib = imports.gi.GLib;
const Tooltips = imports.ui.tooltips;
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;
const UUID = "asl@santiago.com";


const APPLET_PATH = global.userdatadir + "/applets/" + UUID;
const ICON = APPLET_PATH + "/icon.png";
const web = "https://www.handspeak.com/";

function MyApplet(metadata, orientation, panelHeight, instance_id) {
    this._init(metadata, orientation, panelHeight, instance_id);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panelHeight, instanceId) {
        Applet.IconApplet.prototype._init.call(this, orientation, panelHeight, instanceId);

        try
        {


          this.set_applet_icon_path(ICON);
          //this.set_applet_tooltip(_("American Sign Language"));

        	//Initializing options on the Popup menu
        	this.menuManager = new PopupMenu.PopupMenuManager(this);
			    this.menu = new Applet.AppletPopupMenu(this, orientation);
			    this.menuManager.addMenu(this.menu);

			    //Adding items to the Popup Menu
			    let item = new PopupMenu.PopupIconMenuItem("Abecedario", "send-to", St.IconType.SYMBOLIC);
			    this.menu.addMenuItem(item);

			    item = new PopupMenu.PopupIconMenuItem("Colores", "send-to", St.IconType.SYMBOLIC);
			    this.menu.addMenuItem(item);

        }

        catch(e)
        {
        	global.logError(e);
        }

    },

    on_applet_clicked: function(event) {
        //this.menu.toggle();
        Util.spawnCommandLine("xdg-open https://www.youtube.com/");
    }
};

function main(metadata, orientation, panelHeight, instance_id) {
    let myApplet = new MyApplet(metadata, orientation, panelHeight, instance_id);
    return myApplet;
}
