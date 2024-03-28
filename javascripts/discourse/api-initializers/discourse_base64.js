import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  api.addComposerToolbarPopupMenuOption(() => {
    return {
      action: "encode",
      icon: "far-eye-slash",
      label: themePrefix("base64.encode"),
    };
  });

  api.addComposerToolbarPopupMenuOption(() => {
    return {
      action: "decode",
      icon: "far-eye",
      label: themePrefix("base64.decode"),
    };
  });

  api.modifyClass("controller:composer", {
    pluginId: "discourse-base64",

    actions: {
      encode() {
        var input = encodeURI(this.get("toolbarEvent").selected.value);
        var output = btoa(input);
        this.get("toolbarEvent").addText(output);
      },

      decode() {
        var input = this.get("toolbarEvent").selected.value;
        var output = atob(input);
        this.get("toolbarEvent").addText(decodeURI(output));
      },
    },
  });
});
