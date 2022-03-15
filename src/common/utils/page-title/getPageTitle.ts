import { routes } from '../../routes/routes';

export const getPageTitle = () => {
  let title = '';

  routes?.map((route) => route?.path === location?.pathname && (title = route?.title));

  return title;
};
