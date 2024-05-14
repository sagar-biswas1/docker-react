import React from 'react';

const UserAccount = ({user}) => {
    return (
        <div>
            <h2>User profile</h2>
            {
                user.isAdmin && <button>Edit</button>
            }
            <div>
                <strong>{user.name}</strong>
            </div>
        </div>
    );
};

export default UserAccount;