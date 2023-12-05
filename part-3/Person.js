const name_length = 6;

function Person({age,hobbies,name}) {
    const voteText = age >= 18 ? "GOvote" : "Go study";

    const hobbieslist = hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0,name_length)}</li>
                <li>Age; {age}</li>
                <ul>
                    Hobbies: {hobbieslist}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );

}