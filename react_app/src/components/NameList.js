import React from 'react';
import Person from './Person';

function NameList() {
    // const names = ['Clark', 'Ron', 'Kal']
    // return(
    //     <div>
    //          <h2>video No - 17 [List rendering]</h2>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    //or
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return(<div>{nameList}</div>)

    //render object with few properties
    const persons = [
        {
            id: 1,
            name: 'John',
            age: 32,
            skill: 'Painting'
        },
        {
            id: 2,
            name: 'Michel',
            age: 20,
            skill: 'dancing'
        },
        {
            id: 3,
            name: 'Cheffin',
            age: 40,
            skill: 'cooking'
        },
    ]

    //key prop can not be used in child component to render the element, we need to pass it as different prop
    // const personList = persons.map(person => (<Person key={person.id} person={person}></Person>))
    // return(<div> <h2>video No - 18 [List and keys]</h2> {personList}</div>)


    //video No - 19 [index as key Anti-pattern]
    const names = ['Clark', 'Ron', 'Kal']
    return(
        <div>
            <h2>video No - 19 [index as key Anti-pattern]</h2>
            {
                names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
            }
        </div>
    )

}

export default NameList