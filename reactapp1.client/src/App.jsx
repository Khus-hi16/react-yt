import React from 'react'
import Card from './components/card'


const App = () => {
    return(
        <div  class="parent">
           
            <Card user="Aman" age={32} img='https://images.unsplash.com/photo-1780945068016-b8368da4ca36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <Card user="Khushi" age={20} img='https://images.unsplash.com/photo-1780929679359-59ed8ceb1f82?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <Card user="Mayank" age={22} img='https://images.unsplash.com/photo-1780476895954-b934fb2e480b?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> 
            <Card user="Aayush" age={25} img='https://images.unsplash.com/photo-1780580818926-1932ef5f39b0?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
    )

}

export default App