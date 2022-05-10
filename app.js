const timer = () => {
    const countDate = new Date('September 20, 2021 09:00:00').getTime();
    const now = new Date().getTime();
    const gap = now - countDate;

    const day = 8.64e+7;
    const month = 2.628e+9;

    const textMonth = Math.floor(gap / month);
    const textDay = Math.floor((gap % month) / day);

    console.log(textMonth, textDay)
};

timer();