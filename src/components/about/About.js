import React, {useEffect, useState} from 'react'

 const About = () => {

    const [data, setData] = useState([]);
 
    // useEffect(() => {
    //     const data = fetch('https://randomuser.me/api/')
    //     .then((response) => response.json())
    //     .then(resp => {
    //         // console.log(resp.results[0])
    //         // this.setState({ persons: resp.results[0] });
    //     });
    //     console.log(data)
   
    // //   setData(data);
    // }, [data]);

    
        return (
            <div>
            About us
                {/* <h1>{this.state.persons.email}</h1>
                <h1>{this.state.persons.cell}</h1>
                <h1>{this.state.persons.phone}</h1>
                <h1>{this.state.persons.gender}</h1> */}
                {/* <h1>{this.state.persons.location.city}</h1> */}
                {/* {console.log(this.state.persons.name.json()["title"])} */}
                {/* <Album /> */}
            </div>
        )
    }

export default About;