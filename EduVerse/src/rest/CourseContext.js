import { createContext, useContext, useState } from 'react';

// Context'i oluşturuyoruz.
const CourseContext = createContext();

// Provider component'i, courseName state'ini sağlayacak.
export const CourseProvider = ({ children }) => {
    const [courseName, setCourseName] = useState(null);  // courseName state'i

    return (
        <CourseContext.Provider value={{ courseName, setCourseName }}>
            {children}
        </CourseContext.Provider>
    );
};

// Context'i kullanmak için bir custom hook
export const useCourse = () => useContext(CourseContext);
