let routes;
let patterns = [];
let destroy = [];
let prevRoute = null;

function onLocationChange(evt) {
  let route = patterns.find(route =>
    document.location.pathname.startsWith(route)
  );

  if (prevRoute && destroy && destroy.length) {
    destroy.forEach(cmp => cmp());
  }

  if (route) {
    destroy = routes[route](document.location);
    prevRoute = route;
  }
}

export function router(routesCfg) {
  routes = routesCfg;
  patterns = Object.keys(routes);

  onLocationChange();
  window.addEventListener("popstate", onLocationChange);
}

export function go(route) {
  history.pushState({ url: route }, "some title", route);
  onLocationChange();
}
