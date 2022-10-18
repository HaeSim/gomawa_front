export const debounce = (func: any, time: number) => {
  let timer: string | number | NodeJS.Timeout;

  return (e: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func(e), time);
  };
};

export const throttle = (func: any, time: number) => {
  let timer: number;
  return (event: any) => {
    if (timer) return;
    timer = setTimeout(
      () => {
        func(event);
        timer = null;
      },
      time,
      event,
    );
  };
};
