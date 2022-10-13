import Router from "next/router";
import NProgress from "nprogress";
import { debounce } from "lodash";

const TopProgress = () => {
  const delay = 250;
  NProgress.configure({ showSpinner: false });

  const start = debounce(NProgress.start, delay);
  const end = () => {
    start.cancel();
    NProgress.done();
  };
  Router.events.on("routeChangeStart", start);
  Router.events.on("routeChangeComplete", end);
  Router.events.on("routeChangeError", end);
  return null;
};

export default TopProgress;
