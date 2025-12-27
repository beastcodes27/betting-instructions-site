import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  getDoc,
  setDoc 
} from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AdminPanel = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tips, setTips] = useState([]);
  const [groupLinks, setGroupLinks] = useState({ whatsapp: '', telegram: '' });
  const [activeTab, setActiveTab] = useState('tips');
  const navigate = useNavigate();

  // Form states
  const [tipForm, setTipForm] = useState({
    matchName: '',
    league: '',
    tip: '',
    odds: '',
    status: 'Pending'
  });
  const [editingTip, setEditingTip] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
        fetchTips();
        fetchGroupLinks();
      } else {
        navigate('/admin/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchTips = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'tips'));
      const tipsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTips(tipsData);
    } catch (error) {
      console.error('Error fetching tips:', error);
    }
  };

  const fetchGroupLinks = async () => {
    try {
      const docRef = doc(db, 'settings', 'groupLinks');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setGroupLinks(docSnap.data());
      }
    } catch (error) {
      console.error('Error fetching group links:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleAddTip = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tips'), {
        ...tipForm,
        createdAt: new Date()
      });
      setTipForm({ matchName: '', league: '', tip: '', odds: '', status: 'Pending' });
      fetchTips();
      alert('Tip added successfully!');
    } catch (error) {
      console.error('Error adding tip:', error);
      alert('Error adding tip');
    }
  };

  const handleUpdateTip = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'tips', editingTip.id), tipForm);
      setEditingTip(null);
      setTipForm({ matchName: '', league: '', tip: '', odds: '', status: 'Pending' });
      fetchTips();
      alert('Tip updated successfully!');
    } catch (error) {
      console.error('Error updating tip:', error);
      alert('Error updating tip');
    }
  };

  const handleDeleteTip = async (id) => {
    if (window.confirm('Are you sure you want to delete this tip?')) {
      try {
        await deleteDoc(doc(db, 'tips', id));
        fetchTips();
        alert('Tip deleted successfully!');
      } catch (error) {
        console.error('Error deleting tip:', error);
        alert('Error deleting tip');
      }
    }
  };

  const handleEditTip = (tip) => {
    setEditingTip(tip);
    setTipForm({
      matchName: tip.matchName || '',
      league: tip.league || '',
      tip: tip.tip || '',
      odds: tip.odds || '',
      status: tip.status || 'Pending'
    });
  };

  const handleSaveGroupLinks = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'settings', 'groupLinks'), groupLinks);
      alert('Group links updated successfully!');
    } catch (error) {
      console.error('Error saving group links:', error);
      alert('Error saving group links');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-dark flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="bg-primary-blue border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-green">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'tips'
                ? 'bg-primary-green text-white'
                : 'bg-primary-blue text-gray-300'
            }`}
          >
            Manage Tips
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'links'
                ? 'bg-primary-green text-white'
                : 'bg-primary-blue text-gray-300'
            }`}
          >
            Group Links
          </button>
        </div>

        {activeTab === 'tips' && (
          <div className="bg-primary-blue rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingTip ? 'Edit Tip' : 'Add New Tip'}
            </h2>
            <form onSubmit={editingTip ? handleUpdateTip : handleAddTip} className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Match Name</label>
                  <input
                    type="text"
                    value={tipForm.matchName}
                    onChange={(e) => setTipForm({ ...tipForm, matchName: e.target.value })}
                    required
                    className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">League</label>
                  <input
                    type="text"
                    value={tipForm.league}
                    onChange={(e) => setTipForm({ ...tipForm, league: e.target.value })}
                    required
                    className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Tip</label>
                  <input
                    type="text"
                    value={tipForm.tip}
                    onChange={(e) => setTipForm({ ...tipForm, tip: e.target.value })}
                    required
                    className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Odds</label>
                  <input
                    type="text"
                    value={tipForm.odds}
                    onChange={(e) => setTipForm({ ...tipForm, odds: e.target.value })}
                    required
                    className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Status</label>
                  <select
                    value={tipForm.status}
                    onChange={(e) => setTipForm({ ...tipForm, status: e.target.value })}
                    className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Won">Won</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-primary-green hover:bg-primary-green-dark text-white font-bold py-2 px-6 rounded-lg"
                >
                  {editingTip ? 'Update Tip' : 'Add Tip'}
                </button>
                {editingTip && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingTip(null);
                      setTipForm({ matchName: '', league: '', tip: '', odds: '', status: 'Pending' });
                    }}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            <h2 className="text-2xl font-bold text-white mb-4">All Tips</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-primary-green">Match</th>
                    <th className="text-left py-3 px-4 text-primary-green">League</th>
                    <th className="text-left py-3 px-4 text-primary-green">Tip</th>
                    <th className="text-left py-3 px-4 text-primary-green">Odds</th>
                    <th className="text-left py-3 px-4 text-primary-green">Status</th>
                    <th className="text-left py-3 px-4 text-primary-green">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tips.map((tip) => (
                    <tr key={tip.id} className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white">{tip.matchName}</td>
                      <td className="py-3 px-4 text-gray-300">{tip.league}</td>
                      <td className="py-3 px-4 text-gray-300">{tip.tip}</td>
                      <td className="py-3 px-4 text-primary-green">{tip.odds}</td>
                      <td className="py-3 px-4 text-gray-300">{tip.status}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleEditTip(tip)}
                          className="text-blue-400 hover:text-blue-300 mr-3"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTip(tip.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'links' && (
          <div className="bg-primary-blue rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Update Group Links</h2>
            <form onSubmit={handleSaveGroupLinks} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">WhatsApp Group Link</label>
                <input
                  type="url"
                  value={groupLinks.whatsapp}
                  onChange={(e) => setGroupLinks({ ...groupLinks, whatsapp: e.target.value })}
                  placeholder="https://chat.whatsapp.com/..."
                  className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Telegram Group Link</label>
                <input
                  type="url"
                  value={groupLinks.telegram}
                  onChange={(e) => setGroupLinks({ ...groupLinks, telegram: e.target.value })}
                  placeholder="https://t.me/..."
                  className="w-full bg-primary-dark border border-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-primary-green hover:bg-primary-green-dark text-white font-bold py-2 px-6 rounded-lg"
              >
                Save Links
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

