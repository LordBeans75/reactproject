import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundrys';

const App = () =>  {

    const[robots, setRobots] = useState([]);
    const[searchfield, setSearchfield] = useState('');

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setRobots(data)
        }
        fetchUsers();
    }, [])




    const onSearchChange = (event)  => {
        setSearchfield(event.target.value );

    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

        return !robots.length ? 
        <h1 className="f1 tc">Loading...</h1> 
        :(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

export default App;