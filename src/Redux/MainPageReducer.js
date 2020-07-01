
export let initialState = {
    spacemen: [
        { "id" : 1,
          "name": "Sigmund Jähn",
          "date": 272926800,
          "days": 7, 
          "mission": "Sojus 31 / Sojus 29",
          "isMultiple": false, 
          "show": 1 
        },

        { "id" : 2,
          "name": "Ulf Merbold", 
          "date": 438814800,
          "days": 10,
          "mission": "STS-9", 
          "isMultiple":true,
          "show": 1  
        },

        { "id" : 3,
          "name": "Reinhard Furrer",
          "date": 499467600,
          "days": 7,
          "mission": "STS-61-A (D1)",
          "isMultiple": false,
          "show": 1  
        },

        { "id" : 4,
          "name": "Ernst Messerschmid",
          "date": 499467600,
          "days": 7,
          "mission": "STS-61-A (D1)",
          "isMultiple": false,
          "show": 1  
        },

        { "id" : 5,
          "name": "Klaus-Dietrich Flade",
          "date": 700779600,
          "days": 7, 
          "mission": "Sojus TM-14 / Sojus TM-13",
          "isMultiple": false,
          "show": 1 
         },

        { "id" : 6,
          "name": "Hans Schlegel",
          "date": 735768000,
          "days": 9,
          "mission": "STS-55 (D2)",
          "isMultiple": true,
          "show": 1  
        },

        { "id" : 7,
          "name": "Ulrich Walter",
          "date": 735768000,
          "days": 9,
          "mission": "STS-55 (D2)",
          "isMultiple": false,
          "show": 1 
        },

        { "id" : 8,
          "name": "Thomas Reiter",
          "date": 810072000,
          "days": 179,
          "mission": "Sojus TM-22 / Euromir 95",
          "isMultiple": true,
          "show": 1  
        },

        { "id" : 9,
          "name": "Reinhold Ewald",
          "date": 855522000,
          "days": 19,
          "mission": "Sojus TM-25 / Sojus TM-24",
          "isMultiple": false,
          "show": 1  
        },

        { "id" : 10,
          "name": "Gerhard Thiele",
          "date": 950216400,
          "days": 11,
          "mission": "STS-99",
          "isMultiple": false,
          "show": 1  
        },

        { "id" : 11,
          "name": "Alexander Gerst",
          "date": 1401224400,
          "days": 165,
          "mission": "Sojus TMA-13M / ISS-Expedition 40 /ISS-Expedition 41",
          "isMultiple": false,
          "show": 1  
        }

    ],

    choosen: 0,

    pageSize: 8,

    searchKey: 0,

  };


const CHOOSE = 'CHOOSE';
const DELETEONE = 'DELETEONE';
const ADDONE = 'ADDONE';
const SEARCHONE = 'SEARCHONE';
const RESETSEARCH = 'RESETSEARCH';
const SETSEARCH = 'SETSEARCH';
const DAYFILTER = 'DAYFILTER';

let stateBufer;


const MainPageReducer = (state = initialState, action) => {

    debugger;
    switch (action.type) {

        case CHOOSE: {

          let stateCopy = {...state};
          stateCopy.spacemen = [...state.spacemen];
          stateCopy.choosen = action.choosen;
          return stateCopy;
        }

        case ADDONE: {

          let stateCopy = {...state};
          stateCopy.spacemen = [...state.spacemen];
          let newId = stateCopy.spacemen.length + 1;
          let newMultiple = (action.isMultiple === 'Yes' ? true : false)
          let newOne = {
            "id": newId,
            "name": action.name,
            "date": action.date,
            "days": action.days,
            "mission": action.mission,
            "isMultiple": newMultiple,
            "show": 1  
            
          }
         
          stateCopy.spacemen.push(newOne);
          return stateCopy;
        }

        case DELETEONE: {
          let stateCopy = {...state};
          let newSpacemen = [];
          stateCopy.spacemen.map(s => {
            if (s.id === stateCopy.choosen) {
              s.show =  0;
            }
            newSpacemen.push(s)
          })
          stateCopy.spacemen = newSpacemen;
          return stateCopy;
        }

        case SEARCHONE: {
          stateBufer = {...state};
          let stateCopy = {...state};
          let searchState = [];
          state.spacemen.map(s => {
            if (s.name.includes(action.inputSearch)) 
            {searchState.push(s)}
          })
          
          stateCopy.spacemen = searchState;

          return stateCopy;
        }

        case RESETSEARCH: {

          return stateBufer;

        }

        case SETSEARCH: {
          let stateCopy = {...state};
          stateCopy.searchKey === 0 
          ? stateCopy.searchKey = 1
          : stateBufer.searchKey = 0
           
          return stateCopy;
        }

       

        default: 
            
            return state;
    }
}



export const choose = (choosen) => ({ type: CHOOSE, choosen});
export const deleteone = () => ({ type: DELETEONE});
export const setSearch = () => ({ type: SETSEARCH });
export const searchOne = (inputSearch) => ({ type: SEARCHONE, inputSearch});
export const resetSearch = () => ({ type: RESETSEARCH});
export const addone = (name, date, days, mission, isMultiple) => ({ type: ADDONE, name, date, days, mission, isMultiple});

export default MainPageReducer;