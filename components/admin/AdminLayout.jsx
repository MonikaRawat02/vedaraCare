import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50/50 via-emerald-50/30 to-green-50/20">
      {children}
    </div>
  );
};

export default AdminLayout;
