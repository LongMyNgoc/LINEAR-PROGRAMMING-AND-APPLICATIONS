import './TeacherMUI.css'
import TeacherProfile from '../TeacherProfile/TeacherProfile';

const TeacherMUI = ({ activeTab }: { activeTab: string | null; } ) => {
    return(
        <>
        { activeTab === "profile" ?(
            <> 
            <TeacherProfile />
            </>
        ) : null
        }
        </>
    );
};

export default TeacherMUI;