// Code your solution here
function findMatching(drivers, driverName) {
    const matched = drivers.filter((element) => element.toLowerCase() === driverName.toLowerCase());
      return matched;
}


function fuzzyMatch(drivers, driverName) {
    return drivers.filter(function (driver) {return driver.toLowerCase().indexOf(driverName.toLowerCase()) === 0;
      })
      
  }



function matchName(drivers, name) {
    return drivers.filter(
      (driver) => driver.name.toLowerCase() === name.toLowerCase()
    );
  }