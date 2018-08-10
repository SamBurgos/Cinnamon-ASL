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
            "Handspeak website",
            "system-search",
            St.IconType.SYMBOLIC
        );
        menuitem.connect("activate", () => {
            //Main.notify("Abecedario", "Abecedario message body.");
            Util.spawn_async(["xdg-open", website], null);
        });
        this.menu.addMenuItem(menuitem);

        //Submenu 1: Abecedario ASL
        let subMenu1 = new PopupMenu.PopupSubMenuMenuItem("Abecedario");
        // Add sub-menu to applet menu
        this.menu.addMenuItem(subMenu1);

        // First sub-menu item.
        subMenu1.menu.addAction("Do something", () => {
            //global.reexec_self();
            Main.notify("Title", "Letra A en ASL");
        });

        // Second sub-menu item.
        subMenu1.menu.addAction("Do something else", () => {
            Main.notify("Title", "Letra B en ASL");
        });
        this.menu.addMenuItem(menuitem);

        // Third sub-menu item
        menuitem = new PopupMenu.PopupIconMenuItem("Colores", "send-to", St.IconType.SYMBOLIC);
        subMenu1.menu.addMenuItem(menuitem);


        // Fourth sub-menu item.
        subMenu1.menu.addAction("Do something else", () => {
            Main.notify("Title", "Letra B en ASL");
        });
        this.menu.addMenuItem(menuitem);
        //Fin de submenu 1

        //Submenu 2: Colores ASL
        let subMenu2 = new PopupMenu.PopupSubMenuMenuItem("Colores");
        // Add sub-menu to applet menu
        this.menu.addMenuItem(subMenu2);

        // First sub-menu item.
        subMenu2.menu.addAction("Restart Cinnamon", () => {
            global.reexec_self();
        });

        // Second sub-menu item.
        subMenu2.menu.addAction("Do whatever", () => {
            Main.notify("Title", "Message body.");
        });
        this.menu.addMenuItem(menuitem);

        // Third sub-menu item
        menuitem = new PopupMenu.PopupIconMenuItem("Colores", "send-to", St.IconType.SYMBOLIC);
        subMenu2.menu.addMenuItem(menuitem);
        //Fin de submenu 2

        //Submenu 3: Abecedario ASL
        let subMenu3 = new PopupMenu.PopupSubMenuMenuItem("Familia y miembros");
        // Add sub-menu to applet menu
        this.menu.addMenuItem(subMenu3);

        // First sub-menu item.
        subMenu3.menu.addAction("Restart Cinnamon", () => {
            global.reexec_self();
        });

        // Second sub-menu item.
        subMenu3.menu.addAction("Do whatever", () => {
            Main.notify("Title", "Message body.");
        });
        this.menu.addMenuItem(menuitem);

        // Third sub-menu item
        menuitem = new PopupMenu.PopupIconMenuItem("Colores", "send-to", St.IconType.SYMBOLIC);
        subMenu3.menu.addMenuItem(menuitem);
        //Fin de submenu 3

        menuitem = new PopupMenu.PopupIconMenuItem("Youtube", "video-x-generic", St.IconType.SYMBOLIC);
        menuitem.connect('activate', () => {
            Util.spawn_async(["xdg-open", "https://www.youtube.com"], null);
        });
        this.menu.addMenuItem(menuitem);


    },

    on_applet_clicked: function(event) {
        this.menu.toggle();
    }
};

function main(metadata, orientation, panelHeight, instance_id) {
    return new MyApplet(metadata, orientation, panelHeight, instance_id);
}