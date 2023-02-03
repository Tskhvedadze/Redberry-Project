import { Routes, Route } from 'react-router-dom'

import { Home, About, Education, Experience, Summary } from '../pages'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='education' element={<Education />} />
                <Route path='experience' element={<Experience />} />
                <Route path='summary' element={<Summary />} />
            </Routes>
        </>
    )
}

export default App
