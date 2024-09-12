import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import ViewUser from './_viewUser';
import AddUser from './_addUser';
import EditUser from './_editUser';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { confirmDialog } from 'primereact/confirmdialog';


function Users() {

    const [users, setUsersList] = useState([]);
    const [showViewMode, setShowViewMode] = useState(false);
    const [showAddMode, setShowAddMode] = useState(false);
    const [showEditMode, setShowEditMode] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null)

    useEffect(() => {
        getAllUsers();
    }, []);


    const getAllUsers = async () => {
        try {
            const response = await axios.get('https://66e342c7494df9a478e4c82b.mockapi.io/users');
            if (response) {
                setUsersList(response.data);
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const actionsTemplate = (rowDate) => {
        return (
            <>
                <button className='btn btn-success' onClick={() => {
                    setSelectedUserId(rowDate.id)
                    setShowViewMode(true)
                }}>
                    <i className='pi pi-eye'></i>
                </button>
                <button className='btn btn-primary' onClick={() => {
                    setSelectedUserId(rowDate.id)
                    setShowEditMode(true)
                }}>
                    <i className='pi pi-file-edit'></i>
                </button>
                <button className='btn btn-danger' onClick={() => deleteUserConfirm(rowDate.id)}>
                    <i className='pi pi-trash'></i>
                </button>
            </>
        )
    }

    const deleteUserConfirm = (userId) => {
        confirmDialog({
            message: 'Are you sure you want to delete this user?',
            header: 'Confirmation',
            icon: 'pi pi-trash',
            accept: () => deleteUser(userId),
        });
    }

    const deleteUser = async (userId) =>{
        try{
            const response = await axios.delete('http://localhost:4000/users/' + userId);
            if(response){
                getAllUsers();
            }
        }
        catch (e){
            console.log(e)
        }
    }

    return (
        <div className='users-page'>
            <div className='container'>
            <h1>
        Welcome to Crud-Operations.
      </h1>
      <h3>If it's show some Error refresh the page try again</h3>

                <div className='users-list'>
                    <div className='addNewUser'>
                        <button className='btn btn-success' onClick={() => setShowAddMode(true)}>
                            Add New User <i className='pi pi-plus'></i>
                        </button>
                    </div>
                    <DataTable value={users}>
                    <Column field="id" header="Employee ID"></Column>
                    <Column field="name" header="Employee Name"></Column>
                    <Column field="Role" header="Job_role"></Column>
                    <Column field="email" header="Email Address"></Column>
                    <Column field="phone" header="Phone Number"></Column>
                    <Column field="Hire" header="Hire Date"></Column>
                    <Column field="salary" header="Salary"></Column>
                    <Column header="Actions" body={actionsTemplate}></Column>
                    </DataTable>

                </div>
            </div>
            <Dialog header="View User Data"
                visible={showViewMode}
                style={{ width: '70vw' }}
                onHide={() => setShowViewMode(false)}>

                <ViewUser userId={selectedUserId} />
            </Dialog>

            <Dialog header="Add New User"
                visible={showAddMode}
                style={{ width: '70vw' }}
                onHide={() => setShowAddMode(false)}>

                <AddUser setUserAdded={() => {
                    setShowAddMode(false);
                    getAllUsers();
                }} />
            </Dialog>

            <Dialog header="Edit Exist User"
                visible={showEditMode}
                style={{ width: '70vw' }}
                onHide={() => setShowEditMode(false)}>

                <EditUser userId={selectedUserId} setUserEdited={() => {
                    setShowEditMode(false);
                    getAllUsers();
                }} />
            </Dialog>

            <ConfirmDialog />

        </div>
    )
}

export default Users
