import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const list = content.split('\r\n').slice(1, -1).map(cityInfo => cityInfo.split(','));
  const info = list.map(eachCity =>
    ({
      Date: eachCity[0],
      MaxTemp: eachCity[1],
      MinTemp: eachCity[2],
      Humidity: eachCity[3],
      Pressure: eachCity[4],
      WindSpeed: eachCity[5],
      WindDirection: eachCity[6],
      City: eachCity[7],
      State: eachCity[8],
      TimeZone: eachCity[9],
    }));
  
  // Step 1
  const total = info.length;
  console.log(`Count: ${total}`);

  // Step 2
  const cities = info.map(( { City } ) => City);
  const sortedCities = _.uniq(cities).sort().join(', ');
  console.log(`Cities: ${sortedCities}`);
  
  // Step 3
  const humidity = info.map(( { Humidity } ) => Humidity);
  const sortedHumidity = humidity.sort();
  const MinHumidity = sortedHumidity.at(0);
  const MaxHumidity = sortedHumidity.at(-1);
  console.log(`Humidity: Min: ${MinHumidity}, Max: ${MaxHumidity}`);

  // Step 4
  const MaxTemperatures = info.map(( { MaxTemp } ) => MaxTemp);
  const theMaxTemp = MaxTemperatures.sort().at(-1);
  const searchedInfo = info.find(eachCity => eachCity.MaxTemp === theMaxTemp);
  console.log(`HottestDay: ${searchedInfo.Date} ${searchedInfo.City}`);

  // Step 5
  const dates = info.map(( { Date } ) => Date);
  const daysCount = _.uniq(dates).length;

  const uniqCities = _.uniq(cities).sort();
  const groupedCities = uniqCities.map(eachCity => info.filter(object => object.City === eachCity));
  const sumOfMaxTemps = groupedCities.map(eachCity => eachCity.reduce((total, city) => total + Number(city.MaxTemp), 0));
  const avereageMaxTemps = sumOfMaxTemps.map(eachMaxTemp => eachMaxTemp / daysCount);
  const highestAverageTemp = Math.max(...avereageMaxTemps);
  const hottestCity = uniqCities.at(avereageMaxTemps.indexOf(highestAverageTemp));
  console.log(`HottestCity: ${hottestCity}`);
  // END
}
// test new wsl