const date = {
  formatedDate(date: string, isShowTime = false) {
    if (!date) {
      return '';
    }

    const fillZero = (value: number) => value <= 9 ? `0${value}` : value;

    const parsedDate = new Date(Date.parse(date));

    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();

    const yyyymmdd = `${year}-${fillZero(month)}-${fillZero(day)}`;

    const hour = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const seconds = parsedDate.getSeconds();

    const time = `${fillZero(hour)}:${fillZero(minutes)}:${fillZero(seconds)}`;

    const dateElements = [yyyymmdd];

    if (isShowTime) {
      dateElements.push(time);
    }

    return dateElements.join(' ');
  }
}

export default date;