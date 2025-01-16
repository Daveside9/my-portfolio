// src/components/PasswordManager.js
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const PasswordManager = () => {
  const [masterPassword, setMasterPassword] = useState('');
  const [savedCredentials, setSavedCredentials] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  
  // Encrypt data
  const encryptData = (data) => {
    return CryptoJS.AES.encrypt(data, masterPassword).toString();
  };

  // Decrypt data
  const decryptData = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, masterPassword);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const handleSaveCredential = () => {
    const encryptedUsername = encryptData(newUsername);
    const encryptedPassword = encryptData(newPassword);
    setSavedCredentials([
      ...savedCredentials,
      { username: encryptedUsername, password: encryptedPassword },
    ]);
    setNewUsername('');
    setNewPassword('');
  };

  const handleViewCredentials = () => {
    return savedCredentials.map((cred, index) => (
      <div key={index}>
        <p>Username: {decryptData(cred.username)}</p>
        <p>Password: {decryptData(cred.password)}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Password Manager</h2>
      <div>
        <label>Set Master Password: </label>
        <input
          type="password"
          value={masterPassword}
          onChange={(e) => setMasterPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleSaveCredential}>Save Credential</button>
      </div>
      <div>
        <h3>Saved Credentials</h3>
        {handleViewCredentials()}
      </div>
    </div>
  );
};

export default PasswordManager;
