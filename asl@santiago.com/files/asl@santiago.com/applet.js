const Applet = imports.ui.applet;
const Util = imports.misc.util;
const GLib = imports.gi.GLib;


//const APPLET_PATH = global.userdatadir + "/applets/" + UUID;
//const ICON = APPLET_PATH + "/icon.png";

function MyApplet(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_name("file-roller");
        //this.set_applet_tooltip(_("Click here to kill a window"));
    },

    /*on_applet_clicked: function() {
        Util.spawn('xkill');
    }*/
};

function main(metadata, orientation, panel_height, instance_id) {
    let myApplet = new MyApplet(metadata, orientation, panel_height, instance_id);
    return myApplet;
}
