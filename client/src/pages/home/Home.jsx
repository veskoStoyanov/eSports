import { useState, useEffect } from 'react';


// Styled Components
import { Wrapper } from './Home.style';

// Modules
import { getSports } from '../../modules/api';

const Home = () => {
    const [sports, setSports] = useState([]);

    const initial = async () => {
        try {
            const { data } = await getSports();
            console.log(data)
            setSports(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        initial();
    }, []);

    return (
        <Wrapper>
            {
                <div>
                    <h1>{sports.name}</h1>
                    {/* {
                        sports?.events.map(x => (
                            <div>

                            </div>
                        ))
                    } */}
                </div>
            }
        </Wrapper>
    )
};

export default Home;