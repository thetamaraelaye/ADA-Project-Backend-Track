/**Task breakdown

1. Separately, print out the names of each rover to the console
2.  Separately, print out the first objective of each rover to the console
3. Print out the 5th element in the second object's payload array 
4. Write a function that prints out the LAST element in the objectives array for each one of the three rovers 
5. Push your code to github and follow git convention 

 */

let marsRovers = [
    {
      name: 'Spirit',
      missionStart: 'January 4, 2004',
      plannedMissionLength: '90 sols',
      finalCommDate: 'March 22, 2010',
      payload: ['panoramic camera', 'navigation camera', 'thermal spectrometer', 'x-ray spectrometer', 'magnets', 'microscopic imager', 'rock abrasion tool'],
      objectives: [
        'search soil and rocks for evidence of past water activity',
        'survey geology at landing site',
        'survey geologic activity, including erosion, water activity, volcanism at landing site',
        'search for iron and other deposits of the type formed in water'
      ]
    },
    {
      name: 'Opportunity',
      missionStart: 'January 25, 2004',
      plannedMissionLength: '90 sols',
      finalCommDate: 'June 10, 2018',
      payload: ['panoramic camera', 'navigation camera', 'thermal spectrometer', 'x-ray spectrometer', 'magnets', 'microscopic imager', 'rock abrasion tool'],
      objectives: [
        'search soil and rocks for evidence of past water activity',
        'survey geology at landing site',
        'survey geologic activity, including erosion, water activity, volcanism at landing site',
        'search for iron and other deposits of the type formed in water'
      ]
    },
    {
      name: 'Curiosity',
      missionStart: 'August 6, 2012',
      plannedMissionLength: '2 years',
      finalCommDate: null,
      payload: ['mast camera rig', 'laser-induced breakdown spectroscope', 'remote micro-imaging telescope', 'navigation cameras', 'humidity, pressure, temperatures, wind speeds, and ultraviolet radiation meterological sensor array', 'hazard avoidance cameras', 'x-ray spectrometer', 'x-ray powder and flourescence spectrometer', 'quadrupole mass spectrometer', 'gas chromatograph', 'tunable laser spectrometer', 'dust removal tool', 'radiation assessment detector', 'neutron detector', 'robotic arm'],
      objectives: [
        'search for and analyze organic compounds',
        'identify features that may be the result of biological processes',
        'investigate the chemical, isotopic, and mineralogical composition of the surface and near-surface materials',
        'assess timescale of atmospheric processes',
        'analyze current state of water and carbon dioxide cycle',
        'survey broad-spectrum planetary surface and near-surface radiation'
      ]
    }
  ]

console.log(" ");
console.log("Solution to Task 1");
//The array is made up of objects. I used a for each function to get the name of each element in the array
//Each element in array is an object
//The forEach method allows us run the same function on each element in marsRovers array


marsRovers.forEach((object, index) => {
    //The index and name of each object in the array was printed on the console
     console.log(index, object.name)
   });

// console.log(roverOne);

console.log(" ");
console.log("Solution to Task 2");
//Print first objective of each rover

//Two arguments will be printed
//name of rover and its first objective
marsRovers.forEach((object) => {
    console.log(object.name, "-- The first objective is to " + object.objectives[0])
});

console.log(" ");
console.log("Solution to Task 3");

//Print out the 5th element in the second object's payload array
//index of 2nd object = 1; index of 5th element = 4
// marsRover[1] -- index of the 2nd object; payload[4] -- the index of payloads' 5th element
// A new variable was created to store the requested information
let fifthElement = marsRovers[1].payload[4];
console.log("The 5th element in the second object's payload array is ", fifthElement);

console.log(" ");
console.log("Solution to Task 4");
//Write a function that prints out the LAST element in the objectives array for each one of the three rovers 

//Due to the disparity of the number of elements in the objectives of each element
//I used the 'object.objectives.length - 1' -- to get the index of the object.objectives
//I printed the object.name for easy identification of each object's objective
marsRovers.forEach((object) => {
    console.log(object.name, "-- The LAST element in the objectives array for this rover is to " + object.objectives[object.objectives.length -1]);
})

//Thank you for the opportunity to learn and grow

console.log(" ");
console.log("Thank you")