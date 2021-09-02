const superbowlWin = (array) => {
    const check = array.find(element => element.result === "W");
    if (check === undefined) {
      return undefined;
    } else {
      return check.year;
    }
  }