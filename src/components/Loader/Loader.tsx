import { Circles } from 'react-loader-spinner';

export const Loader = () => (
  <Circles
    height="50"
    width="50"
    color="#000"
    ariaLabel="circles-loading"
    wrapperClass="loading"
    visible={true}
  />
);
