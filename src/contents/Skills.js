import React from 'react';

function Skills() {
    const ProgrammingLanguages = ['HTML', 'CSS/SCSS/SASS', 'JavaScript', 'C/C++', 'PHP', 'SQL', 'SQL', 'Dart', 'Kotlin(Basic)'];
    const Framework = ['React.js', 'Flutter', 'Codeigniter', 'Bootstrap'];
    const Database = ['My SQL', 'SQL server'];
    const Toolsskills = ['Git', 'Visual Stodio Code', 'Sourcetree', 'Koala'];

    return (
        <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <h3 className="subtopic title-skills">Programming Languages</h3>
            <ul>
                {ProgrammingLanguages.map((value) => {
                    return <li key={value}>{value}</li>;
                })}
            </ul>
            <h3 className="subtopic title-skills">Framework</h3>
            <ul>
                {Framework.map((value) => {
                    return <li key={value}>{value}</li>;
                })}
            </ul>
            <h3 className="subtopic title-skills">Database</h3>
            <ul>
                {Database.map((value) => {
                    return <li key={value}>{value}</li>;
                })}
            </ul>
            <h3 className="subtopic title-skills">Toolsskills</h3>
            <ul>
                {Toolsskills.map((value) => {
                    return <li key={value}>{value}</li>;
                })}
            </ul>
        </div>
    );
}

export default Skills;