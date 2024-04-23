import { useEffect } from 'react';
import { usePets } from '../../../Hooks/usePets';
import Layout from '../../../Layout';

const PetList = () => {
    const [getPets, pets] = usePets([]);

    useEffect(() => {
            getPets();
        }, []);

    if (pets.length === 0) return <h1>No hay mascotas</h1>;

    return (
            <Layout>
                <h1>My Pets</h1>
                <ul>
                    {pets.map((pet) => (
                        <li key={pet.id}>{pet.name}</li>
                    ))}
                </ul>
            </Layout>
    );
};

export default PetList;