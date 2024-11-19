'use client'

import { useMemo, useState } from 'react';
import { Camera, Save, User, Mail, Phone } from 'lucide-react';

export default function ProfileContent() {
    // const [currentUser, setCurrentUser] = useState({
    //     displayName: JSON.parse(localStorage.getItem("auth") as string)?.displayName,
    //     email: JSON.parse(localStorage.getItem("auth") as string)?.email
    // });

    const user = useMemo(() => {
        const name = JSON.parse(localStorage.getItem("auth") as string || "{}")?.displayName
        const email = JSON.parse(localStorage.getItem("auth") as string || "{}")?.email
        if (name && email) {
            return { displayName: name, email }
        }

        return null
    }, [localStorage.getItem("auth")])
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = async () => {
        // Here you would typically update the user profile in Firebase
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow rounded-lg">
                    {/* Profile Header */}
                    <div className="relative h-48 rounded-t-lg bg-gradient-to-r from-indigo-600 to-indigo-800">
                        <div className="absolute -bottom-12 left-8">
                            <div className="relative">
                                <img
                                    //   src={user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&size=128`}
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&size=128`}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full border-4 border-white"
                                />
                                <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-gray-900/60 hover:bg-gray-900">
                                    <Camera className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="px-8 pt-16 pb-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{displayName || 'User'}</h1>
                                <p className="text-gray-600">{email}</p>
                            </div>
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                            >
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                        </div>

                        {isEditing ? (
                            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <div className="mt-1 relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1 relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <div className="mt-1 relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                                    <textarea
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Changes
                                </button>
                            </form>
                        ) : (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                                    <p className="mt-1 text-gray-900">{bio || 'No bio added yet.'}</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                    <p className="mt-1 text-gray-900">{phone || 'No phone number added.'}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}