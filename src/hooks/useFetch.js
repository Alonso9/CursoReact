import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    haserror: null,
  });
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(url);
    const data = await resp.json();

    // setTimeout(
    //   function () {
    //     //Start the timer
    //     setState({
    //       data,
    //       isLoading: false,
    //       haserror: null,
    //     });
    //   }.bind(this),
    //   1000
    // );
    setState({
      data,
      isLoading: false,
      haserror: null,
    });
    // console.log(data);
  };
  // UseEffect que cada vez que el url cambie, se dispare la peticion
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    haserror: state.haserror,
  };
};
