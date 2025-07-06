import Head from 'next/head'

export default function Admin() {
  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
      })
      window.location.href = '/'
    } catch (error) {
      console.error('Logout failed:', error)
      window.location.href = '/'
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ color: '#333', margin: 0 }}>
            🛡️ Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Logout
          </button>
        </div>

        {/* Welcome Message */}
        <div style={{
          backgroundColor: '#e8f5e8',
          padding: '1.5rem',
          borderRadius: '10px',
          marginBottom: '2rem',
          border: '1px solid #c8e6c9'
        }}>
          <h2 style={{ color: '#2e7d32', margin: '0 0 1rem 0' }}>
            🎉 Welcome, Administrator!
          </h2>
          <p style={{ color: '#2e7d32', margin: 0 }}>
            You have successfully bypassed the authentication middleware and accessed the admin panel.
          </p>
        </div>

        {/* Sensitive Information Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* User Data */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{ color: '#1976d2', margin: '0 0 1rem 0' }}>
              👥 User Database
            </h3>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>
              <p><strong>Total Users:</strong> 1,247</p>
              <p><strong>Active Users:</strong> 892</p>
              <p><strong>Admin Users:</strong> 3</p>
              <p><strong>Last Login:</strong> 2024-01-15 14:30:22</p>
            </div>
          </div>

          {/* System Info */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{ color: '#7b1fa2', margin: '0 0 1rem 0' }}>
              ⚙️ System Information
            </h3>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>
              <p><strong>Server:</strong> production-web-01</p>
              <p><strong>Database:</strong> postgresql-13.4</p>
              <p><strong>Uptime:</strong> 15 days, 7 hours</p>
              <p><strong>Memory Usage:</strong> 67%</p>
            </div>
          </div>

          {/* Security Alerts */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{ color: '#d32f2f', margin: '0 0 1rem 0' }}>
              🚨 Security Alerts
            </h3>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>
              <p><strong>Failed Logins:</strong> 23 (last 24h)</p>
              <p><strong>Suspicious IPs:</strong> 5 blocked</p>
              <p><strong>Middleware Bypass:</strong> 0 detected</p>
              <p><strong>Last Scan:</strong> 2 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Vulnerability Demo */}
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '1.5rem',
          borderRadius: '10px',
          border: '1px solid #ffcc02',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#e65100', margin: '0 0 1rem 0' }}>
            ⚠️ Vulnerability Demo
          </h3>
          <p style={{ color: '#e65100', margin: '0 0 1rem 0' }}>
            This admin panel is protected by a vulnerable middleware that can be easily bypassed.
          </p>
          <div style={{ fontSize: '0.9rem', color: '#e65100' }}>
            <p><strong>Vulnerability:</strong> Simple cookie-based authentication</p>
            <p><strong>Exploit:</strong> Set cookie: <code>auth=admin-authenticated</code></p>
            <p><strong>Risk Level:</strong> HIGH - Complete authentication bypass</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ color: '#333', margin: '0 0 1rem 0' }}>
            🚀 Quick Actions
          </h3>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Add User
            </button>
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              System Backup
            </button>
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2196f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              View Logs
            </button>
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#9c27b0',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Security Scan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 