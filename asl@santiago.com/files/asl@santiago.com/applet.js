const Applet = imports.ui.applet;
const Util = imports.misc.util;
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

const website = "https://www.handspeak.com/";

function MyApplet() {
    this._init.apply(this, arguments);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(metadata, orientation, panelHeight, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panelHeight, instance_id);

        try {
            this.set_applet_icon_path(metadata.path + "/icon.png");
            this.set_applet_tooltip(_("American Sign Language"));

            //Initializing options on the Popup menu
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new Applet.AppletPopupMenu(this, orientation);
            this.menuManager.addMenu(this.menu);

            this.populate_menu();
        } catch (e) {
            global.logError(e);
        }

    },

    populate_menu: function() {
        //Adding items to the Popup Menu
        let menuitem = new PopupMenu.PopupIconMenuItem(
            "Abecedario",
            "send-to",
            St.IconType.SYMBOLIC
        );
        menuitem.connect("activate", () => {
            Main.notify("Abecedario", "Abecedario message body.");
        });
        this.menu.addMenuItem(menuitem);

        menuitem = new PopupMenu.PopupIconMenuItem("Colores", "send-to", St.IconType.SYMBOLIC);
        menuitem.connect('activate', () => {
            Util.spawn_async(["xdg-open", "firefox", website], null);
        });
        this.menu.addMenuItem(menuitem);

        let subMenu = new PopupMenu.PopupSubMenuMenuItem("Troubleshoot");
        // Add sub-menu to applet menu
        this.menu.addMenuItem(subMenu);

        // First sub-menu item.
        subMenu.menu.addAction("Restart Cinnamon", () => {
            global.reexec_self();
        });

        // Second sub-menu item.
        subMenu.menu.addAction("Do whatever", () => {
            Main.notify("Title", "Message body.");
        });
        this.menu.addMenuItem(menuitem);

        // Third sub-menu item
        menuitem = new PopupMenu.PopupIconMenuItem("Colores", "send-to", St.IconType.SYMBOLIC);
        subMenu.menu.addMenuItem(menuitem);
    },

    on_applet_clicked: function(event) {
        this.menu.toggle();
        //Util.spawnCommandLine("xdg-open " + web);
    }
};

function main(metadata, orientation, panelHeight, instance_id) {
    return new MyApplet(metadata, orientation, panelHeight, instance_id);
}