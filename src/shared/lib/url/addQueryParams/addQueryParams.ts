export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
};

/*
 * Функция добавления параметров строки запроса в URL
 * @params params
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
