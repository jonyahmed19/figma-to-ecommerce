export const filterSearch = ({ data, value }) => {
  return data.filter((product) => {
    let title = product?.title.toLowerCase();
    if (title.includes(value.toLowerCase())) {
      return true;
    }
  });
};
