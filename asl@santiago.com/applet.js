const Applet = imports.ui.applet;
//const PopupMenu = imports.ui.popupMenu;
//const Gio = imports.gi.Gio;
//const St = imports.gi.St;
const Lang = imports.lang;
//const MessageTray = imports.ui.messageTray;
//const Main = imports.ui.main;
//const Pango = imports.gi.Pango;
//const Clutter = imports.gi.Clutter;
//const Tooltips = imports.ui.tooltips;
const Settings = imports.ui.settings;
const GLib = imports.gi.GLib;
//const Gettext = imports.gettext;
const UUID = "asl@santiago.com";

const APPLET_PATH = global.userdatadir + "/applets/" + UUID;
const ICON = APPLET_PATH + "/icon.png";

function MyApplet(orientation) {
    this._init(orientation);
}

function main(metadata, orientation) {
    let myApplet = new MyApplet(orientation);
    return myApplet;
}
