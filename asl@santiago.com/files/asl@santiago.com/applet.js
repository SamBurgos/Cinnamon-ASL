const Applet = imports.ui.applet;
const Util = imports.misc.util;
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;
const Settings = imports.ui.settings;

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
            //********************************************************
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new Applet.AppletPopupMenu(this, orientation);
            this.menuManager.addMenu(this.menu);
            this._contentSection = new PopupMenu.PopupMenuSection();
            this.menu.addMenuItem(this._contentSection)
            //********************************************************

            //This function creates the options to show on the applet
            this.populate_menu();
        } catch (e) {
            global.logError(e);
        }

    },

    populate_menu: function() {

            //Submenú 1: Abecedario ASL
            //***********************************************************************************************
            this.AbecedarioASLItem = new PopupMenu.PopupSubMenuMenuItem(_("Abecedario"));

            //Item 1 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra A", () => {
            Main.notify("Title", "Letra A en ASL");
            });

            //Item 2 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra B", () => {
            Main.notify("Title", "Letra B en ASL");
            });

            //Item 3 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra C", () => {
            Main.notify("Title", "Letra C en ASL");
            });

            //Item 4 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra D", () => {
            Main.notify("Title", "Letra D en ASL");
            });

            //Item 5 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra E", () => {
            Main.notify("Title", "Letra E en ASL");
            });

            //Item 6 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra F", () => {
            Main.notify("Title", "Letra F en ASL");
            });

            //Item 7 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra G", () => {
            Main.notify("Title", "Letra G en ASL");
            });

            //Item 8 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra H", () => {
            Main.notify("Title", "Letra H en ASL");
            });

            //Item 9 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra I", () => {
            Main.notify("Title", "Letra I en ASL");
            });

            //Item 10 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra J", () => {
            Main.notify("Title", "Letra J en ASL");
            });

            //Item 11 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra K", () => {
            Main.notify("Title", "Letra K en ASL");
            });

            //Item 12 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra L", () => {
            Main.notify("Title", "Letra L en ASL");
            });

            //Item 13 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra M", () => {
            Main.notify("Title", "Letra M en ASL");
            });

            //Item 14 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra N", () => {
            Main.notify("Title", "Letra N en ASL");
            });

            //Item 15 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra O", () => {
            Main.notify("Title", "Letra O en ASL");
            });

            //Item 16 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra P", () => {
            Main.notify("Title", "Letra P en ASL");
            });

            //Item 17 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra Q", () => {
            Main.notify("Title", "Letra Q en ASL");
            });

            //Item 18 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra R", () => {
            Main.notify("Title", "Letra R en ASL");
            });

            //Item 19 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra S", () => {
            Main.notify("Title", "Letra S en ASL");
            });

            //Item 20 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra T", () => {
            Main.notify("Title", "Letra T en ASL");
            });

            //Item 21 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra U", () => {
            Main.notify("Title", "Letra U en ASL");
            });

            //Item 22 Submenu 11
            this.AbecedarioASLItem.menu.addAction("Letra V", () => {
            Main.notify("Title", "Letra V en ASL");
            });

            //Item 23 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra W", () => {
            Main.notify("Title", "Letra W en ASL");
            });

            //Item 24 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra X", () => {
            Main.notify("Title", "Letra X en ASL");
            });

            //Item 25 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra Y", () => {
            Main.notify("Title", "Letra Y en ASL");
            });

            //Item 26 Submenu 1
            this.AbecedarioASLItem.menu.addAction("Letra Z", () => {
            Main.notify("Title", "Letra Z en ASL");
            });

            this.menu.addMenuItem(this.AbecedarioASLItem); //Add the menu with the items created
            //***********************************************************************************************

            //Submenú 2: Números cardinales en ASL
            //***********************************************************************************************
            this.NumCardinalesASLItem = new PopupMenu.PopupSubMenuMenuItem(_("Números cardinales"));

            //Item 1 Submenu 2
            this.NumCardinalesASLItem.menu.addAction("Número 1", () => {
            Main.notify("Title", "Número 1 en ASL");
            });

            //Item 2 Submenu 2
            this.NumCardinalesASLItem.menu.addAction("Número 2", () => {
            Main.notify("Title", "Número 2 en ASL");
            });

            //Item 3 Submenu 2
            this.NumCardinalesASLItem.menu.addAction("Número 3", () => {
            Main.notify("Title", "Número 3 en ASL");
            });

            

            this.menu.addMenuItem(this.NumCardinalesASLItem); //Add the menu with the items created
            //***********************************************************************************************

            //Submenú 3: Números ordinales en ASL
            //***********************************************************************************************
            this.NumOrdinalesASLItem = new PopupMenu.PopupSubMenuMenuItem(_("Números ordinales"));

            //Item 1 Submenu 3
            this.NumOrdinalesASLItem.menu.addAction("Número 1", () => {
            Main.notify("Title", "Número 1 en ASL");
            });

            //Item 2 Submenu 3
            this.NumOrdinalesASLItem.menu.addAction("Número 2", () => {
            Main.notify("Title", "Número 2 en ASL");
            });

            //Item 3 Submenu 3
            this.NumOrdinalesASLItem.menu.addAction("Número 3", () => {
            Main.notify("Title", "Número 3 en ASL");
            });

            

            this.menu.addMenuItem(this.NumOrdinalesASLItem); //Add the menu with the items created
            //***********************************************************************************************            

            //Submenú 4: Vestimenta en ASL
            //***********************************************************************************************
            this.VestimentaASLItem = new PopupMenu.PopupSubMenuMenuItem(_("Vestimenta"));
            //this.

            //Item 1 Submenu 3
            this.VestimentaASLItem.menu.addAction("Camisa", () => {
            Main.notify("Title", "Número 1 en ASL");
            });

            //Item 2 Submenu 3
            this.VestimentaASLItem.menu.addAction("Blusa", () => {
            Main.notify("Title", "Número 2 en ASL");
            });

            //Item 3 Submenu 3
            this.VestimentaASLItem.menu.addAction("Pantalón", () => {
            Main.notify("Title", "Número 3 en ASL");
            });

            

            this.menu.addMenuItem(this.VestimentaASLItem); //Add the menu with the items created
            //***********************************************************************************************

            //Submenú Nth: Miscelánea; palabras que no tengan categoría definida, mas de una categoría
            //o que se manejen de manera diferente 
            //***********************************************************************************************
            this.RandomASLItem = new PopupMenu.PopupSubMenuMenuItem(_("Miscelánea"));
            

            this.RandomASLItem.menu.addAction("Camisa", () => {
            Main.notify("Title", "Número 1 en ASL");
            });

            this.RandomASLItem.menu.addAction("Blusa", () => {
            Main.notify("Title", "Número 2 en ASL");
            });

            this.RandomASLItem.menu.addAction("Pantalón", () => {
            Main.notify("Title", "Número 3 en ASL");
            });

            

            this.menu.addMenuItem(this.RandomASLItem); //Add the menu with the items created
            //***********************************************************************************************

            //Access this website to check more vocabulary
            let websiteASL = new PopupMenu.PopupIconMenuItem(
                "Check more vocabulary",
                "starred",
                St.IconType.SYMBOLIC
                );

            websiteASL.connect("activate", () => {
                Util.spawn_async(["xdg-open", website], null);
            });

            this.menu.addMenuItem(websiteASL);




    },

    on_applet_clicked: function(event) {
        this.menu.toggle();
    }
};

function main(metadata, orientation, panelHeight, instance_id) {
    return new MyApplet(metadata, orientation, panelHeight, instance_id);
}
