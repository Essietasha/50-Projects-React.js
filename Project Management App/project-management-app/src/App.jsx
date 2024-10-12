import React from 'react'
import './App.css';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';


const App = () => {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
          text: text,
          id: taskId,
          projectId: prevState.selectedProjectId
      };
      
      return{
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask (id) {
    setProjectsState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null
      }
    })
  };
  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  function handleAddProject(projectData){
    setProjectsState((prevState) => {
      const newProject = {
          ...projectData,
          id: Math.floor(Math.random() * 1000 + 1)
      };
      console.log(projectsState)
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => 
                                            project.id !== prevState.selectedProjectId)
      };
    });
  }

  const deriveSelectedProject = projectsState.projects.find(project =>
                                 project.id === projectsState.selectedProjectId);

  let content = <SelectedProject onDelete={handleDeleteProject} 
                project={deriveSelectedProject} 
                onAddtask={handleAddTask} 
                onDeleteTask={handleDeleteTask} 
                tasksProp={projectsState.tasks}
                />;
  
  if(projectsState.selectedProjectId ===  null){
    content = <NewProject 
              onCancelAdd={handleCancelAddProject} 
              onAdd={handleAddProject} 
              onStartAddProject={handleStartAddProject} 
              />
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected 
              onStartAddProject={handleStartAddProject} 
              />
  };


  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onSelectProject={handleSelectProject} 
          projects={projectsState.projects} 
          selectedProjectId={projectsState.selectedProjectId} 
          onStartAddProject={handleStartAddProject}
      />     
      {content}
    </main>
  )
}

export default App;