import './AdminMUI.css'
import { AdminMUIProps } from './AdminMUI.types';
import Account from '../Account/Account/Account';

const AdminMUI = ({ activeTab }: AdminMUIProps) => {

    return (
        <>
        {activeTab === "account" ? (
            <Account />
        ) : null}
        </>
    );
};

export default AdminMUI;