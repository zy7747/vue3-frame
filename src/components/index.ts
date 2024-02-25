import SvgIcon from "./SvgIcon/index.vue";

function setupComponents(app: any) {
  app.component("SvgIcon", SvgIcon);

  return app;
}

export default setupComponents;
