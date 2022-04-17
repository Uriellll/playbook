const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   explorers.forEach( user => console.log(user.name));

   explorers.forEach(user => console.log(user.stack));

   const stacks =explorers.map(user => user.stack);
   console.log(stacks);

   const search = explorers.filter(user => user.stack.includes("js"))
   console.log(search);

   const userfind = explorers.find(user => user.city == "CDMX");
   console.log(userfind);
/*Reduce */
  const explorer = explorers.map(user => user.exercises_completed);
  console.log(explorer);
  const explorerReduce = explorer.reduce((prev,cur) => prev+ cur, 0);
  console.log(explorerReduce);

//Some
console.log(explorers.some(user => user.missions.frontend.exercisesFinished == true));
//Every
console.log(explorers.every(user => user.missions.frontend.isFinished == true));