"use client";
import { useState, MouseEvent } from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from 'lucide-react';

 
interface WorkoutData {
  Users: any;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string | number | readonly string[] | undefined;
  address: string;

}
 
const page = () => {
  const [workoutData, setWorkoutData] = useState<WorkoutData>({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    address: '',
    Users: []
  });
  const handleWorkoutChange = (field: string, value: string) => {
    setWorkoutData(prev => ({
      ...prev,
      [field]: value
    }));
  };
 
  const handleUserChange = (id: number, field: string, value: string | number) => {
    setWorkoutData(prev => ({
      ...prev,
      Users: prev.Users.map(User =>
        User.id === id ? { ...User, [field]: value } : User
      )
    }));
  };
 
  const saveWorkout = () => {
    console.log('Saving workout:', workoutData);
  };
 
  const clearWorkout = () => {
    setWorkoutData({
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      address: '',
      Users: []
    });
  };
 
 
  function handleSubmit(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    
    // Get current form data
    const formData = {
      firstName: workoutData.firstName,
      lastName: workoutData.lastName,
      email: workoutData.email,
      dateOfBirth: workoutData.dateOfBirth,
      address: workoutData.address
    };
    
    // Add user to the Users array as a new entry
    const newId = workoutData.Users.length > 0 ? Math.max(...workoutData.Users.map(e => e.id)) + 1 : 1;
    const newUser = {
      id: newId,
      name: `${formData.firstName} ${formData.lastName}`,
      Fname: formData.firstName,
      Lname: formData.lastName,
      notes: `Email: ${formData.email}, DOB: ${formData.dateOfBirth}, Address: ${formData.address}`
    };
    
    // Update state with new User and clear form fields
    setWorkoutData(prev => ({
      ...prev,
      Users: [...prev.Users, newUser],
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      address: ''
    }));
    
    alert('User submitted successfully!');
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white uppercase mb-2">Add New User</h1>
          <p className="text-slate-400">Add a new user to the system.</p>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Details */}
            <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">User Details</h2>
 
              <div className="space-y-4">
                <div className="space-y-2"> 
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={workoutData.firstName}
                    className="w-full p-2 rounded-md border border-slate-600 bg-slate-700 text-white resize-none"
                    onChange={(e) => handleWorkoutChange('firstName', e.target.value)}
                    placeholder="Enter first name"
                  />
                </div>
 
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    className="w-full p-2 rounded-md border border-slate-600 bg-slate-700 text-white resize-none"
                    value={workoutData.lastName}
                    onChange={(e) => handleWorkoutChange('lastName', e.target.value)}
                    placeholder="Enter Your Last Name"
                  />
                </div>
 
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    className="w-full p-2 rounded-md border border-slate-600 bg-slate-700 text-white resize-none"
                    value={workoutData.email}
                    onChange={(e) => handleWorkoutChange('email', e.target.value)}
                    placeholder="Enter Your Email"
                  />
                </div>
 
                <div className="space-y-2"> 
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <input 
                    type="date"
                    id="dateOfBirth"
                    className="w-full p-2 rounded-md border border-slate-600 bg-slate-700 text-white"
                    value={workoutData.dateOfBirth}
                    onChange={(e) => handleWorkoutChange('dateOfBirth', e.target.value)}
                  />
                </div>
 
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    id="address"
                    value={workoutData.address || ''}
                    onChange={(e) => handleWorkoutChange('address', e.target.value)}
                    className="p-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                    placeholder="Enter Your Address"
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleSubmit}  >
                  Submit
                </button>
              </div>
            </div>
          </div>
 
          {/* Right Column - Users */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Users ({workoutData.Users.length})</h2>
              </div>
 
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left p-3 text-slate-400">ID</th>
                      <th className="text-left p-3 text-slate-400">First Name</th>
                      <th className="text-left p-3 text-slate-400">Last Name</th>
                      <th className="text-left p-3 text-slate-400">Email</th>
                      <th className="text-left p-3 text-slate-400">Date of Birth</th>
                      <th className="text-left p-3 text-slate-400">Address</th>
                      <th className="text-left p-3 text-slate-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workoutData.Users.map((User) => (
                      <tr key={User.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                        <td className="p-3">{User.id}</td>
                        <td className="p-3">
                          <Input
                            value={User.Fname || ''}
                            onChange={(e) => handleUserChange(User.id, 'Fname', e.target.value)}
                            className="bg-slate-600 border-slate-500 text-white"
                          />
                        </td>
                         <td className="p-3">
                          <Input
                            value={User.Lname || ''}
                            onChange={(e) => handleUserChange(User.id, 'Lname', e.target.value)}
                            className="bg-slate-600 border-slate-500 text-white"
                          />
                        </td>
                        <td className="p-3">
                          <Input
                            type="email"
                            value={User.notes.includes('Email:') ? User.notes.split('Email: ')[1].split(',')[0] : ''}
                            onChange={(e) => handleUserChange(User.id, 'notes', `Email: ${e.target.value}, DOB: ${User.notes.includes('DOB:') ? User.notes.split('DOB: ')[1].split(',')[0] : ''}, Address: ${User.notes.includes('Address:') ? User.notes.split('Address: ')[1] : ''}`)}
                            className="bg-slate-600 border-slate-500 text-white"
                          />
                        </td>
                        <td className="p-3">
                          <Input
                            type="date"
                            value={User.notes.includes('DOB:') ? User.notes.split('DOB: ')[1].split(',')[0] : ''}
                            onChange={(e) => handleUserChange(User.id, 'notes', `Email: ${User.notes.includes('Email:') ? User.notes.split('Email: ')[1].split(',')[0] : ''}, DOB: ${e.target.value}, Address: ${User.notes.includes('Address:') ? User.notes.split('Address: ')[1] : ''}`)}
                            className="bg-slate-600 border-slate-500 text-white"
                          />
                        </td>
                        <td className="p-3">
                          <textarea
                            className="w-full p-2 rounded bg-slate-600 border-slate-500 text-white resize-none"
                            rows={2}
                            value={User.notes.includes('Address:') ? User.notes.split('Address: ')[1] : ''}
                            onChange={(e) => handleUserChange(User.id, 'notes', `Email: ${User.notes.includes('Email:') ? User.notes.split('Email: ')[1].split(',')[0] : ''}, DOB: ${User.notes.includes('DOB:') ? User.notes.split('DOB: ')[1].split(',')[0] : ''}, Address: ${e.target.value}`)}
                          />
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-blue-500 hover:bg-blue-600 text-white"
                              onClick={() => {
                                const user = workoutData.Users.find(u => u.id === User.id);
                                if (user) {
                                  setWorkoutData(prev => ({
                                    ...prev,
                                    firstName: user.Fname || '',
                                    lastName: user.Lname || '',
                                    email: user.notes.includes('Email:') ? user.notes.split('Email: ')[1].split(',')[0] : '',
                                    dateOfBirth: user.notes.includes('DOB:') ? user.notes.split('DOB: ')[1].split(',')[0] : '',
                                    address: user.notes.includes('Address:') ? user.notes.split('Address: ')[1] : ''
                                  }));
                                }
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              className="bg-red-500 hover:bg-red-600 text-white"
                              onClick={() => {
                                setWorkoutData(prev => ({
                                  ...prev,
                                  Users: prev.Users.filter(u => u.id !== User.id)
                                }));
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {workoutData.Users.length === 0 && (
                  <div className="text-center py-8 text-slate-400">
                    No users added yet. Fill out form and click Submit to add users.
                  </div>
                )}
              </div>
 
              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={saveWorkout}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Save User
                </Button>
                <Button 
                  onClick={clearWorkout}
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-700"
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default page;