    // StudentNavbar.tsx
    import Sidebar from './Sidebar.tsx'
    import Topbar from './Topbar.tsx';
    import StudentMUI from '../Main_UI/StudentMUI.tsx';
    import './Student.css';

    const Student = () => {

        return (
            <>
                
            <Sidebar />
            <Topbar />
            <div className="student-container">
            <StudentMUI />
        </div>
         </>
        );
    };

    export default Student;
