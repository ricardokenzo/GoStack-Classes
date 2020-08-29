import React,{useState, useEffect} from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

function App(){
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        api.get('projects').then(response =>{
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        //projects.push(`Novo projeto ${Date.now()}`);//evitar o push, pois precisa gerar um novo array
        //setProjects([...projects, `Novo projeto ${Date.now()}`]);
        const response = await api.post('projects',{
            title: `Novo projeto ${Date.now()}`,
            owner: "Ricardo Ota"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects"/>         

            <ul>
                {projects.map(project=><li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar novo projeto</button>
        </>
    ); 
}

export default App;